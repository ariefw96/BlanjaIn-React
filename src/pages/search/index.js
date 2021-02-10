import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'
import Card from './../../components/body/cardHome'
import Navbar from './../../components/navbar'
const base_url = process.env.REACT_APP_API_BASE_URL

const SearchPage = ({ history }) => {
    const [product, setProduct] = useState([])
    const [pageInfo, setPageInfo] = useState({})

    console.log(history.location.search)

    const getAllProducts = () => {
        axios.get(base_url + 'products' + history.location.search)
            .then(({ data }) => {
                console.log(data.data)
                setProduct(data.data.products)
                setPageInfo(data.data.pageInfo)
            }).catch((error) => {
                setProduct([])
                setPageInfo([])
                console.log(error)
            })
    }

    useEffect(() => {
        getAllProducts(history.location.search);
    }, [history.location.search])

    return (
        <>
            <Navbar history={history} />
            <div className='container'>
                {
                    product.length > 0 ? (
                        <>
                            {
                                product.map(({ product_name, product_img, product_price, store_name, color_name, size_name, rating, dibeli, id }) => {
                                    return (
                                        <>
                                            <Card product_name={product_name} product_img={product_img} product_price={product_price} store_name={store_name} color_name={color_name} size_name={size_name} rating={rating} dibeli={dibeli} id={id} />
                                        </>
                                    )
                                })
                            }
                        </>
                    ) : (
                            <>
                                <h2>Data tidak ditemukan untuk {history.location.search.split("=")[1]}</h2>
                            </>
                        )
                }
            </div>
        </>
    )
}

export default SearchPage