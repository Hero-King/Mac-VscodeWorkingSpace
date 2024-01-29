/*
 * @Author: zp
 * @Date:   2019-07-24 11:38:46
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-07-22 11:28:48
 */
import React, { Component, Fragment } from "react";
import {
  Upload,
  Icon,
  Button,
  Modal,
  Row,
  message,
  Card,
  Spin,
  Col
} from "antd";
import PropTypes from "prop-types";
import cls from "classnames";
import { multiply, round, add, toNumber } from "lodash";
import * as fileIcon from "./fileIcon";
import styles from "./index.module.less";
import RcViewer from "./rcViewer";
import * as fetchHelper from "moment";
import { SearchTable } from 'seid';
import RcUpload from 'rc-upload';
import throttle from 'lodash/throttle';
import { mainTabAction } from 'sei-utils';

/**
 * @return {boolean}
 */
export function T() {
  return true;
}

function isPhoto(url) {
  url = url || "";
  return (
    url.toLowerCase().includes("png") ||
    url.toLowerCase().includes("jpg") ||
    url.toLowerCase().includes("gif") ||
    url.toLowerCase().includes("jpeg")
  );
}


export default class InvoiceUploadItem extends Component {

  static propTypes = {
    /** 设置上传的请求头部，IE10 以上有效 */
    headers: PropTypes.object,
    /** 是否只读 */
    disabled: PropTypes.bool,
    /** 多文件上传 */
    multiple: PropTypes.bool,
    /** 发到后台的文件参数名 */
    name: PropTypes.string,
    /** 上传文件改变时的状态 上传中、完成、失败都会调用这个函数。 参照antd */
    onChange: PropTypes.func,
    /** 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。参照antd */
    onRemove: PropTypes.func,
    /** 上传相关接口域名 */
    domain: PropTypes.string.isRequired,
    /** 代替 ref 回调 */
    onRef: PropTypes.func,
    /** 默认文件列表 */
    defaultFileList: PropTypes.arrayOf(
      PropTypes.shape({
        /** 文件id */
        docId: PropTypes.string.isRequired,
        /** 文件名称 */
        fileName: PropTypes.string.isRequired
      })
    ),
    /** 税率请求配置 */
    taxConfig: PropTypes.shape({
      /** 列配置 */
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          /** 列名称 */
          title: PropTypes.string.isRequired,
          /** 对应 obj 的属性 */
          dataIndex: PropTypes.string.isRequired
        })
      ),
      /** obj 唯一值 */
      key: PropTypes.string.isRequired,
      /** obj 显示值 */
      text: PropTypes.string.isRequired,
      /** 请求数据方法 promise,返回数据里必须包含taxRate属性，组件以该字段进行计算 */
      dataService: PropTypes.func
    })
  };

  static defaultProps = {
    headers: null,
    disabled: false,
    multiple: false,
    defaultFileList: [],
    name: "file",
    onChange: T,
    onRemove: T,
    onRef: null,
    taxConfig: {
      columns: [
        {
          title: "税码",
          dataIndex: "taxCode"
        },
        {
          title: "名称",
          dataIndex: "name"
        },
        {
          title: "税率",
          dataIndex: "taxRate"
        }
      ],
      key: "id",
      text: "name",
      dataService: () => {
        return fetchHelper.get(
          "/api-gateway/brm-baf-service/taxItemType/findAllUnfrozen"
        );
      }
    }
  };

  constructor(props) {
    super(props);
    const { defaultFileList } = props;
    const initFiles = this.initDefaultFile(defaultFileList);
    const initPhone = this.initDefaultPhoto(defaultFileList);
    this.throttleTime = 1000;
    this.handlerSetState = throttle(this.handlerSetState, this.throttleTime);
    this.doneList = this.initDefaultFile(defaultFileList);
    this.errorList = [];
    this.uploadNum = defaultFileList.length;
    this.state = {
      viewType: "list",
      downloadUrl: "",
      downloadFileName: "",
      downloading: false,
      previewVisible: false,
      fileList: initFiles,
      previewUrl: "",
      photosFile: initPhone,
      startIndex: 0,
      errorList: [],
      uploading: false,
    };
  }

  componentDidMount() {
    const { onRef } = this.props;
    if (onRef) {
      onRef(this);
    }
  }

  componentWillUnmount() {
    this.doneList = [];
    this.errorList = [];
  }

  handlerSetState = () => {
    const { onChange } = this.props;
    this.setState({
      fileList: [...this.doneList],
      errorList: [...this.errorList],
      photosFile: this.initDefaultFile(this.doneList),
      uploading: true
    });
    if (onChange) {
      onChange(this.doneList);
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.setState({
        uploading: false,
      })
    }, this.throttleTime + 300);
  }
  handlerViewType = (vt, e) => {
    e.stopPropagation();
    this.setState({
      viewType: vt
    });
  };

  getIcon = (fileName, id) => {
    const { domain } = this.props;
    if (fileName.includes("doc")) {
      return fileIcon.word;
    }
    if (fileName.includes("xls")) {
      return fileIcon.excel;
    }
    if (fileName.includes("pdf")) {
      return fileIcon.pdf;
    }
    if (
      fileName.includes("zip") ||
      fileName.includes("rar") ||
      fileName.includes("7z")
    ) {
      return fileIcon.zip;
    }
    if (
      fileName.toLowerCase().includes("png") ||
      fileName.toLowerCase().includes("jpg") ||
      fileName.toLowerCase().includes("gif") ||
      fileName.toLowerCase().includes("jpeg")
    ) {
      return `${domain}/edm-service/download?docId=${id}`;
    }
    return fileIcon.defaultIcon;
  };

  initDefaultPhoto = (fileList = []) => {
    const result = [];
    const { domain } = this.props;
    for (let i = 0; i < fileList.length; i += 1) {
      const file = fileList[i];
      if (isPhoto(file.fileName || file.name)) {
        result.push({
          original: `${domain}/edm-service/download?docId=${file.id}`,
          id: file.id
        });
      }
    }
    return result;
  };

  initDefaultFile = (fileList = []) => {
    const { domain } = this.props;
    return fileList.map(item => {
      return {
        ...item,
        id: item.docId,
        uid: item.docId,
        name: item.fileName,
        status: "done",
        url: `${domain}/edm-service/download?docId=${item.docId}`,
        thumbUrl: `${domain}/edm-service/preview/${item.docId}`
      };
    });
  };

  handlerPreviewCancel = () => {
    this.setState({ previewVisible: false });
  };

  handlerPreview = file => {
    if (file.docId) {
      // const { photosFile } = this.state;
      const preUrl = `${file.thumbUrl}?rand=${Date.now()}`;
      const downUrl = file.url;
      // const fileName = file.fileName;
      // const startIndex = photosFile.findIndex(
      //   photo => photo.id === file.docId
      // );
      // this.setState({
      //   downloadFileName: fileName,
      //   previewUrl: preUrl,
      //   downloadUrl: downUrl,
      //   previewVisible: true,
      //   startIndex
      // });
      const fileName = file.fileName || file.response[0].fileName;
      const path = window.location.pathname && window.location.pathname.split('/') ? `/${window.location.pathname.split('/')[1]}` : '';
      let url = `${window.location.origin}${path}/FilePreview?previewUrl=${preUrl}&downloadUrl=${downUrl}&fileName=${fileName}&fileId=${file.docId}`;

      mainTabAction.tabOpen({ id: `file_preview_${file.docId}`, fileName: `附件-${fileName}`, featureUrl: url })

    }
  };
  handleUploadChange = (data) => {
    const { domain, onChange } = this.props;
    const { errorList, photosFile, fileList } = this.state;
    if (!data.invoiceCode) {
      message.destroy();
      errorList.push(data);
      this.errorList.push(data);
      message.error("上传的电子发票无法识别或不符合要求，请检查！！");
      this.uploadNum--;
    } else {
      data.url = `${domain}/edm-service/download?docId=${data.docId}`;
      data.thumbUrl = `${domain}/edm-service/preview/${data.docId}`;
      photosFile.push({
        original: data.url,
        id: data.docId,
      });

      //上传数据加工
      console.log(1111, data);
      // if (!data.taxMoney) {
      //   data.taxAmount = data.amount;
      // }
      if (!data.totalAmount) {
        data.totalAmount = data.amount;
      }

      // if (!data.taxAmount)
      //   data.taxAmount = data.amount;

      fileList.push(data);
      this.doneList.push(data);
    }
    this.handlerSetState();
  };

  handlerUploadError = (error, response, file) => {
    const { errorList } = this.state;
    errorList.push(file);
    message.error(
      `文件【${file.name}】解析错误，错误信息:【${error.type}】`
    );
    this.errorList.push(file);
    this.uploadNum--;
    this.handlerSetState();
  }

  handlerDownload = () => {
    this.setState({
      downloading: true
    });
    const { downloadUrl, downloadFileName } = this.state;
    setTimeout(() => {
      const a = document.createElement("a");
      a.style.display = "none";
      document.body.appendChild(a);
      a.href = downloadUrl;
      a.download = downloadFileName;
      a.click();
      this.setState(
        {
          downloading: false
        },
        () => {
          a.parentNode.removeChild(a);
        }
      );
    }, 3000);
  };

  // 删除文件
  handleRemove = file => {
    const { fileList, photosFile } = this.state;
    const { onChange } = this.props;
    const list = fileList.filter(item => file.docId !== item.docId);
    if (onChange) {
      onChange(list);
    }
    this.uploadNum = list.length;
    this.doneList = [...list];
    if (isPhoto(file.fileName)) {
      const listPhotos = photosFile.filter(
        item => item.id !== file.docId
      );
      this.setState({ fileList: list, photosFile: listPhotos });
    } else {
      this.setState({ fileList: list });
    }
  };

  getImageActions = item => {
    const { disabled } = this.props;
    const actions = [
      <Icon type="eye" onClick={() => this.handlerPreview(item)} />,
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <Icon type="download" />
      </a>
    ];

    if (!disabled) {
      actions.push(
        <Icon type="delete" onClick={() => this.handleRemove(item)} />
      );
    }
    return actions;
  };

  taxRateChange = (uid, taxObj) => {
    const { fileList } = this.state;
    const { onChange } = this.props;
    const file = fileList.filter(item => item.docId === uid)[0];
    if (file.taxMoney) {
      file.taxAmount = file.taxMoney;
      delete file.taxMoney;
    } else {

      //手动计算
      const taxRate = toNumber(taxObj ? taxObj.taxRate : 0);

      if (file.taxRate || !file.taxAmount) {
        //第一次拉取数据不需要计算，切换了税率才才参与计算
        //或 税金为0的时候算
        const taxAmount = round(multiply(file.amount, taxRate), 2);
        const totalAmount = round(add(taxAmount, file.amount), 2);
        file.totalAmount = totalAmount;
        file.taxAmount = taxAmount;
      }

      file.tax = taxObj;
      file.taxRate = taxRate;

      console.log(file);
    }
    if (onChange) {
      onChange(fileList);
    }
    this.setState({ fileList });
  };

  taxAmountChange = (uid, e) => {
    const { fileList } = this.state;
    const { onChange } = this.props;
    const file = fileList.filter(item => item.docId === uid)[0];
    file.taxAmount = toNumber(e.target.value);
    file.totalAmount = round(add(file.amount, file.taxAmount), 2);
    if (onChange) {
      onChange(fileList);
    }
    this.setState({ fileList });
  };

  getShowContent = file => {
    const item = file;
    const { taxConfig, disabled } = this.props;

    //手动触发一次
    // console.log(222, file);

    // 如果数据丢失，重新计算一回
    if (!item.totalAmount) {
      console.log(555, item.totalAmount);
      item.totalAmount = (item.amount + item.taxAmount).toFixed(2)
    }

    return (
      <div>
        <p
          className={cls(styles.content)}
          style={{ color: "black" }}
          title={item.fileName}
        >
          {item.fileName}
        </p>
        <p className={cls(styles.content)}>
          <span className={cls(styles.label)}>发票代码:</span>
          <span className={cls(styles["span-content"])}>
            {item.invoiceCode || <span style={{ color: "red" }}>无法识别</span>}
          </span>
        </p>
        <p className={cls(styles.content)}>
          <span className={cls(styles.label)}>发票号码:</span>
          <span className={cls(styles["span-content"])}>
            {item.invoiceNumber || (
              <span style={{ color: "red" }}>无法识别</span>
            )}
          </span>
        </p>
        <p className={cls(styles.content)}>
          <span className={cls(styles.label)}>开票日期:</span>
          <span className={cls(styles["span-content"])}>
            {item.invoiceDate || <span style={{ color: "red" }}>无法识别</span>}
          </span>
        </p>
        <p className={cls(styles.content)}>
          <span className={cls(styles.label)}>金&#12288;&#12288;额:</span>
          <span className="span-content">
            {item.totalAmount || item.amount || 0}
          </span>
        </p>
        <p className={cls(styles.content)}>
          <span className={cls(styles.label)}>税&#12288;&#12288;率:</span>
          <SearchTable
            value={item.tax ? JSON.stringify(item.tax) : ""}
            objVal
            style={{ width: "150px", height: "20px" }}
            config={taxConfig}
            disabled={disabled}
            selectChange={taxObj => this.taxRateChange(file.docId, taxObj)}
          />
        </p>
        <p className={cls(styles.content)}>
          <span className={cls(styles.label)}>无税金额:</span>
          <span className="span-content">{item.amount || 0}</span>
        </p>
        <p className={cls(styles.content)}>
          <span className={cls(styles.label)}>税&#12288;&#12288;金:</span>
          <span className={cls(styles["span-content"])}>
            <input
              type="number"
              style={{ width: "150px", height: "20px" }}
              onChange={e => this.taxAmountChange(file.docId, e)}
              disabled={disabled}
              value={item.taxAmount || ""}
            />
          </span>
        </p>
      </div>
    );
  };

  beforeUpload = (file) => {
    const fileName = file.fileName || file.name;
    if (isPhoto(fileName) || fileName.toLowerCase().includes("pdf")) {
      this.uploadNum++;
      if (this.uploadNum > 100) {
        this.throttleTime = 2000;
      } else if (this.uploadNum > 300) {
        this.throttleTime = 3000;
      } else if (this.uploadNum > 600) {
        this.throttleTime = 5000;
      }
      return true;
    }

    message.destroy();
    message.error("发票只能上传 pdf 或者 图片格式");
    return false;
  };

  uploadCard = fileList => {
    const gridStyle = {
      width: "100%",
      height: 265,
      padding: 5,
      paddingBottom: 47,
      paddingTop: 10
    };

    const leftColStyle = {
      width: 100
    };

    const rightColStyle = {
      flex: 1,
      paddingLeft: 5
    };

    return fileList.map((item, index) => {
      return (
        <Card
          key={item.uid || item.docId || item.fileName || index}
          style={{
            display: "inline-block",
            width: 345,
            marginRight: 10
          }}
          actions={this.getImageActions(item)}
        >
          <Card.Grid style={gridStyle}>
            <Row type="flex" justify="center">
              <Col style={leftColStyle}>
                <img
                  className={cls(styles["upload-thumbnail-img"])}
                  alt={item.fileName ? item.fileName : item.name}
                  src={this.getIcon(item.fileName ? item.fileName : item.name, item.docId ? item.docId : item.id)}
                />
              </Col>
              <Col style={rightColStyle}>{this.getShowContent(item)}</Col>
            </Row>
          </Card.Grid>
        </Card>
      );
    });
  };

  render() {
    const {
      previewVisible,
      previewUrl,
      downloadFileName,
      downloading,
      photosFile,
      startIndex,
      fileList,
    } = this.state;
    const { domain, onChange, onRemove, noOrderNo, disabled, ...rest } = this.props;
    const rcUploadProps = {
      action: `${domain}/edm-service/ocr/invoice`,
      multiple: true,
      showUploadList: false,
      beforeUpload: this.beforeUpload,
      onStart: (file) => {

      },
      onSuccess: this.handleUploadChange,
      onProgress: (step, file) => {
        // console.log('onProgress', Math.round(step.percent), file.name);
      },
      onError: this.handlerUploadError,
    };
    return (
      <Fragment>
        <div className="sei-upload" style={{ position: "relative" }}>
          <div
            className={cls(styles["upload-box"])}
          >
            <RcUpload
              {...rcUploadProps}
            >
              <Button
                type="primary"
                icon="upload"
                style={{ marginRight: "5px" }}
                disabled={disabled}
              >
                上传
              </Button>
            </RcUpload>
            {fileList.length > 0 ? <div style={{ position: "absolute", top: 6, left: 100 }}>已上传{fileList.length}/{this.uploadNum}张 </div> : ''}
            <Spin spinning={this.state.uploading}>
              <ul className={cls(styles["ace-thumbnails"], styles.clearfix)} style={{ marginTop: 16 }}>
                {this.uploadCard(fileList)}
              </ul>
            </Spin>
            <Modal
              title="附件预览"
              wrapClassName={cls(styles["preview-box"])}
              mask={false}
              destroyOnClose
              visible={previewVisible}
              footer={[
                <Button key="back" onClick={this.handlerPreviewCancel}>
                  关闭窗口
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  icon="download"
                  loading={downloading}
                  onClick={this.handlerDownload}
                >
                  下载
                </Button>
              ]}
              onCancel={this.handlerPreviewCancel}
            >
              {isPhoto(downloadFileName) ? (
                <RcViewer
                  options={{
                    inline: true,
                    viewed: event => {
                      const { detail } = event;
                      const file = fileList.find(
                        item => item.docId === detail.originalImage.id
                      );
                      if (file && file.docId) {
                        const downUrl = file.url;
                        const fileName = file.name;
                        this.setState({
                          downloadFileName: fileName,
                          downloadUrl: downUrl
                        });
                      }
                    }
                  }}
                  style={{
                    overflow: "hidden",
                    height: 0
                  }}
                  startIndex={startIndex}
                >
                  {photosFile.map(item => {
                    return (
                      <img
                        key={item.id}
                        id={item.id}
                        src={item.original}
                        alt=""
                      />
                    );
                  })}
                </RcViewer>
              ) : (
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  title="预览"
                  frameBorder={0}
                  src={previewUrl}
                  width="100%"
                  height="100%"
                />
              )}
            </Modal>
          </div>
          {
            this.state.errorList.length > 0 && <div>
              <div style={{ fontWeight: 'bold' }}>失败列表</div>
              {
                this.state.errorList.map(item => {
                  return <div style={{ color: 'red' }} key={`error${Math.random()}`}>
                    {item.fileName}
                  </div>
                })
              }
            </div>
          }

        </div>
      </Fragment>
    );
  }
}
