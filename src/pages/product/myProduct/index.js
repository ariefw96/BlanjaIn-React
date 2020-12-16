import Axios from 'axios';
import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './myproduct.css'

const baseUrl = 'http://localhost:8000/products'
const Url = 'http://localhost:8000/product/'

class MyProduct extends Component {
    state = {
        no : 1,
        products: {},
    };

    getAllProducts = () => {
       
        Axios
        .get(baseUrl)
        .then(({data}) => {
            this.setState({
                products: data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    deleteProduct = async(params) => {
        await Axios.delete(`${Url}${params}`)
        // .then((data) => {
        //     console.log(data)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
        this.props.history.push('/profile/myproduct')   
        console.log(params)
       
      }
    

    componentDidMount = () => {
        this.getAllProducts();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.products !== this.state.products){
            console.log('delete gagal')
        }else{
            console.log('Delete berhasil')
            this.getAllProducts();
        }
    }


    render() {
        const {products} = this.state;
        console.log(products)
        console.log('ini ada di halaman my product',this.props.prdct)

        return (
            <div className="container p-5">
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
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.data && products.data.products.map(({product_name, product_price ,product_qty, id}) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{product_name}</td>
                                <td>{product_price}</td>
                                <td className="text-center">{product_qty}</td>
                                <td className='p-2 d-flex'>
                                    <Link to={{pathname: "/profile/edit/" + id}}>
                                        <Button variant="warning" className="mr-2">Edit</Button>
                                    </Link>
                                    <Button variant="danger" onClick={() => {this.deleteProduct(id)}} >Delete</Button>
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
