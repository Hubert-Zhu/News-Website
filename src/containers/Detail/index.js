import React, { Component } from 'react';
import axios from 'axios';
import "./style.css"
import { Card } from 'antd';


class Detail extends Component{
    constructor(props) {
        super(props);

        this.state={
            title:'titel',
            content:'content'
        }
    }

    render() {
        return (
            <Card title = {this.state.title} >
                <div className={'detailContent'} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            </Card>
        )
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/detail.json/?id=' + id)
            .then(res => {
                this.setState({
                    title: res.data.data.title,
                    content: res.data.data.content
                })
            })
    }
}

export default Detail