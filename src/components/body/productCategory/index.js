import React, { Component } from 'react'
import { Jazz } from '../../../assets'
import '../product/new.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Rating from '../../moleculs/rating';


const getUrl = process.env.REACT_APP_API_BASE_URL + 'products'


class ProductCategory extends Component {
    state = {
        products: [],
        pageInfo: []
    };

    getAllProducts = () => {
        const ctgQuery = this.props.ctg
        axios.get(getUrl + ctgQuery)
            .then(({ data }) => {
                console.log(data.data.products)
                this.setState({
                    products: data.data.products,
                    pageInfo: data.data.pageInfo
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    prevPage = () => {
            window.location.href=process.env.REACT_APP_BASE_URL+this.state.pageInfo.previousPage
    }
    nextPage = () => {
        window.location.href=process.env.REACT_APP_BASE_URL+this.state.pageInfo.nextpage
    }

    componentDidMount = () => {
        this.getAllProducts();
    }

    render() {
        const category = this.props
        const { products } = this.state;
        let prevBtn, nextBtn;
        if(this.state.pageInfo.previousPage != null){
           prevBtn =  <button onClick={this.prevPage}>Prev</button>
        }else{
           prevBtn = <button disabled>Prev</button>
        }

        if(this.state.pageInfo.nextpage != null){
            nextBtn =  <button onClick={this.nextPage}>Next</button>
         }else{
            nextBtn = <button disabled>Next</button>
         }
        return (
            <div className="container cntainer">
                <h1>{this.props.title}</h1>
                <small className="text-muted">This is For You</small>
                <div className="row d-flex justify-content-start">
                    {products && products.map(
                        ({ product_name, product_img, product_price, total_rating, product_id }) => {
                            return (

                                <div className="card col-lg-2 col-md-3 col-sm-6 mr-3 ml-3 col-12 shadow bg-white " id="cards" key={product_id}>
                                    <div id="header">
                                        <img src={process.env.REACT_APP_API_BASE_URL + product_img.split(',')[0]} className="card-img-top" id="card-img" alt="" />
                                    </div>
                                    <Link className="card-btn" to={"/detail/" + product_id} >
                                        <div className="card-body pl-2 pr-2 card-bdy">
                                            <p className="card-text merk" >{product_name}</p>
                                            <p className="card-text price">Rp. {product_price} </p>
                                            <p className="card-text brand text-muted">MiHoYo</p>
                                            <Rating total_rating={total_rating} />
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    )}
                </div>
                <div className="row mt-5">
                    {prevBtn}
                    <button>{this.state.pageInfo.currentPage}</button>
                    {nextBtn}
                </div>
            </div>
        )
    }
}


export default ProductCategory