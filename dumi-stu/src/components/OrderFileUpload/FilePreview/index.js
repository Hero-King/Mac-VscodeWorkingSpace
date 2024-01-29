import React from 'react';
import { Modal,Button } from 'antd';
import cls from 'classnames';
import styles from '../FileUpload/style/index.module.less';

function isPhoto(url) {
    url = url || '';
    return (
      url.toLowerCase().includes('png') ||
      url.toLowerCase().includes('jpg') ||
      url.toLowerCase().includes('gif') ||
      url.toLowerCase().includes('jpeg')
    );
  }
  

export default class FilePreview extends React.Component {

    state = {
        downloading: false,
        preUrl: '',
        downUrl: '',
        fileName: ''
    }

    componentDidMount(){
        console.log('=====componentDidMount===window==',window);
        console.log('=====componentDidMount=====',window.location);
      const downloadUrl = this.getUrlToken('downloadUrl',window.location.search);
      const previewUrl = this.getUrlToken('previewUrl',window.location.search);
      const fileName = this.getUrlToken('fileName',window.location.search);
      const fileId = this.getUrlToken('fileId',window.location.search);
      console.log('=====componentDidMount==downloadUrl===',downloadUrl,previewUrl,fileName,fileId);
      const preUrl = `${previewUrl}/${fileId}?rand=${Date.now()}`;
      const downUrl = `${downloadUrl}${fileId}`;
      this.setState({
        preUrl,
        downUrl,
        fileName
      });
    }

    getUrlToken = (name, str)=> {
        const reg = new RegExp(`(^|&)${ name}=([^&]*)(&|$)`);
        const r = str.substring(1).match(reg);
        if (r != null) {
          let decodeStr = r[2]
          try{
            decodeStr = decodeURIComponent(decodeStr)
          }catch{
            decodeStr = r[2]
          }
          return  decodeStr 
        } 
        return null;
    }

    handlerDownload = () => {
        this.setState({
          downloading: true
        });
        const { downUrl, fileName } = this.state;
        setTimeout(() => {
          const a = document.createElement('a');
          a.style.display = 'none';
          document.body.appendChild(a);
          a.href = downUrl;
          a.download = fileName;
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

    render(){
        const { downloading, preUrl } = this.state;
        
        return(
            <div>
                <Modal
                    title={

                      <>
                        <span style={{marginRight: 10}}>附件预览</span>    
                        <Button
                            key="submit"
                            type="primary"
                            icon="download"
                            loading={downloading}
                            onClick={this.handlerDownload}
                        >
                            下载
                        </Button>       
                      </>
                  }
                    wrapClassName={cls(styles['preview-box'])}
                    mask={false}
                    visible={true}
                    closable={false}
                    footer={null}
                    onCancel={this.handlerPreviewCancel}
                >
 
                    <iframe
                    style={{ width: '100%', height: '100%' }}
                    title="附件预览"
                    frameBorder={0}
                    src={preUrl}
                    width="100%"
                    height="100%"
                    />
                </Modal>
            </div>
        )
    }
}