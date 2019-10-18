import React from 'react'
import { Spin } from 'antd';
import PubSub from 'pubsub-js'
import axios from 'axios'       //异步请求的工具
export default class List extends React.Component {
    state = {
        initView: true,   //初始状态  显示enter 。。。提示信息
        loading: false,      //是否在加载数据呀
        users: [],
        errorMsg: null       //是否搜索出错了
    }

    //当我们在组件一加载完成就去订阅
    componentDidMount() {
        PubSub.subscribe('search', (msg, searchname) => {
            this.setState({
                initView: false,
                loading: true
            })
            const url = `https://api.github.com/search/users?q=${searchname}`;
            axios.get(url)
                .then(res => {
                    const result = res.data
                    console.log(result) //  返回了数据data 里面有个items数组  数组里面全是符合查询条件的对象，并且一个对象有很多的属性  我们只需要三个属性  如下
                    const users = result.items.map((item) => ({ name: item.login, url: item.html_url, avatarUrl: item.avatar_url }))
                    this.setState({ users, loading: false })
                })
                //gen新失败
                .catch(err => {
                    this.setState({ loading: false, errorMsg: err.message })
                })

        })
    }


    render() {

        const { initView, loading, users, errorMsg } = this.state
        if (initView) {
            return <h2>请输入关键字搜索</h2>
        } else if (loading) {
            return (
                <Spin size='large'></Spin>
            )
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        }
        return (
            <div className="row">
                {/* {
                    users.map((items, index) => {   //下面是不是特别繁琐--->采用第二种方式{}里面只有一个return语句可以省略{}和return   avatars(阿凡达 意思(印度教和佛教中化作人形或兽形的神); (尤指电脑游戏或聊天室中代表使用者的) 化身;)
                        return (
                            <div>
                                <a href="https://github.com/reactjs" target="_blank">
                                    <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">reactjs</p>
                            </div>
                        )
                    })
                } */}

                {
                    users.map((user, index) => (
                        <div className='card' key={index}>
                            <a href={user.url} target="_blank">
                                <img src={user.avatarUrl} style={{ width: '100px' }} />
                            </a>
                            <p className="card-text">{user.name}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}