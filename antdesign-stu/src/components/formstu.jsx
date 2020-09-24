import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd'


/**
 * Form表单默认没有this.props.form属性  需要使用Form.create()()
 * 新版本使用Form.useForm() 方法返回form实例
 */

class Formstu1 extends Component {

    render() {
        const { getFieldDecorator, getFieldError, getFieldsError, getFieldsValue, getFieldValue, isFieldTouched, isFieldValidating, resetFields, validateFields } = this.props.form   //  引入函数
        if (getFieldError('username')) console.log('err');  //就是当username那个组件含有required属性没有输入的时候触发此函数 
        //if (getFieldsError(['username'])) { console.log('fieldserr') }  //获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error  只要是控件改变了  就会执行

        //获取一组输入控件的值，如不传入参数，则获取全部组件的值
        //console.log(getFieldsValue);    //ƒ (names) {return _this6.getNestedFields(names, _this6.getFieldValue);}
        //console.log(typeof (getFieldsValue));   //function
        console.log(getFieldsValue())   //返回一个JS对象{username: "admin", password: undefined}
        //console.log(getFieldsValue('username')) //error写法出错了  人家接受的参数是一个数组
        console.log(getFieldsValue(['username']))   //返回username绑定的那个组件里面的输入内容{username: "admin"}
        //getFieldValue    Function(fieldName: string)
        console.log(getFieldValue('username'));//这个接受的数据才是 字符串  返回的数据也是字符串 admin
        //console.log(typeof (getFieldValue('username')));    //string
        console.log(typeof (getFieldsValue(['username'])));    //object

        //isFieldTouched   (name: string) => boolean判断某个组件域是否被点击过  是->true 否->undefined
        console.log('isFieldTouched', isFieldTouched, typeof (isFieldTouched));
        //isFieldTouched ƒ (name) {return _this6.getFieldMember(name, 'touched');} function
        //console.log(isFieldTouched('username'));

        //isFieldValidating Function(name) 判断一个输入控件是否在校验状态
        //console.log(isFieldValidating('username'));

        //resetFields Function([names: string[]]) 重置一组输入控件的值（为 initialValue  在getFieldDecorator(id, options) 的options里面设置）与状态，如不传入参数，则重置所有组件
        //如果没有initValue的情况下，直接使用resetFields可以清空文本框的值  如果是有initValue的情况下，直接使用resetFields方法会直接重置为initValue的值
        //resetFields(['username'])   //会瞬间清空username域组件值  就是输入不了值  当然设置了initValue 肯定就是initValue

        //setFields   设置一组输入控件的值与错误状态({ [fieldName]: { value: any, errors: [Error] }) => void

        //setFieldsValue 设置一组输入控件的值（注意：不要在 componentWillReceiveProps 内使用，否则会导致死循环this.props.form.setFieldsValue({ 'password': 'wang' })

        //validateFields ([fieldNames: string[]],[options: object],callback(errors, values)) => void   校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件

        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Item >
                        {/* 里面并不是直接写input标签而是使用 双向绑定 */}
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Button type='dashed' onClick={this.handleSubmit}>提交</Button>
                </Form>
            </div>
        )
    }

    handleSubmit = () => {
        console.log(this.props.form);
        //this.props.form.setFieldsValue({ 'password': 'wang' })
        const { validateFields } = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                console.log(values);    //{username: "3", password: "4"}   返回值是对象

            }
        })

    }
}
const Formstu = Form.create()(Formstu1)     //使得这个组件具有this.props.form属性
export default Formstu;