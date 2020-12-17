import axios from 'axios';
import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom';
import './myproduct.css'

const baseUrl = 'http://127.0.0.1:8000/products/showall'
const config = {
    headers : {'x-access-token': 'x '+localStorage.getItem('token')}
}

class MyProduct extends Component {
    state = {
        products: [],
        deleted:false
    };

    getAllProducts = () => {

        axios
            .get(baseUrl+'/'+localStorage.getItem('user_id'))
            .then(({ data }) => {
                this.setState({
                    products: data.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deleteProduct = (params) => {
        axios.delete('http://127.0.0.1:8000/product/deleteProd/' + params, config)
            .then((result) => {
                console.log(result)
                this.setState({
                    deleted: true
                })
            }).catch((error) => {
                console.log(error)
            })

    }


    componentDidMount = () => {
        this.getAllProducts();
        this.setState({
            deleted:false
        })
    }



    render() {
        const { products } = this.state;

        return (
            <div className="container p-5">
                {this.state.deleted && <Redirect to="/profile/myproduct" />}
                <div className="container bckgr">
                    <div className="d-flex">
                        <h2>My Product</h2>
                        <div className="ml-3">
                            <Link to="/profile/addproduct">
                                <Button variant="success">Tambah Product</Button>
                            </Link>
                        </div>
                    </div>
                    <Table striped bordered hover responsive size="sm">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Product Category</th>
                                <th>Product Price</th>
                                <th>Product Desc</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map(({ product_name, category_name, product_price, product_desc, id }, index) => {
                                return (
                                    <tr key={id}>
                                        <td>{index + 1}</td>
                                        <td>{product_name}</td>
                                        <td>{category_name}</td>
                                        <td>{product_price}</td>
                                        <td className="text-center">{product_desc}</td>
                                        <td className='p-2 d-flex'>
                                            <Link to={{ pathname: "/profile/edit/" + id }}>
                                                <Button variant="primary" className="mr-2">Edit</Button>
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
