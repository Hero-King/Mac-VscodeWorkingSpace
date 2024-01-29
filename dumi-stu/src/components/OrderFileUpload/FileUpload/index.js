import { Button, Icon, message, Modal, Upload, List, Avatar, Checkbox } from 'antd';
import cls from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { isEmpty } from 'lodash';
import { setStringFormat } from 'seid/es5/utils/common';
import {cache} from "../../../utils/CommonUtils";
import RcViewer from 'seid/es5/components/Business/InvoiceUpload/rcViewer';
import LocaleReceiver from 'seid/es5/components/Basic/LocaleProvider/LocaleReceiver';
import zhCN from './locales/zh-CN';
import styles from './style/index.module.less';

import { mainTabAction } from 'sei-utils';

/**
 * @return {boolean}
 */
export function T() {
  return true;
}

function isPhoto(url) {
  url = url || '';
  return (
    url.toLowerCase().includes('png') ||
    url.toLowerCase().includes('jpg') ||
    url.toLowerCase().includes('gif') ||
    url.toLowerCase().includes('jpeg')
  );
}

export default class FileUpload extends Component {
  static displayName = 'FileUpload';

  static propTypes = {
    /** 附件列表显示方式 */
    viewType: PropTypes.oneOf(['list', 'card']),
    /** 设置上传的请求头部，IE10 以上有效 */
    headers: PropTypes.object,
    /** 上传接口地址 */
    action: PropTypes.string.isRequired,
    /** 预览接口地址 */
    previewUrl: PropTypes.string.isRequired,
    /** 下载接口地址 */
    downloadUrl: PropTypes.string.isRequired,
    /** 批量下载接口地址 */
    batchDownloadUrl: PropTypes.string.isRequired,
    /** 是否只读 */
    disabled: PropTypes.bool,
    /** 多文件上传 */
    multiple: PropTypes.bool,
    /** 支持上传文件夹 */
    directory: PropTypes.bool,
    /** 默认已经上传的文件列表 */
    defaultFileList: PropTypes.array,
    /** 发到后台的文件参数名 */
    name: PropTypes.string,
    /** 上传文件改变时的状态 上传中、完成、失败都会调用这个函数。 参照antd */
    onChange: PropTypes.func,
    /** 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。参照antd */
    onRemove: PropTypes.func,
    /** 上传相关接口域名 */
    domain: PropTypes.string,
    /** 上下文地址 */
    contextUrl: PropTypes.string,
    /** 批量下载文件名 */
    batchDownloadFileName: PropTypes.string
  };

  static defaultProps = {
    viewType: 'list',
    headers: null,
    disabled: false,
    multiple: false,
    directory: false,
    defaultFileList: [],
    name: 'file',
    onChange: null,
    onRemove: T,
    domain: '',
    contextUrl: 'edm-service',
    batchDownloadFileName: `${moment().format('YYYYMMDD')}批量下载文件`
  };

  constructor(props) {
    super(props);
    this.state = {
      viewType: props.viewType,
      downloadUrl: '',
      downloadFileName: '',
      downloading: false,
      previewVisible: false,
      batchVisible: false,
      batchDownloadList: [],
      previewUrl: '',
      photosFile: this.initDefaultPhoto(props.fileList),
      startIndex: 0,
      uploadIng: false
    };
    
  }

  initDefaultPhoto = (fileList = []) => {
    const result = [];
    const { domain, contextUrl } = this.props;
    for (let i = 0; i < fileList.length; i += 1) {
      const file = fileList[i];
      if (isPhoto(file.fileName || file.name)) {
        result.push({
          original: `${domain}/${contextUrl}/download?docId=${file.id}`,
          id: file.id,
          name: file.fileName || file.name
        });
      }
    }
    console.log('======initDefaultPhoto======',result);
    return result;
    
  };

  handlerViewType = (vt, e) => {
    e.stopPropagation();
    this.setState({
      viewType: vt
    });
  };

  handlerPreviewCancel = () => {
    this.setState({ previewVisible: false });
  };

