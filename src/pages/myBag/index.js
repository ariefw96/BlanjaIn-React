import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jazz } from '../../assets'
import Navbar from '../../components/navbar'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './myBag.css'
const qs = require('querystring')

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': 'x ' + localStorage.getItem('token')
    }
}

let prodName = ''
const myBag = JSON.parse(localStorage.getItem('cart'))
class MyBag extends Component {
    constructor() {
        super();
        this.state = {
            qty: 0
        }
        
    }

    buyNow = () => {
        const myBag = JSON.parse(localStorage.getItem('cart'))
        const itemsToBuy = {
            user_id: localStorage.getItem('user_id'),
            product_name:myBag.items,
            product_color:myBag.color,
            product_size:myBag.size,
            product_qty:myBag.qty
        }
        axios.post('http://127.0.0.1:8000/transaction',qs.stringify(itemsToBuy),config)
        .then(({data}) => {
            alert(data.msg)
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount = () => {
        
        console.log(myBag)
        axios.get('http://127.0.0.1:8000/products/prodById/' + myBag.items)
            .then(({ data }) => {
                this.setState({
                    product: data[0].product_name,
                    product_img: data[0].product_img,
                    product_price: data[0].product_price
                })
                prodName= this.state.product_img
            }).catch((error) => {
                console.log(error)
            })

        axios.get('http://127.0.0.1:8000/products/colorById/' + myBag.color)
            .then(({ data }) => {
                this.setState({
                    color: data[0].color_name
                })
            }).catch((error) => {
                console.log(error)
            })

        axios.get('http://127.0.0.1:8000/products/sizeById/' + myBag.size)
            .then(({ data }) => {
                this.setState({
                    size: data[0].size_name
                })
            }).catch((error) => {
                console.log(error)
            })

        this.setState({
            qty: myBag.qty
        })
    }

    render() {
        console.log(this.state)
        console.log(prodName.split(",")[0])
        return (
            <div>
                <Navbar />
                <div className="container">
                    {!localStorage.getItem('user_id') && <Redirect to="/login" />}
                    <h1 style={{ fontSize: '34px', fontWeight: '700' }}>My Bag</h1>
                    <div className="d-flex ">
                        <div className="left">
                            <div className='col chart justify-content-between'>
                                <div className="selectAll">
                                    <div className="mt-3">
                                        <input type="checkbox" className="cek" />
                                    </div>
                                    <p className="ml-3 selectitem">Select all items (2 items selected)</p>
                                </div>
                                <Link>
                                    <p style={{ color: '#DB3022', marginTop: '10px' }}>Delete</p>
                                </Link>
                            </div>
                            <div className='col prodct justify-content-between'>
                                <div className="selectAll">
                                    <div className="mt-3">
                                        <input type="checkbox" className="cek" />
                                    </div>
                                    <div className="img-chart">
                                        <img style={{ height: '70px' }} src={'http://127.0.0.1:8000' + prodName.split(",")[0]} />
                                    </div>
                                    <div className="ml-3">
                                        
                                        <p className="name-prodct">{this.state.product}</p>
                                        <p className="brand-product text-muted">Color: {this.state.color}</p>
                                    </div>
                                    <div className="d-flex justify-content-between ml-5 mt-3" style={{ height: '36px', width: '150px' }}>
                                        <Link className="text-decoration-none" 
                                        onClick={() => {
                                            if (this.state.qty !== 1) {
                                                this.setState({ qty: this.state.qty - 1 })
                                            }
                                        }}
                                        >
                                            <div className="btn-c" style={{ backgroundColor: '#D4D4D4' }}>-</div>
                                        </Link>
                                        <p>{this.state.qty}</p>
                                        <Link className="text-decoration-none" onClick={() => this.setState({ qty: this.state.qty + 1 })}>
                                            <div className="btn-c" style={{ backgroundColor: '#FFFFFF', border: "solid 1px" }}>+</div>
                                        </Link>
                                    </div>
                                </div>
                                <p className="prc">Rp.{this.state.product_price}</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className='shop-sumry'>
                                <p className="smry-title">Shopping summary</p>
                                <div className="ttl-price">
                                    <p className="text-price text-muted">Total price</p>
                                    <p className="pay">Rp.{this.state.product_price*this.state.qty}</p>
                                </div>
                                <Link className="text-decoration-none" to="#">
                                    <div className="btn-buy">
                                        <p className="text-buy" onClick={this.buyNow}>Buy</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MyBag