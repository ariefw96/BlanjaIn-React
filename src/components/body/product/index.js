import React, { Component } from 'react'
import './new.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Rating from '../../moleculs/rating';


const url = process.env.REACT_APP_API_BASE_URL + 'products';


class Product extends Component {
    state = {
        products: [],
        pageInfo: []
    };

    getAllProducts = () => {
        axios.get(url)
            .then(({ data }) => {
                console.log(data.data)
                this.setState({
                    products: data.data.products,
                    pageInfo: data.data.pageInfo
                })
            }).catch((error) => {
                console.log(error)
            })
    }
    nextPage = () => {
        window.location.href=process.env.REACT_APP_BASE_URL+this.state.pageInfo.nextpage
    }

    componentDidMount = () => {
        this.getAllProducts();
    }
    render() {
        const { products, pageInfo } = this.state;
        console.log(pageInfo.currentPage, pageInfo.nextpage, pageInfo.previousPage)
        // const { currentPage, nextpage, previousPage} = pageInfo
        const { match, location, history } = this.props
        return (
            <div className="container cntainer">
                <h1>{this.props.title}</h1>
                <small className="text-muted">{this.props.caption}</small>
                <div className="row d-flex justify-content-start">
                    {products && products.map(
                        ({ product_name, product_img, product_price, store_name, total_rating, id }) => {
                            return (
                                <Link className="card-btn" to={{ pathname: "/detail/" + id }} >
                                    <div className="card col-lg-2 col-md-3 col-sm-6 mr-3 ml-3 col-12 shadow bg-white " id="cards" key={id}>
                                        <div id="header">
                                            <img src={'http://localhost:8000' + product_img.split(',')[0]} className="card-img-top" id="card-img" alt="" />
                                        </div>
                                        <div className="card-body pl-2 pr-2 card-bdy">
                                            <p className="card-text merk" >{product_name}</p>
                                            <p className="card-text price">Rp. {product_price} </p>
                                            <p className="card-text brand text-muted">{store_name}</p>
                                            <Rating total_rating={Math.round(total_rating)} />
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    )}
                </div>
                <div className="row mt-5">
                    <button>Prev</button>
                    <button>{pageInfo.currentPage}</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>
            </div>
        )
    }
}


export default Product