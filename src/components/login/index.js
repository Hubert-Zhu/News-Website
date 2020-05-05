import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button , Input, message } from 'antd';
import './style.css'
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changePassword =this.changePassword.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.loginOut = this.loginOut.bind(this);
        this.state = {
            login:false,
            visible:false,
            user:'',
            password:''
        }
    }

    showModal(){
        this.setState({
            visible:true
        })
    }

    handleCancel(){
        this.setState({
            visible:false
        })
    }

    handleOk() {
        const {user, password} = this.state;
        const url = `http://www.dell-lee.com/react/api/Login.json?user=${user}&password=${password}`;
        axios.get(url, {
            withCredential : true
        })
            .then(res => {
                const login = res.data.data.login;
                 if(login){
                     message.success('Success');
                     this.setState({
                         login:true,
                         visible:false
                     })
                     console.log("NEW" + res.data.data.login)
                 }else{
                     message.error('The password or username is wrong');
                 }
            });

            axios.get(url, {withCredential: true})
                .then(res => {
                    console.log("NEW2" + res.data.data.login);
                });

    }

    loginOut(){
        axios.get('http://www.dell-lee.com/react/api/logout.json',{ withCredentials: true})
            .then( res => {
                const logout = res.data.data.logout;
                this.setState({
                    login: !logout
                })
            })
    }

    changeUser(e){
        this.setState({
            user:e.target.value
        })
    }

    changePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    render() {
        const  login  = this.state.login;
        return (
            <div className={'login'}>

                {
                    login ?
                        <Button
                            type="primary"
                            onClick={this.loginOut}
                        >Login out</Button> :
                        <Button
                            type="primary"
                            onClick={this.showModal}
                        >
                            Login in
                        </Button>
                }
                <Link to={'/vip'}><Button type={"primary"} style={{margin:'10px'}}>VIP</Button></Link>
                <Modal
                    title="Sign in"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <form>
                    UserName:
                    <Input
                        placeholder="Please enter UserName"
                        style= {{marginBottom:'10px'}}
                        value = {this.state.user}
                        onChange={this.changeUser}
                    />
                    Password:
                    <Input
                        placeholder="Please enter Password"
                        type={'password'}
                        value={this.state.password}
                        onChange={this.changePassword}
                    />
                    </form>
                </Modal>

            </div>
        )
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/login.json',{ withCredentials: true})
            .then( res => {
               const login = res.data.data.login;
               console.log('login' + login);
               this.setState({
                   login:login
               })
            })
    }
}

export default Login;