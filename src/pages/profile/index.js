import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Sidebar from '../../components/body/sidebar'
import Navbar from '../../components/navbar'
import MyProduct from '../product/myProduct'
import AddProduct from '../product/myProduct/addProduct'
import EditProduct from '../product/myProduct/editProduct'
import MyStock from '../product/sellingProduct'
import AddStock from '../product/sellingProduct/addStock'
import EditStock from '../product/sellingProduct/editStock'
import { Provider } from 'react-redux'

import './profil.css'
import ProfileData from './profileData.js'
import store from '../../redux/store'



export class Profile extends Component {



    componentDidMount = () => {
        console.log('didmout')
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.location.key !== this.props.location.key) {
            window.location.reload()
        }
    }

    render() {
        const { match } = this.props
        return (
            <>
                <Navbar />

                <div className="d-flex ">
                    <Sidebar className="" />
                    <div className="right-profile">
                        <div className="container">
                            <Provider store={store}>
                                <BrowserRouter>
                                    <Switch>
                                        <Route path="/profile/myproduct/">
                                            {({ match, history }) => <MyProduct match={match} history={history} />}
                                        </Route>

                                        <Route path="/profile/addProduct">
                                            {({ match, history }) => <AddProduct match={match} history={history} />}
                                            {/* <AddProduct addprodct={this.props} /> */}
                                        </Route>

                                        <Route path="/profile/edit/:id">
                                            {({ match, history }) => <EditProduct match={match} history={history} />}
                                        </Route>
                                        <Route path="/profile/mystock/">
                                            {({ match, history }) => <MyStock match={match} history={history} />}
                                        </Route>

                                        <Route path="/profile/addStock">
                                            {({ match, history }) => <AddStock match={match} history={history} />}
                                            {/* <AddProduct addprodct={this.props} /> */}
                                        </Route>

                                        <Route path="/profile/editStock/:id">
                                            {({ match, history }) => <EditStock match={match} history={history} />}
                                        </Route>
                                        <Route path="/profile">
                                            <ProfileData />
                                        </Route>
                                    </Switch>
                                </BrowserRouter>
                            </Provider>
                            {/* <MyProduct /> */}
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Profile
