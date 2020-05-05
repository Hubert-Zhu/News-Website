import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './style.css'
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login:false,
            visible:false
        }
    }



    render() {
        const { login } = this.state.login;
        return (
            <div className={'login'}>
                {
                    login ?
                        <Button type="primary">Sign out</Button> :
                        <Button type="primary">Sign in</Button>
                }
                <Modal
                    title="Sign in"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                </Modal>
            </div>

        )
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json')
            .then( res => {
               const login = res.data.data.login;
               this.setState({
                   login:login
               })
            })
    }
}

export default Login;