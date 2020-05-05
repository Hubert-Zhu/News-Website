import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { message } from 'antd'
import './style.css'
import axios from "axios";

class Vip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true,
            fetchFinish: false
        }
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/Login.json',{ withCredentials: true})
            .then( res => {
                const login = res.data.data.login;
                console.log("Vip:  "+login);
                this.setState({
                    // login:login,
                    fetchFinish: true
                })
            })
    }

    Warning(){
        message.error('To check Vip content, please login in');
    }

    render(){
        if(this.state.login){
            if(this.state.fetchFinish){
                return <div className={'vip'}>Vip</div>
            }else{
                return <div className={'vip'}>Updating....</div>
            }
        }else{
            this.Warning();//??????? This should not be here, but I cannot find a better choice
            return <Redirect to={'/'}></Redirect>
        }

    }


}

export default Vip;