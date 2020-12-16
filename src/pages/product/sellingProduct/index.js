import axios from 'axios';
import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './myproduct.css'

const baseUrl = 'http://127.0.0.1:8000/products/showall'
const config = {
    headers : {'x-access-token': 'x '+localStorage.getItem('token')}
}

class MyProduct extends Component {
    state = {
        products: [],
    };

    getAllProducts = () => {

        axios
            .get(baseUrl)
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
            }).catch((error) => {
                console.log(error)
            })
        window.location.reload()
    }


    componentDidMount = () => {
        this.getAllProducts();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.products !== this.state.products) {
            console.log('delete gagal')
        } else {
            console.log('Delete berhasil')
            this.getAllProducts();
        }
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
                                <th>Product Price</th>
                                <th>Product Desc</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map(({ product_name, product_price, product_desc, id }, index) => {
                                return (
                                    <tr key={id}>
                                        <td>{index + 1}</td>
                                        <td>{product_name}</td>
                                        <td>{product_price}</td>
                                        <td className="text-center">{product_desc}</td>
                                        <td className='p-2 d-flex'>
                                            <Link to={{ pathname: "/profile/edit/" + id }}>
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
