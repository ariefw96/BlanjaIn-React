/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BigStar, Star } from '../../../assets'
import Rating from '../../moleculs/rating'
import './detailProduct.css'


class DetailProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            size : 0,
            qty : 0,
        }
    }

        
    
    render() {
        const {product_name, product_img, product_desc, total_rating, product_price, product_qty, store_name,product_condition, index} = this.props
        // console.log(product_qty)
        return (
            <>
            <Row className="d-flex" key={index}>
                <div>
                    <div className="img">
                        <img  className="img-fit"  width="378px"  src={'http://localhost:8000' + product_img.split(',')[0]}/>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <div className="dtl-img">
                            <img className="img-dtl" src={'http://localhost:8000' + product_img.split(',')[0]} />
                        </div>
                        <div className="dtl-img">
                            <img className="img-dtl" src={'http://localhost:8000' + product_img.split(',')[1]} /> 
                        </div>
                        <div className="dtl-img">
                            <img className="img-dtl" src={'http://localhost:8000' + product_img.split(',')[2]} />
                        </div>
                        <div className="dtl-img">
                            <img className="img-dtl" src={'http://localhost:8000' + product_img.split(',')[3]} /> 
                        </div>
                        <div className="dtl-img">
                            <img className="img-dtl" src={'http://localhost:8000' + product_img.split(',')[4]} />
                        </div>
                    </div>
                </div>
                <div className="dtl-prdct">
                    <p className="txt-name">{product_name}</p>
                    <p className="txt-brand text-muted">{store_name}</p>
                    <Rating total_rating={Math.round(total_rating)} />
                    <p className="txt-brand text-muted mt-2">Price</p>
                    <h2>Rp. {product_price}</h2>
                    <p className="mt-4" style={{fontSize:"16px", fontWeight:"bold"}} >Color</p>
                    <Row className="justify-content-around ml-1" style={{width:'200px'}}>
                        <Link>
                            <div className="clr-dtl" style={{backgroundColor:'#1A1A1A'}}></div>
                        </Link>
                        <Link>
                            <div className="clr-dtl" style={{backgroundColor:'#D84242'}}></div>
                        </Link>
                        <Link>
                            <div className="clr-dtl"style={{backgroundColor:'#4290D8'}}></div>
                        </Link>
                        <Link>
                            <div className="clr-dtl" style={{backgroundColor:'#42D86C'}}></div>
                        </Link>
                    </Row>
                    <div className="d-flex mt-4 justify-content-around" style={{height:'80px', width:'380px'}}>
                        <div style={{width:'150px'}}>
                            <p style={{fontSize:"16px", fontWeight:'bold'}}>Size</p>
                            <div className="d-flex justify-content-between" style={{height:'36px', width:'150px'}}>
                                <Link className="text-decoration-none" onClick={ () => {
                                    if(this.state.size !== 0) {
                                        this.setState({ size: this.state.size - 1 })}
                                    }
                                }>
                                    <div className="btn-c" style={{backgroundColor:'#D4D4D4'}}>-</div>
                                </Link>
                                    <p>{this.state.size}</p>
                                <Link className="text-decoration-none" onClick={() => this.setState({ size: this.state.size + 1 })}>
                                    <div className="btn-c" style={{backgroundColor:'#FFFFFF', border:"solid 1px"}}>+</div>
                                </Link>
                            </div>
                        </div>
                        <div style={{width:'150px', marginLeft:'80px'}}>
                            <p style={{fontSize:"16px", fontWeight:'bold'}}>Jumlah</p>
                            <div className="d-flex justify-content-between" style={{height:'36px', width:'150px'}}>
                                <Link className="text-decoration-none"  onClick={ () => {
                                    if(this.state.qty !== 0) {
                                        this.setState({ qty: this.state.size - 1 })}
                                    }
                                }>
                                    <div className="btn-c" style={{backgroundColor:'#D4D4D4'}}>-</div>
                                </Link>
                                    <p>{this.state.qty}</p>
                                <Link className="text-decoration-none" onClick={ () => {
                                    if(this.state.qty !== {product_qty}) {
                                        this.setState({ qty: this.state.qty + 1 })}
                                    }
                                }>
                                    <div className="btn-c" style={{backgroundColor:'#FFFFFF', border:"solid 1px"}}>+</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                   <Row className="justify-content-between mt-3">
                        <Link  className="chat text-decoration-none d-flex">Chat</Link>
                        <Link  className="add-bag text-decoration-none d-flex">Add bag</Link>
                        <Link  className="buy-now text-decoration-none d-flex ">Buy Now</Link>
                   </Row>
                </div>
            </Row>
            <div>
                <h2 className="information">Informasi Product</h2>
                <p className="condition">Condition</p>
                <p className="v-condition">{product_condition}</p>
                <p className="condition">Description</p>
                <p className="v-description">{product_desc}</p>
            </div>
            <div>
                <p className="prdct-revw">Peoduct review</p>
                <div className="ratee">
                    <div className="ratee-number">
                        <p className="txt-rating">5<p className="per text-muted">/5</p> </p>
                        <div className="d-flex d-flex justify-content-center">
                            <img src={BigStar} />
                            <img src={BigStar} />
                            <img src={BigStar} />
                            <img src={BigStar} />
                            <img src={BigStar} />
                        </div>
                    </div>
                    <div className="dtl-rate justify-content-between">
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>5</p>
                            <div className="indicator-active"></div>
                            <p>1</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>4</p>
                            <div className="indicator-non"></div>
                            <p>0</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>3</p>
                            <div className="indicator-non"></div>
                            <p>0</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>2</p>
                            <div className="indicator-non"></div>
                            <p>0</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{height:'16px'}}>
                            <img src={Star} />
                            <p>1</p>
                            <div className="indicator-non"></div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default DetailProduct
