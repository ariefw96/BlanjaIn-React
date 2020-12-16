import React, { Component } from 'react'
import { Jazz, Star } from '../../../assets'
import '../new/new.css'


class Popular extends Component {
    render() {
        return (
            <div className="container cntainer mb-5">
                <h1>Popular</h1>
                <small className="text-muted">You’ve never seen it before!</small>
                <div className="row d-flex justify-content-start">
                    <div className="card col-lg-2,4 col-md-3 col-sm-6 mr-3 ml-3 col-12 shadow bg-white" id="cards">
                        <div id="header">
                            <img src={Jazz} className="card-img-top" id="card-img" alt="" />
                        </div>
                        <div className="card-body pl-2 pr-2 card-bdy">
                            <p className="card-text merk" >Men's formal suit - Black & White</p>
                            <p className="card-text price">$ 40.0</p>
                            <p className="card-text brand text-muted">Zalora Cloth</p>
                            <div className="d-flex">
                                <div className="rate">
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                </div>
                                <p className="text-muted rate-num">(10)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Popular