import React from "react"
import {Table} from 'antd'
import _ from "underscore" 

export default class NewTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
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
            ],

        }
    }

    renderContent = (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if (index === 4) {
            obj.props.colSpan = 0;
        }
        return obj;
    };

    columns = [
        {
            title: '分类',
            dataIndex: 'group',
            onCell: (record,rowIndex) => {
                return {
                    width: 100,
                    style: {border: "2px solid red"},
                  onClick: event => {console.log(record,rowIndex);}, // 点击行
                  onDoubleClick: event => {},
                  onContextMenu: event => {},
                  onMouseEnter: event => {}, // 鼠标移入行
                  onMouseLeave: event => {},
                };
              },
            
            render: (text,row,index) =>{
                console.log(text,row,index);
                const {data} = this.state;
                let rowSpan = 1;

                let sameGroupList = _.filter(data,rowdata =>{ return rowdata.group === text});
                if(sameGroupList.indexOf(row) == 0){
                    rowSpan = sameGroupList.length;
                }else{
                    rowSpan = 0;
                }
                // if(index >0){
                //     // 判断当前值和上一个值是否相同，相同：合并的单元格+1
                //     if( text === data[index -1].group){
                //        rowSpan++; 
                //     }
                // }
                return {
                    children: <a>{text}</a>,
                    props: {
                        rowSpan: rowSpan,
                    },
                };                
            }
            
        },
        {
            title: 'Name',
            dataIndex: 'name',
        
        },
        {
            title: 'Age',
            dataIndex: 'age',
            render: this.renderContent ,
        },
        {
            title: 'Home phone',
            colSpan: 2,
            dataIndex: 'tel',
            render: (value, row, index) => {
                const obj = {
                    children: value,
                    props: {},
                };
                if (index === 2) {
                    obj.props.rowSpan = 2;
                }
                // These two are merged into above cell
                if (index === 3) {
                    obj.props.rowSpan = 0;
                }
                if (index === 4) {
                    obj.props.colSpan = 0;
                }
                return obj;
            },
        },
        {
            title: 'Phone',
            colSpan: 0,
            dataIndex: 'phone',
            render: this.renderContent,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            render: this.renderContent,
        },
    ]

   

    render(){
        return <Table columns={this.columns} 
        dataSource={this.state.data} size={"small"}  
        title={(currentPage) => "title"}
        onRow={(record,index)=>{return{
            height: 50,
            style: {border: "2px solid blue"},
            onClick:()=>{
            console.log("onrowClick");
          }}}}
        onHeaderRow={(column, index) => {
            
            return {
                onClick: (e) => {console.log(column, index,1111);}
            }
        }}
        />
    }
}




