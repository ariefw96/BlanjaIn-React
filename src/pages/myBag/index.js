import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { connect } from 'react-redux'
import axios from 'axios'
import './myBag.css'

const base_url = process.env.REACT_APP_API_BASE_URL


class MyBag extends Component {
    constructor(props) {
        super(props)
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': 'x ' + this.props.auth.token
            }
        }
    }

    toPrice = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    render() {
        const { history, bag } = this.props
        console.log(bag.mybag)
        return (
            <div>
                <Navbar history={history} />
                <div className="container">
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
                            {/* Card Bag */}
                            {
                                bag.mybag.map(({ product_name, product_img, price, size, color, qty }) => {
                                    return (
                                        <div className='col prodct justify-content-between'>
                                            <div className="selectAll w-50">
                                                <div className="mt-5">
                                                    <input type="checkbox" className="cek" />
                                                </div>
                                                <div className="img-chart mt-3">
                                                    <img style={{ height: '70px' }} src={base_url + product_img} />
                                                </div>
                                                <div className="ml-3 mt-3"> 
                                                    <p className="name-prodct">{product_name}</p>
                                                    <p className="brand-product text-muted">{size} - {color}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between ml-5" style={{ height: '36px', width: '100px' }}>
                                                <div className="btn-c" style={{ backgroundColor: '#D4D4D4' }}>-</div>
                                                <p className="mt-2">{qty}</p>
                                                <div className="btn-c" style={{ backgroundColor: '#FFFFFF', border: "solid 1px" }}>+</div>
                                            </div>
                                            <p className="prc">Rp. {this.toPrice(price * qty)}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="right">
                            <div className='shop-sumry'>
                                <p className="smry-title">Shopping summary</p>
                                <div className="ttl-price">
                                    <p className="text-price text-muted">Total price</p>
                                    <p className="pay">Rp. {this.toPrice(bag.totalAmmount)}</p>
                                </div>
                                <Link className="text-decoration-none" to="#">
                                    <Link to="/checkout" className="btn-buy">
                                        <p className="text-buy">Buy</p>
                                    </Link>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ auth, bag }) => {
    return {
        auth,
        bag
    };
};

export default connect(mapStateToProps)(MyBag);