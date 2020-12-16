import Axios from 'axios';
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
const getURL = process.env.REACT_APP_API_BASE_URL + 'product/'

class Detail extends Component {
    state = {
        product : []
    }

    getProduct = () => {
        const {match} = this.props
        Axios
        .get(getURL + match.params.id , config)
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
            this.getSingleProduct(this.props.match)
        }
    }
    

    render() {
        const {product} = this.state
        // console.log('idnya adalah', this.state.id)
        console.log('aaa')
        return (
            <>
                <Navbar/>
                <div className="container">
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
                    product && product.map(({product_name, product_img, product_desc, condition_name,total_rating , product_price, product_qty, product_size, store_name}, index) => {
                        return <DetailProduct 
                        product_name={product_name}
                        product_img={product_img}
                        product_desc={product_desc}
                        product_price={product_price}
                        product_qty={product_qty}
                        product_size={product_size}
                        store_name={store_name}
                        product_condition={condition_name}
                        total_rating={total_rating}
                        key={index}
                        />
                    })
                    }
                </div>
                <Product  title='Popular' url="?new=desc"/>
                <div className="mt-5"></div>
            </>
        )
    }
}


export default Detail;