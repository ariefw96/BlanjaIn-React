import React, { Component } from 'react'
import '../product/new.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


const base_url = process.env.REACT_APP_API_BASE_URL


class ProductCategory extends Component {
    state = {
        products: [],
        pageInfo: []
    };

    getAllProducts = () => {
        const ctgQuery = this.props.ctg
        axios.get(base_url + '/products' + ctgQuery)
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

    componentDidMount = () => {
        this.getAllProducts();
    }

    toPrice = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    render() {
        console.log(this.props)
        const { products } = this.state;
        let prevBtn, nextBtn;
        if (this.state.pageInfo.previousPage != null) {
            prevBtn = <button onClick={this.prevPage}>Prev</button>
        } else {
            prevBtn = <button disabled>Prev</button>
        }

        if (this.state.pageInfo.nextpage != null) {
            nextBtn = <button onClick={this.nextPage}>Next</button>
        } else {
            nextBtn = <button disabled>Next</button>
        }
        return (
            <div className="container cntainer">
                <h1>Category {this.props.category_name}</h1>
                <small className="text-muted">This is For You ngentod</small>
                <div className="row d-flex justify-content-start ml-1">
                    {products.length > 0 ? (
                        <>
                            {
                                products && products.map(
                                    ({ product_name, product_img, product_price, category_name, color_name, size_name, rating, dibeli, id }) => {
                                        return (

                                            <Link className="card-btn" to={{ pathname: "/detail/" + id }} >
                                                <div className="card col-lg-2 col-md-3 col-sm-6 mr-3 ml-0 col-12 shadow bg-white" id="cards" key={id}>
                                                    <div id="header">
                                                        <img src={'http://localhost:8000' + product_img.split(',')[0]} className="card-img-top" id="card-img" alt="" />
                                                    </div>
                                                    <div className="card-body pl-2 pr-2 card-bdy">
                                                        <p className="card-text merk" >{product_name}</p>
                                                        <p className="card-text price">Rp. {this.toPrice(product_price)} </p>
                                                        <p className="card-text brand text-muted">{category_name}</p>
                                                        <p className="card-text brand text-muted">{`${size_name} - ${color_name} `}</p>
                                                        <p style={{ fontSize: "12px", color: "blue" }}>Rating ({rating.toString().substr(0, 3)}) | Dibeli {dibeli}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                )
                            }
                        </>
                    ):(
                        <>
                        <p>Tidak ada items untuk kategori ini</p>
                        </>
                    )}
                </div>
                <div className="row mt-5">
                    {/* {prevBtn}
                    <button>{this.state.pageInfo.currentPage}</button>
                    {nextBtn} */}
                </div>
            </div>
        )
    }
}


export default ProductCategory