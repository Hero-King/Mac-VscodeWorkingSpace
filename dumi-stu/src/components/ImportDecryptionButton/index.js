/**
 * @description 导入组件
 * @author 王浩
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Button, Upload, Icon} from "antd";
import classNames from 'classnames';
import { host } from "../../configs/DefaultConfig";

export default class ImportDecryptionButton extends React.Component {
    static defaultProps = {
        prefixCls: 'my-importDecryptionButton',
        iconType: 'download',
        disabled: false,
        btnType: null,
        onChange() {},
    }

    static propTypes = {
        prefixCls: PropTypes.string,
        /** icon 类型 */
        iconType: PropTypes.string,
        /** 是否禁用 */
        disabled: PropTypes.bool,
        /** 按钮标签 */
        label: PropTypes.string,
        /** 按钮类型 */
        btnType: PropTypes.string,
        /** 导入excel文件的回调事件 */
        onChange: PropTypes.func,
        needShow: PropTypes.bool,
    }

    propsUpload = () => {
        return {
            name: 'file',
            action: host + "/edm-service/ocr/fileDecryptionRest",
            showUploadList: false,
            onChange: this.handleImportExcel
        }
    };

    handleImportExcel = ({file}) => {
        const { onChange, getJsonData } = this.props;
        if (file.status === 'done') {
            const resAvailable = {
                ...file.response,
                json: file.response.json ? file.response.json.filter(item=>this.checkItemValue(item)) : []
            }
            if (onChange) {
                onChange(resAvailable);
            }
            getJsonData && getJsonData(resAvailable.json);
        }
    };

    checkItemValue = (obj) => {
        return Object.values(obj).some(item=>item)
    }

    render() {
        const { prefixCls, className, iconType, label, disabled, btnType } = this.props;
        const classString = classNames({
            [prefixCls]: true,
            [className]: !!className,
        });
        return (
            <div className={classString} style={{display: 'inline'}}>
                <Upload {...this.propsUpload()}>
                    <Button disabled={disabled} type={btnType}>
                        <Icon type={iconType} /> {label || '导入数据'}
                    </Button>
                </Upload>
            </div>
        );
    }
}
