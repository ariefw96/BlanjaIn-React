import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DetailProduct from '../../components/body/detailProduct';
import Product from '../../components/body/product';
import Navbar from '../../components/navbar'

const token = 'x '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNCwidXNlcm5hbWUiOiJhcmllZjA5OCIsImxldmVsIjoyLCJpYXQiOjE2MDgwNTMyNjB9.aBtdvf9xeFPdcnQYwdZuasIAifxKtLAakmP2GtrufhM'
const config = {
    headers: {
        'x-access-token' : token
    }
}
const url = process.env.REACT_APP_API_BASE_URL

class Detail extends Component {
    constructor(props){
        super(props)
    }
    state = {
        product : []
    }

    getProduct = () => {
        const {match} = this.props
        console.log(url+'getProductData/' + match.params.id)
        axios
        .get(url+'product/getProductData/' + match.params.id)
        .then(({data}) => {
            // console.log(data)
            this.setState({
                product: data.data
            })
        })
        .catch((err) => {
            const errMsg = {
                msg: "Data Not Found",
                err
            }
            console.log(errMsg)
            
        })
    }

    componentDidMount = () => {
        this.getProduct();
    } 

    componentDidUpdate = (prevProps) => {
        if(this.props.match !== prevProps.match){
            this.getProduct(this.props.match)
        }
    }
    

    render() {
        const {product} = this.state
        // console.log('idnya adalah', this.state.id)
        return (
            <>
                <Navbar history={this.props.history}/>
                <div className="container mb-5">
                    <div className="d-flex" >
                        <Link className="card-btn" to={"/"}>
                            <p className="mr-2">Home</p>
                        </Link>
                        <p className="mr-2"> {">"} </p>
                        <Link className="card-btn">
                            <p className="mr-2">Detail</p>
                        </Link>
                    </div>
                    {
                    product && product.map(({id, product_name, product_img, product_desc ,product_price, color_id, color_name,size_id, size_name, fullname, condition_name, rating, dibeli}, index) => {
                        return <DetailProduct 
                        product_name={product_name}
                        product_img={product_img}
                        product_desc={product_desc}
                        product_price={product_price}
                        color_id={color_id}
                        color_name={color_name}
                        size_id={size_id}
                        size_name={size_name}
                        store_name={fullname}
                        condition_name={condition_name}
                        rating={rating}
                        dibeli={dibeli}
                        key={id}
                        prod_id= {this.props.match.params.id}
                        />
                    })
                    }
                </div>
                <Product title='You may also like' url="?sortBy=rating&orderBy=desc"/>
                <div className="mt-5"></div>
            </>
        )
    }
}


export default Detail;