import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { BigStar, Star } from '../../../assets'

export default class cardHome extends Component {
    render() {
        const {product_name, product_img, product_price, category, color_name, size_name, rating, dibeli, id} = this.props
        return (
            <Link className="card-btn" to={{ pathname: "/detail/" + id }} >
                <div className="card col-lg-2 col-md-3 col-sm-6 mr-3 ml-0 col-12 shadow bg-white" id="cards" key={id}>
                    <div id="header">
                        <img src={'http://localhost:8000' + product_img.split(',')[0]} className="card-img-top" id="card-img" alt="" />
                    </div>
                    <div className="card-body pl-2 pr-2 card-bdy">
                        <p className="card-text merk" >{product_name}</p>
                        <p className="card-text price">Rp. {product_price} </p>
                        <p className="card-text brand text-muted">{category}</p>
                        <p className="card-text brand text-muted">{`${size_name} - ${color_name} `}</p>
                        <p style={{ fontSize: "12px", color: "blue" }}><img src={Star} style={{marginTop:'-3px'}}/>   {rating.toString().substr(0, 3)} | Dibeli {dibeli}</p>
                    </div>
                </div>
            </Link>
        );
    }
}
