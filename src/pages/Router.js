import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'

import Home from './home';
import Detail from './detail'
import MyBag from './myBag';
import CheckOut from './checkOut';
import Profile from './profile';
import Category from './category';
import Login from './auth/login';
import Reset from './auth/reset';
import Confrim from './auth/confirm';
import Register from './auth/register';

import store from '../redux/store'

export default function Router() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/login" exact component={Login}  />
                <Route path="/reset" exact component={Reset}  />
                <Route path="/confirm" exact component={Confrim}  />
                <Route path="/register" exact component={Register}  />
                <Route path="/" exact component={Home}  />
                <Route path="/detail/:id"  component={Detail}/>
                <Route path="/mybag"  component={MyBag}/>
                <Route path="/checkout"  component={CheckOut}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/products"  component={Category}/>
            </BrowserRouter>
        </Provider>
    )
}