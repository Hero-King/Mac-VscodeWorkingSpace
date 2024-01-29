import React from 'react';
import { Skeleton } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import FileUpload from './FileUpload';
import fetchHelper from './fetchHelper';
import * as fileIcon from './fileIcon';

/**
 * @return {boolean}
 */
export function T() {
  return true;
}

export class OrderFileUpload extends React.Component {
  static propTypes = {
    /** 上传相关接口域名 */
    domain: PropTypes.string.isRequired,
    /** 上传文件改变,删除文件的回调函数 */
    onChange: PropTypes.func,
    /** 单据id */
    entityId: PropTypes.string,
    /** 上下文地址 */
    contextUrl: PropTypes.string,
    /** 默认文件列表 */
    defaultFileList: PropTypes.arrayOf(
      PropTypes.shape({
        /** 文件id */
        id: PropTypes.string.isRequired,
        /** 文件名称 */
        name: PropTypes.string.isRequired
      }),
    ),
    /** 批量下载文件名 */
    batchDownloadFileName: PropTypes.string
  };

  static defaultProps = {
    onChange: T,
    entityId: '',
    defaultFileList: [],
    contextUrl: 'edm-service',
    batchDownloadFileName: `${moment().format('YYYYMMDD')}批量下载文件`
  };

  constructor(props) {
    super(props);
    const { domain, contextUrl } = this.props;
    this.state = {
      fileList: [],
      loading: true
    };
    this.uploadedFile = [];
    this.actionUrl = `${domain}/${contextUrl}/upload`;
    this.previewUrl = `${domain}/${contextUrl}/preview`;
    this.downloadUrl = `${domain}/${contextUrl}/download?docId=`;
    this.batchDownloadUrl = `${domain}/${contextUrl}/batchDownload`;
    this.getEntityDocumentInfosUrl = `${domain}/${contextUrl}/getEntityDocumentInfos`;
  }

  componentDidMount() {
    const { onRef } = this.props;
    if (onRef) {
      onRef(this);
    }
    this.initFileList();
    console.log('====componentDidMount=====');
  }

  clearData = () => {
    const { onChange } = this.props;
    this.uploadedFile = [];
    this.setState(
      {
        fileList: []
      },
      () => {
        if (onChange) {
          onChange([], []);
        }
      },
    );
  };

  processFileItemData = (fileList, isInit) => {
    return fileList.map(item => {
      this.uploadedFile.push(item.id);
      let dataRef = null;
      if (isInit) {
        dataRef = item;
      }
      return {
        dataRef,
        id: item.id,
        uid: item.id,
        name: item.fileName || item.name,
        status: 'done',
        response: [{ id: item.id }],
        url: `${this.downloadUrl}${item.id}`,
        thumbUrl: this.getIcon(item.fileName || item.name, item.id)
      };
    });
  };

  initFileList = () => {
    const { onChange, entityId, defaultFileList } = this.props;
    let fileList = [];
    if (Array.isArray(defaultFileList)) {
      fileList = this.processFileItemData(defaultFileList, true);
    }
    if (entityId) {
      fetchHelper.get(`${this.getEntityDocumentInfosUrl}?entityId=${entityId}`).then(res => {
        const { success, data } = res || {};
        if (success && data && data.length > 0) {
          fileList = fileList.concat(this.processFileItemData(data));
        }
        this.setState(
          {
            fileList,
            loading: false
          },
          () => {
            if (onChange) {
              onChange(this.uploadedFile, fileList);
            }
          },
        );
      });
    } else {
      this.setState(
        {
          fileList,
          loading: false
        },
        () => {
          if (onChange) {
            onChange(this.uploadedFile, fileList);
          }
        },
      );
    }
  };

  getIcon = (fileName, id) => {
    let ext = 'defaultIcon';
    if (fileName.includes('doc')) {
      ext = 'word';
    }
    if (fileName.includes('doc')) {
      ext = 'word';
    }
    if (fileName.includes('xls')) {
      ext = 'excel';
    }
    if (fileName.includes('pdf')) {
      ext = 'pdf';
    }
    if (fileName.includes('zip') || fileName.includes('rar') || fileName.includes('7z')) {
      ext = 'zip';
    }
    if (
      fileName.toLowerCase().includes('png') ||
      fileName.toLowerCase().includes('jpg') ||
      fileName.toLowerCase().includes('gif') ||
      fileName.toLowerCase().includes('jpeg')
    ) {
      return `${this.downloadUrl}${id}`;
    }
    return fileIcon[ext];
  };

  handleChange = ({ file, fileList }) => {
    const { onChange } = this.props;
    const { status, response } = file;
    if (status === 'done') {
      if (response && response.length) {
        this.uploadedFile.push(response[0].id);
      }
    }
    if (status === 'removed') {
      if (response && response.length) {
        this.uploadedFile = this.uploadedFile.filter(item => response[0].id !== item);
      }
    }
    fileList.forEach(item => {
      const fileItem = item;
      const { status: statusCode, response: res } = fileItem;
      if (statusCode === 'done') {
        if (res && res.length) {
          fileItem.id = res[0].id;
        }
        fileItem.thumbUrl = this.getIcon(fileItem.fileName || fileItem.name, fileItem.id);
      }
    });
    this.setState(
      {
        fileList
      },
      () => {
        if (onChange) {
          onChange(this.uploadedFile, fileList);
        }
      },
    );
  };

  handleRemove = file => {
    const { fileList } = this.state;
    const { onChange } = this.props;
    const uploadedFile = this.uploadedFile.filter(fileId => {
      return fileId !== file.id;
    });
    const list = fileList.filter(item => {
      return item.id !== file.id;
    });
    this.uploadedFile = uploadedFile;
    this.setState(
      {
        fileList: list
      },
      () => {
        if (onChange) {
          onChange(this.uploadedFile, list);
        }
      },
    );
  };

  render() {
    const { fileList, loading } = this.state;
    const { domain, defaultFileList, contextUrl, ...rest } = this.props;
    return (
      <Skeleton loading={loading} active>
        <FileUpload
          action={this.actionUrl}
          previewUrl={this.previewUrl}
          downloadUrl={this.downloadUrl}
          batchDownloadUrl={this.batchDownloadUrl}
          {...rest}
          domain={domain}
          contextUrl={contextUrl}
          onChange={this.handleChange}
          fileList={fileList}
          onRemove={this.handleRemove}
        />
      </Skeleton>
    );
  }
}
