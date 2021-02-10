import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jazz } from '../../assets'
import Navbar from '../../components/navbar'
import { connect } from 'react-redux'
import '../myBag/myBag.css'
import './checkout.css'

const base_url = process.env.REACT_APP_API_BASE_URL

class CheckOut extends Component {
    constructor() {
        super();
        this.state = {
            qty: 1
        }
    }

    toPrice = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    render() {
        const { history, bag } = this.props
        return (
            <div>
                <Navbar history={history} />
                <div className="container">
                    <h1 style={{ fontSize: '34px', fontWeight: '700' }}>CheckOut</h1>
                    <p className="mt-3 ttl-addrs">Shipping Address</p>
                    <div className="d-flex ">
                        <div className="left">
                            <div className='col address'>
                                <p >Andreas Jane</p>
                                <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                <Link className="text-decoration-none">
                                    <div className='btn-choose-address'>
                                        <p className='addres-btn'>Choose another address</p>
                                    </div>
                                </Link>
                            </div>
                            {
                                bag.mybag.map(({ product_name, product_img, price, size, color, qty }) => {
                                    return (
                                        <div className='col prodct justify-content-between'>
                                            <div className="selectAll">
                                                <div className="img-chart">
                                                    <img style={{ height: '100px' }} src={base_url + product_img} />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="name-prodct">{product_name}</p>
                                                    <p className="brand-product text-muted">{size} - {color}</p>
                                                    <p className="name-prodct">Jumlah : {qty}</p>
                                                </div>
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
                        <p className="pay">Rp.{this.toPrice(bag.totalAmmount)}</p>
                                </div>
                                <Link className="text-decoration-none">
                                    <div className="btn-buy">
                                        <p className="text-buy">Select payment</p>
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



const mapStateToProps = ({ auth, bag }) => {
    return {
        auth,
        bag
    };
};

export default connect(mapStateToProps)(CheckOut);