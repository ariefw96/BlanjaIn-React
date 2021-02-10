import axios from 'axios';
import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './myproduct.css'

const baseUrl = process.env.REACT_APP_API_BASE_URL
const config = {
    headers : {'x-access-token': 'x '+localStorage.getItem('token')}
}

class MyProduct extends Component {
    state = {
        products: [],
    };

    getAllProducts = () => {
        axios
            .get(baseUrl+'products/alldata/'+localStorage.getItem('user_id'))
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    products: data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deleteProduct = (params) => {
        axios.delete(baseUrl+'product/delete/' + params, config)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                console.log(error)
            })
        window.location.reload()
    }


    componentDidMount = () => {
        this.getAllProducts();
    }


    render() {
        const { products } = this.state;
        return (
            <div className="container p-5">
                <div className="container bckgr">
                    <div className="d-flex">
                        <h2>My Product</h2>
                        <div className="ml-3">
                            <Link to="/profile/addstock">
                                <Button variant="success">Tambah Stock</Button>
                            </Link>
                        </div>
                    </div>
                    <Table striped bordered hover responsive size="sm">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Product Color</th>
                                <th>Product Size</th>
                                <th>Product Condition</th>
                                <th>Qty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map(({ product_name, category_name,color_name,size_name,condition_name,qty, id }, index) => {
                                return (
                                    <tr key={id}>
                                        <td>{index + 1}</td>
                                        <td>{product_name}</td>
                                        <td>{category_name}</td>
                                        <td>{color_name}</td>
                                        <td>{size_name}</td>
                                        <td>{condition_name}</td>
                                        <td>{qty}</td>
                                        <td className='p-2 d-flex'>
                                            <Link to={{ pathname: "/profile/editstock/" + id }}>
                                                <Button variant="warning" className="mr-2">Edit</Button>
                                            </Link>
                                            <Button variant="danger" onClick={() => { this.deleteProduct(id) }} >Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table >


                </div>

            </div>
        )
    }
}

export default MyProduct