  handlerPreview = file => {
    const { previewUrl, downloadUrl } = this.props;

    // if (
    //   file.id ||
    //   (file.response && file.response instanceof Array && file.response.length === 1)
    // ) {
    //   const { photosFile } = this.state;
    //   const preUrl = `${previewUrl}/${file.id || file.response[0].id}?rand=${Date.now()}`;
    //   const downUrl = `${downloadUrl}${file.id || file.response[0].id}`;
      const fileName = file.id ? file.name : file.response[0].fileName;
    //   const startIndex = photosFile.findIndex(photo => photo.id === file.response[0].id);
    //   this.setState({
    //     downloadFileName: fileName,
    //     previewUrl: preUrl,
    //     downloadUrl: downUrl,
    //     previewVisible: true,
    //     startIndex
    //   });
    // }

    const path =  window.location.pathname && window.location.pathname.split('/') ? `/${window.location.pathname.split('/')[1]}`:'' ; 
    let url = `${window.location.origin}${path}/FilePreview?previewUrl=${previewUrl}&downloadUrl=${downloadUrl}&fileName=${fileName}&fileId=${file.id || file.response[0].id}`;

    mainTabAction.tabOpen({ id: `file_preview_${file.id || file.response[0].id}`, name: `附件-${fileName}`, featureUrl: url })
    
  };

