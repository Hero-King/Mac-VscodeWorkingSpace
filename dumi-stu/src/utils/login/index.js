/**
 * @Description:
 * @Author: CHEHSHUANG
 * @Date: 2019/3/7
 */
import React, {Component, Fragment} from "react"
import {Button, Checkbox, Col, Form, Icon, Input, message, Row, Select, Spin} from 'antd'
import styles from './index.module.less';
import {getDomains, login, getAuthorizedFeatures, getSizeLimit} from "./service";
import {encode} from "./base64";
import {seiLocale, storageHelper,utils} from 'sei-utils';
import {connect} from 'react-redux'
import { setLanguage } from "../../configs/SharedReducer";
import storage from "../../commons/utils/storage";

const {cache, SEI_GLOBAL} = utils;
const {seiIntl} = seiLocale;
const {Item} = Form;

class LoginForm extends Component {
  state = {
    isLoading: false,
    showTenant: false,
    adLogin:true,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, user) => {
      if (!err) {
        // user.password = md5(user.password);
        user.password = encode(user.password);
        user.account = encode(user.account);
        if (user.domain) {
          user.domain = encode(user.domain)
        }
        if (user.adLogin === true) {
          user.adLogin = 1
        } else {
          user.adLogin = 0
        }
        if (user.tenantCode) {
          delete user.tenantCode
        }
        if (user.appId) {
          delete user.appId
        }
        this.doLogin(user);
      }
    })
  };

  componentWillMount() {
    this.getDomain();
  }

  getDomain = () => {
    getDomains().then(res => {
     // console.log(Object.keys(res.data))
      if (res.data) {
        this.setState({domains: res.data})
        let keys = Object.keys(res.data)
        // let data=JSON.parse(res.data);
        this.setState({domains: res.data, domainKey: keys})
      }
    })
  }
  doLogin = (params) => {
    this.setState({isLoading: true});
    login(params).then(res => {
      const { success, data } = res || {};
      if (res.success && res.data) {
        if (res.data.loginStatus === "success") {
          let CURRENT_USER = SEI_GLOBAL().get('CURRENT_USER');
          message.success(seiIntl.get({key: 'gwmBasic_000153', desc: '登录成功'}));
          sessionStorage.removeItem('Authorization');
          sessionStorage.removeItem('_s');
          cache.clear(CURRENT_USER);
          sessionStorage.setItem('Authorization', JSON.stringify(res.data));
          sessionStorage.setItem('_s', res.data.sessionId);
          storage.sessionStorage.set('POLICY', res.data.authorityPolicy);
          getAuthorizedFeatures({userId: res.data.userId}).then(ds => {
            if (ds) {
              storage.sessionStorage.set('AUTH', ds);
            }
          });
          getSizeLimit().then(ds => {
            if (ds.success) {
              let num = Number(ds.data.value);
              let result = !isNaN(num) ? num : 1000000;
              sessionStorage.setItem('limitSize', result);
            }
          });
          cache.set(CURRENT_USER, res.data);
          const { setLanguage } = this.props;
          let locale =data.languageCode || data.locale || 'zh-CN';
          locale = locale.replace("_","-")
          console.log("locale："+locale);
          localStorage.setItem('sei_locale', locale);
          setLanguage();
          setTimeout(() => {
            this.props.history.push({pathname: '/index', state: params})
          }, 200)//延迟进入
        } else if (res.data.loginStatus === "multiTenant") {
          message.error(seiIntl.get({key: 'gwmBasic_000154', desc: '登录时需要传入租户代码'}));
          this.setState({showTenant: true})
        } else if (res.data.loginStatus === "captchaError") {
          message.error(seiIntl.get({key: 'gwmBasic_000155', desc: '验证码错误'}));
        } else if (res.data.loginStatus === "frozen") {
          message.error(seiIntl.get({key: 'gwmBasic_000156', desc: '账号被冻结'}));
        } else if (res.data.loginStatus === "locked") {
          message.error(seiIntl.get({key: 'gwmBasic_000157', desc: '账号被锁定'}));
        } else if (res.data.loginStatus === "failure") {
          message.error(seiIntl.get({key: 'gwmBasic_000158', desc: '账号密码错误或账号不存在'}));
        } else {
          message.error(seiIntl.get({key: 'gwmBasic_000159', desc: '登录失败'}));
        }
      } else {
        message.error(seiIntl.get({key: 'gwmBasic_000159', desc: '登录失败'}));
      }
    })
      .finally(() => {
        this.setState({isLoading: false});
      })
  };

  componentDidMount() {
    window.checkBrowser(function (msg) {
      message.warn(msg);
    });
    this.userInput.focus();
  }

  render() {
    const {showTenant, adLogin} = this.state;
    const {getFieldDecorator} = this.props.form;
    let changeHeight = adLogin || showTenant;
    return (
      <Row className={styles["login-form"]}>
        <div className="auto-center">
          <div className={'logo'}/>
        </div>

        <Row className={'login-row'}>
          <div className={'login-form-box'} style={{height: changeHeight ? 460 : 426}}>
            <div className="login-logo">
              <div className="login-name">{seiIntl.get({key: 'gwmBasic_000160', desc: '财务共享账号登录'})}</div>
            </div>
            <Form onSubmit={this.handleSubmit}>
              {
                showTenant &&
                <Item style={{marginBottom: changeHeight ? 8 : 20}}>
                  {
                    getFieldDecorator('tenantCode', {
                      rules: [{required: false, message: seiIntl.get({key: 'gwmBasic_000161', desc: '请输入租户账号!'})}]
                    })(
                      <Input
                        autoComplete={"off"}
                        autoFocus="autoFocus"
                        size="large"
                        prefix={<Icon type="user" style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.5)'}}/>}
                        placeholder={seiIntl.get({key: 'gwmBasic_000162', desc: '租户账号'})}
                      />
                    )
                  }
                </Item>
              }
              {this.state.adLogin === true && <Item style={{marginBottom: changeHeight ? 8 : 20}}>
                {
                  getFieldDecorator('domain', {
                    initialValue:"svolt",
                    rules: [{required: true, message: seiIntl.get({key: 'gwmBasic_000163', desc: '请选择域'})}]
                  })(
                    <Select
                      autoComplete={"off"}
                      size={"large"}
                      style={{width: "100%"}}
                      placeholder={seiIntl.get({key: 'gwmBasic_000163', desc: '请选择域'})}
                      onSelect={(value) => {
                        if (value !== this.state.receiverType) {
                          this.props.form.setFieldsValue({receiverId: null})
                        }
                      }}
                    >
                      {
                        this.state.domainKey && this.state.domainKey.map((key) => (
                          <Select.Option
                            key={key}
                            value={this.state.domains[key]}
                          >
                            {key}
                          </Select.Option>
                        ))
                      }
                    </Select>
                  )
                }
              </Item>}
              <Item style={{marginBottom: changeHeight ? 8 : 20}}>
                {
                  getFieldDecorator('account', {
                    rules: [{required: true, message: seiIntl.get({key: 'gwmBasic_000164', desc: '请输入用户名!'})}]
                  })(
                    <Input
                      ref={(inst) => {
                        this.userInput = inst;
                      }}
                      autoComplete={"off"}
                      size="large"
                      prefix={<Icon type="user" style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.5)'}}/>}
                      placeholder={seiIntl.get({key: 'gwmBasic_000165', desc: '请输入用户名'})}
                    />
                  )
                }
              </Item>
              <Item style={{marginBottom: changeHeight ? 8 : 20}}>
                {
                  getFieldDecorator('password', {
                    rules: [{required: true, message:  seiIntl.get({key: 'gwmBasic_000166', desc: '请输入密码!'})}]
                  })(
                    <Input
                      autoComplete={"off"}
                      prefix={<Icon type="lock" style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.5)'}}/>}
                      size="large"
                      type="password"
                      placeholder={seiIntl.get({key: 'gwmBasic_000167', desc: '密码'})}
                    />
                  )
                }
              </Item>

              <Item>
                {
                  getFieldDecorator('adLogin', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox onChange={(e) => {
                      this.setState({adLogin: e.target.checked})
                    }}>{seiIntl.get({key: 'gwmBasic_000168', desc: '域登陆'})}</Checkbox>
                  )}
              </Item>
              {/*<Item>*/}
              {/*{*/}
              {/*getFieldDecorator('rememberMe', {*/}
              {/*valuePropName: 'checked',*/}
              {/*initialValue: true,*/}
              {/*})(*/}
              {/*<Checkbox>记住我</Checkbox>*/}
              {/*)}*/}
              {/*/!*className="login-form-forgot" style={{float: 'right'}}*!/*/}
              {/*<a className="login-form-forgot" style={{float: 'right'}}>忘记密码?</a>*/}
              {/*</Item>*/}
              <Button
                type="primary"
                shape="round"
                htmlType="submit"
                size="large"
                className="login-form-button"
                loading={this.state.isLoading}
              >
                {seiIntl.get({key: 'gwmBasic_000169', desc: '登录'})}
              </Button>
            </Form>
          </div>
        </Row>
      </Row>

    )
  }
}


const mapDispatchToProps = {
  setLanguage,
};

const mapStateToProps = (state) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create()(LoginForm))

// export default Form.create()(LoginForm);
