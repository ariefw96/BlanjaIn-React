import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jazz } from '../../assets'
import Navbar from '../../components/navbar'
import './myBag.css'

class MyBag extends Component {
    constructor(){
        super();
        this.state={
            qty: 1
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1 style={{fontSize: '34px', fontWeight:'700'}}>My Bag</h1>
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
                                    <p style={{color: '#DB3022', marginTop:'10px'}}>Delete</p>
                                </Link>
                            </div>
                            <div className='col prodct justify-content-between'>
                                <div className="selectAll">
                                    <div className="mt-3">
                                        <input type="checkbox" className="cek" />
                                    </div>
                                    <div className="img-chart">
                                        <img style={{height: '70px'}} src={Jazz} />
                                    </div>
                                    <div className="ml-3">
                                        <p className="name-prodct">Men's formal suit - Black</p>
                                        <p className="brand-product text-muted">Zalora Cloth</p>
                                    </div>
                                    <div className="d-flex justify-content-between ml-5 mt-3" style={{height:'36px', width:'150px'}}>
                                        <Link className="text-decoration-none" onClick={() => this.setState({ qty: this.state.qty - 1 })}>
                                            <div className="btn-c" style={{backgroundColor:'#D4D4D4'}}>-</div>
                                        </Link>
                                            <p>{this.state.qty}</p>
                                        <Link className="text-decoration-none" onClick={() => this.setState({ qty: this.state.qty + 1 })}>
                                            <div className="btn-c" style={{backgroundColor:'#FFFFFF', border:"solid 1px"}}>+</div>
                                        </Link>
                                    </div>
                                </div>
                                <p className="prc">Rp.200000</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className='shop-sumry'>
                                <p className="smry-title">Shopping summary</p>
                                <div className="ttl-price">
                                    <p className="text-price text-muted">Total price</p>
                                    <p className="pay">Rp.200.000</p>
                                </div>
                                <Link className="text-decoration-none" to="/checkout">
                                <div className="btn-buy">
                                    <p className="text-buy">Buy</p>
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