  handlerDownload = () => {
    this.setState({
      downloading: true
    });
    const { downloadUrl, downloadFileName } = this.state;
    setTimeout(() => {
      const a = document.createElement('a');
      a.style.display = 'none';
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
        },
      );
    }, 3000);
  };

  chooseFileDownload = () => {
    this.setState({ batchVisible: true, batchDownloadList: [] });
  };

  batchDownloadClose = () => {
    this.setState({
      batchVisible: false,
      batchDownloadList: [],
      checkAll: false,
      downloading: false
    });
  };

  handleChooseImgCheck = id => {
    let { batchDownloadList = [] } = this.state;
    const { fileList } = this.props;
    if (batchDownloadList.includes(id)) {
      batchDownloadList = batchDownloadList.filter(item => item !== id);
    } else {
      batchDownloadList.push(id);
    }
    if (fileList.length === batchDownloadList.length) {
      this.setState({ batchDownloadList, checkAll: true });
    } else {
      this.setState({ batchDownloadList, checkAll: false });
    }
  };

  checkAll = e => {
    if (e.target.checked) {
      const { fileList } = this.props;
      const batchDownloadList = fileList.map(file => file.response[0].id);
      this.setState({ batchDownloadList, checkAll: true });
    } else {
      this.setState({ batchDownloadList: [], checkAll: false });
    }
  };

  handlerBatchDownload = () => {
    const { batchDownloadList } = this.state;
    if (isEmpty(batchDownloadList)) {
      message.error('请选择要下载的文件');
      return;
    }
    const { batchDownloadFileName, batchDownloadUrl } = this.props;
    this.setState({ downloading: true });
    setTimeout(() => {
      const a = document.createElement('a');
      a.style.display = 'none';
      document.body.appendChild(a);
      a.href = `${batchDownloadUrl}?fileName=${batchDownloadFileName}&docIds=${batchDownloadList.toString()}`;
      a.download = batchDownloadFileName;
      a.click();
      this.setState(
        {
          downloading: false,
          batchVisible: false
        },
        () => {
          a.parentNode.removeChild(a);
        },
      );
    }, 3000);
  };

  beforeUpload = (file) => {
    const limitSize = cache.get('limitSize');
    if(!limitSize) {
      message.error("请在数据字典配置上传大小！");
      return false;
    }
    const isLtSize = file.size / 1024 < limitSize;
    if (!isLtSize) {
      message.error(`【${file.name}】大小不能超过${limitSize}KB！`,5);
    }
    return isLtSize;
  };

  handleChange = fileObj => {
    const limitSize = cache.get('limitSize');
    const { file } = fileObj;
    let { fileList } = fileObj;
    const { domain, onChange } = this.props;
    const { locale } = this;
    const photosFile = [];
    if(file.status === "uploading"){
      this.setState({uploadIng: true})
    }else {
      this.setState({uploadIng: false})
    }
    fileList.map(fileItem => {
      if (fileItem.status === 'done') {
        if (isPhoto(fileItem.name)) {
          photosFile.push({
            original: `${domain}/edm-service/download?docId=${fileItem.response[0].id}`,
            id: fileItem.response[0].id,
            name: fileItem.name
          });
        }
      }
      if(!fileItem.status) {
        fileItem.status = "error";
        fileItem.response = `上传大小不能超过${limitSize}KB！`;
      }
      return null;
    });
    if (file.status === 'error') {
      message.error(setStringFormat(locale.errMsg, [file.name, file.response && file.response.message]));
      fileList = fileList.filter(item => item.status !== 'error');
    }
    if (onChange) {
      onChange(fileObj);
    }
    this.setState({ photosFile });
  };

  renderCmp = contextLocale => {
    const {
      viewType,
      previewVisible,
      previewUrl,
      downloading,
      photosFile,
      startIndex,
      batchVisible,
      batchDownloadList,
      checkAll,
      downloadFileName,
      uploadIng
    } = this.state;
    const { onChange, locale: customLocale, onRemove, ...rest } = this.props;
    const locale = { ...contextLocale, ...customLocale };

    const uploadProps = {
      action: 'http://dsei.changhong.com:80/edm-service/upload',
      listType: 'picture',
      defaultFileList: [],
      className: viewType,
      onChange: this.handleChange,
      onRemove: this.handleRemove,
      beforeUpload: this.beforeUpload,
      onPreview: file => {
        this.handlerPreview(file);
      },
      ...rest
    };
    this.locale = locale;

    return (
      <Fragment>
        <div className={cls(styles['sei-upload'])}>
          <div className={cls('tool-box')}>
            <span
              className={cls('tool-btn', { select: viewType === 'list' })}
              onClick={e => this.handlerViewType('list', e)}
            >
              <Icon type="bars" style={{ fontSize: '18px' }} />
            </span>
            <span
              className={cls('tool-btn', { select: viewType === 'card' })}
              onClick={e => this.handlerViewType('card', e)}
            >
              <Icon type="appstore" style={{ fontSize: '18px' }} />
            </span>
          </div>
          <div className={cls('download-box')}>
            {!uploadProps.disabled ? (
              <Button onClick={this.chooseFileDownload} icon="download" disabled={uploadIng}>
                {locale.batchDownload}
              </Button>
            ) : null}
          </div>
          <div className={cls('upload-box', { disabled: uploadProps.disabled })}>
            <Upload
              {...uploadProps}
              ref={inst => {
                this.upload = inst;
              }}
            >
              <div className={cls('upload-tool-bar')}>
                {!uploadProps.disabled ? (
                  <Button type="primary" icon="upload" style={{ marginRight: 5 }}>
                    {locale.upload}
                  </Button>
                ) : null}
              </div>
            </Upload>
            <Modal
              title={locale.filePreview}
              wrapClassName={cls(styles['preview-box'])}
              mask={false}
              destroyOnClose
              visible={previewVisible}
              footer={[
                <Button key="back" onClick={this.handlerPreviewCancel}>
                  {locale.close}
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  icon="download"
                  loading={downloading}
                  onClick={this.handlerDownload}
                >
                  {locale.download}
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
                      const file = photosFile.find(item => item.id === detail.originalImage.id);
                      if (file && file.id) {
                        const downUrl = file.original;
                        const fileName = file.name;
                        this.setState({
                          downloadFileName: fileName,
                          downloadUrl: downUrl
                        });
                      }
                    }
                  }}
                  style={{
                    overflow: 'hidden',
                    height: 0
                  }}
                  startIndex={startIndex}
                >
                  {photosFile.map(item => {
                    return <img key={item.id} id={item.id} src={item.original} alt="" />;
                  })}
                </RcViewer>
              ) : (
                <iframe
                  style={{ width: '100%', height: '100%' }}
                  title={locale.preview}
                  frameBorder={0}
                  src={previewUrl}
                  width="100%"
                  height="100%"
                />
              )}
            </Modal>
            <Modal
              title={[
                locale.batchDownload,
                <Checkbox
                  key="checkAll"
                  checked={checkAll}
                  style={{ marginLeft: '8px' }}
                  value
                  onClick={this.checkAll}
                >
                  全选
                </Checkbox>
              ]}
              destroyOnClose
              visible={batchVisible}
              footer={[
                <Button key="back" onClick={this.batchDownloadClose}>
                  {locale.close}
                </Button>,
                <Button
                  key="batchDownload"
                  type="primary"
                  icon="download"
                  loading={downloading}
                  onClick={this.handlerBatchDownload}
                >
                  {locale.batchDownload}
                </Button>
              ]}
              afterClose={this.batchDownloadClose}
              onCancel={this.batchDownloadClose}
            >
              <List
                itemLayout="horizontal"
                dataSource={rest.fileList}
                renderItem={item => (
                  <div onClick={() => this.handleChooseImgCheck(item.response[0].id)}>
                    <List.Item>
                      <List.Item.Meta avatar={<Avatar src={item.thumbUrl} />} title={item.name} />
                      <Checkbox checked={batchDownloadList.includes(item.response[0].id)} />
                    </List.Item>
                  </div>
                )}
              />
            </Modal>
          </div>
        </div>
      </Fragment>
    );
  };

  render() {
    return (
      <LocaleReceiver localeContext="FileUpload" defaultLocale={zhCN}>
        {this.renderCmp}
      </LocaleReceiver>
    );
  }
}
