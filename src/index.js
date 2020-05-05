import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AppHeader from "./components/Header/index.js";
import Login from './components/login/index';
import List from "./containers/List/index";
import Detail from './containers/Detail/index';
import Vip from './containers/VIP/index'
import 'antd/dist/antd.css';
import './style.css';

const { Header, Footer, Content } = Layout;

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Layout className={'layout'}>
            <Header className={'header'}>
                <AppHeader></AppHeader>
            </Header>
            <Content className={'content'}>
                    <Login></Login>
                    <Switch>
                        <Route path={'/vip'} component={Vip}></Route>
                        <Route path={'/detail/:id'} component={Detail}></Route>
                        <Route path={'/:id?'} component={List}></Route>
                    </Switch>
            </Content>
            <Footer className={'footer'}>&copy; copyright Hubert-Zhu</Footer>
        </Layout>
    </div>
    </BrowserRouter>
    ,
  document.getElementById('root')
);

