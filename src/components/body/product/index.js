import React, { Component } from 'react'
import './new.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Rating from '../../moleculs/rating';


const base_url = process.env.REACT_APP_API_BASE_URL


class Product extends Component {
    state = {
        products: [],
        pageInfo: []
    };

    getAllProducts = () => {
        axios.get(base_url + '/products' + this.props.url)
            .then(({ data }) => {
                console.log(data.data)
                this.setState({
                    products: data.data.products,
                    pageInfo: data.data.pageInfo
                })
            }).catch((error) => {
                this.setState({
                    products: [],
                    pageInfo: []
                })
                console.log(error)
            })
    }

    componentDidMount = () => {
        this.getAllProducts();
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.url !== prevProps.url) {
            this.getAllProducts(this.props.url)
        }
    }

    render() {
        const { products, pageInfo } = this.state;
        console.log(this.props)
        const { match, location, history } = this.props
        return (
            <div className="container">
                <h1>{this.props.title}</h1>
                <small className="text-muted">{this.props.caption}</small>
                <div className="row d-flex justify-content-between">
                    {products && products.map(
                        ({ product_name, product_img, product_price, store_name, color_name, size_name, category_name, rating, dibeli, id }) => {
                            return (
                                <Link className="card-btn mt-4" to={{ pathname: "/detail/" + id }} >
                                    <div className="card col-lg-2 col-md-3 col-sm-6 mr-3 ml-0 col-12 shadow bg-white" id="cards" key={id}>
                                        <div id="header">
                                            <img src={'http://localhost:8000' + product_img.split(',')[0]} className="card-img-top" id="card-img" alt="" />
                                        </div>
                                        <div className="card-body pl-2 pr-2 card-bdy">
                                            <p className="card-text merk" >{product_name}</p>
                                            <p className="card-text price">Rp. {product_price} </p>
                                            <p className="card-text brand text-muted">{category_name}</p>
                                            <p className="card-text brand text-muted">{`${size_name} - ${color_name} `}</p>
                                            <p style={{ fontSize: "12px", color: "blue" }}>Rating ({rating.toString().substr(0, 3)}) | Dibeli {dibeli}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    )}
                </div>
                <div className="row mt-5">
                </div>
            </div>
        )
    }
}


export default Product