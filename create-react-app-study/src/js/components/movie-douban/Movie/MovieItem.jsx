import React from 'react'

export default class MovieItem extends React.Component {

    render() {
        return (
            <div>
                <h4>电影名称：{this.props.title}</h4>
                <h4>电影年份：{this.props.year}</h4>
            </div>
        )
    }
}