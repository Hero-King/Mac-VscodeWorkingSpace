import React from 'react'

import { List, message, Avatar, Spin, Table } from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

const columns = [
    {
        title: '分类',
        dataIndex: 'group',
    },
    {
        title: 'Name',
        dataIndex: 'name',

    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
    },
    {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
]

const dataSource = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
        group: '1'
    },
    {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
        group: '1'
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
        group: '2'
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
        group: '2'
    },
    {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
        group: '3'
    },
]

class InfiniteListExample extends React.Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
    };

    componentDidMount() {
        this.fetchData(res => {
            this.setState({
                data: res.results,
            });
        });
    }

    fetchData = callback => {
        setTimeout(() => {
            let res = {}
            res.results = dataSource
            callback(res);
        }, 2000);
        // reqwest({
        //     url: fakeDataUrl,
        //     type: 'json',
        //     method: 'get',
        //     contentType: 'application/json',
        //     success: res => {
        //         callback(res);
        //     },
        // });
    };


    handleInfiniteOnLoad = (page) => {
        console.log(page);
        let { data } = this.state;
        this.setState({
            loading: true,
        });
        if (data.length > 144) {
            message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.fetchData(res => {
            data = data.concat(res.results);
            this.setState({
                data,
                loading: false,
            });
        });
    };

    render() {
        let listComponent = <List
            dataSource={this.state.data}
            renderItem={item => (
                <List.Item key={item.id}>
                    <List.Item.Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{item.name.last}</a>}
                        description={item.email}
                    />
                    <div>Content</div>
                </List.Item>
            )}
        >
            {this.state.loading && this.state.hasMore && (
                <div className="demo-loading-container">
                    <Spin />
                </div>
            )}
        </List>
        return (
            <div className="demo-infinite-container">
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                // loader={<div className="loader" key={0}>Loading ...</div>}  //无效果
                >
                    {/* {listComponent} */}
                    <Table columns={columns}
                        dataSource={this.state.data}
                        pagination={false}
                        // summary={(data) => <Spin size="large" spinning={this.state.loading}></Spin>}
                        footer={(currentPageData) => (<Spin size="large" spinning={this.state.loading}></Spin>)}
                    >

                    </Table>
                </InfiniteScroll>
            </div >
        );
    }
}

export default InfiniteListExample