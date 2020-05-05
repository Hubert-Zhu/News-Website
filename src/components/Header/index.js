import React,{ Component } from "react";
import { Link } from 'react-router-dom';
import Logo from './image/news.png'
import { Menu } from 'antd';
import './style.css'

class AppHeader extends Component{

    constructor(props) {
        super(props);

        this.state = {
            current: 'Recommend',
            list:[
                {
                    id:1,
                    title:"Home"
                },
                {
                    id:2,
                    title:"Recommend"
                },
                {
                    id:3,
                    title:"Breaking News"
                },
                {
                    id:4,
                    title:"Life"
                },
                {
                    id:5,
                    title:"Sports"
                },
                {
                    id:6,
                    title:"Jobs"
                },
                {
                    id:7,
                    title:"More"
                }
            ]
        }
    }

    getMenuItems(){
        return this.state.list.map(item => {
            return (
                <Menu.Item key={item.id} className={'MenuItem'} >
                    <Link to={`/${item.id}`}>
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render(){
        return (
            <>
                <Link to={'/'}>
                    <img className={'AppHeaderLogo'} src={Logo} alt={'logo'}/>
                </Link>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                   className={'Menu'}
                >
                    { this.getMenuItems() }
                </Menu>
            </>
        )
    }
}

export default AppHeader










