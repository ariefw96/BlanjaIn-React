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
import Forgot from './auth/forgot';
import OTP from './auth/otp'
import Confrim from './auth/reset';
import Register from './auth/register';
import Activate from './auth/activate'
import Search from './search'

import store from '../redux/store'

export default function Router() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/login" exact component={Login}  />
                <Route path="/activate" exact component={Activate}  />
                <Route path="/forgot" exact component={Forgot}  />
                <Route path="/otp" exact component={OTP}  />
                <Route path="/reset" exact component={Confrim}  />
                <Route path="/register" exact component={Register}  />
                <Route path="/" exact component={Home}  />
                <Route path="/detail/:id"  component={Detail}/>
                <Route path="/mybag"  component={MyBag}/>
                <Route path="/checkout"  component={CheckOut}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/products"  component={Category}/>
                <Route path="/search" component={Search} />
            </BrowserRouter>
        </Provider>
    )
}