import React from 'react'
import MovieItem from './MovieItem';
import path from 'path'
import { Spin, Alert, Pagination } from 'antd'
export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isloading: true,
            movies: [],
            nowPage: parseInt(this.props.match.params.page) || 1,
            pageSize: 5,//每一页显示的数据
            total: 0,   //一共有多少条数据
            movieType: this.props.match.params.type
        }

    }

    getMovieListByTypeAndPage = () => {
        //let url = ``
        /**
         * 1、获取正在热映的电影：接口：https://api.douban.com/v2/movie/in_theaters
            访问参数：
            start : 数据的开始项
            count：单页条数
            city：城市
            如：获取 广州热映电影 第一页 10条数据：
            https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10

         */
        // fetch('接口地址')
        //     .then(response => {
        //         return response.json()
        //     }).then(json => {
        //         console.log(json)
        //         this.setState({
        //             isloading: false,
        //             movies: json.subjects,  //给电影列表赋值
        //             total: json.total
        //         })
        //     }).catch((ex) => {
        //         console.log(ex)
        //     })

        const json = require('./' + this.state.movieType + '.json')//模版字符串也可以
        setTimeout(() => {
            console.log(json)
            this.setState({
                isloading: false,
                movies: json.subjects,  //给电影列表赋值
                total: json.total
            })
        }, 1000)

    }
    componentDidMount() {
        // 组件将要被加载的时候去接口  请求数据 请求的数组存在哪里？？  只能是组件的state呀
        this.getMovieListByTypeAndPage()

    }



    // 当我们点击了其他的左侧的Link标签页的时候 路由规则传递的props是不是改变了this.props.match.params.type, this.props.match.params.page 改变了吧 是不是要从新渲染  可以在componentWillReceiveProps（nextProps）生命周期函数中改变数据  nextProps代表新的props

    //组件将要接受新属性  注意回调函数！！ 
    componentWillReceiveProps() {
        this.setState({
            isloading: true,
            nowPage: parseInt(this.props.match.params.page) || 1,
            movieType: this.props.match.params.type
        }, () => { this.getMovieListByTypeAndPage() })
    }

    render() {
        console.log(this.props.match.params.type, this.props.match.params.page);

        return (
            <div>
                {this.renderList()}
                {/* 在这里面怎么获取路由匹配规则中的type page呢 --> this.props.match.params.type*/}
                <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChange} />
            </div>
        )
    }

    //如果一个组件的渲染需要后台的数据，想要添加正在加载<Spin>组件，需要自己定义一个renderList()函数 在render里面调用   我们数据加载也采用抽离函数的方式
    renderList = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert
                    message="数据加载中"
                    description="精彩内容马上呈现"
                    type="info"
                />
            </Spin>
        } else {
            return (
                this.state.movies.map((item) => {
                    return <MovieItem key={item.id} {...item} history={this.props.history}></MovieItem>    //属性扩散 一个movie里面的所有属性都传递下去
                })
            )
        }
    }

    pageChange = (page) => {
        this.props.history.push('/movie/' + this.state.movieType + '/' + page)
    }
}