import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './myproduct.css'
const qs = require('querystring')

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': 'x '+localStorage.getItem('token')
    }
}

class AddProduct extends Component {

    handleAddStock = (e) => {
        const data = {
            product_id : this.product_id,
            size_id: this.size_id,
            color_id:this.color_id,
            condition_id:this.condition_id,
            qty:this.qty,
            user_id:localStorage.getItem('user_id')
        }
        console.log(data)
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_BASE_URL+'product/add-stock', qs.stringify(data), config)
        .then(({data}) => {
            console.log(data)
            // window.location.href='./profile/mystock/'
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        const { match, location, history } = this.props
        console.log(match, location, history)
        console.log(this.state)
        return (
            <div className="container p-5">
                <div className="container bckgr">
                    <h2>Tambah Stock Barang</h2>
                    <form className="col-lg-6" autoComplete="off">
                        <Form.Group controlId="formBasicEmail" enctype="multipart/form-data">
                            <Form.Label>Produk</Form.Label>
                            <Form.Control type="number" name="product_id"  onChange={(e) => (this.product_id = e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Size</Form.Label>
                            <Form.Control type="number" name="size_id" onChange={(e) => (this.size_id = e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="number" name="color_id" onChange={(e) => (this.color_id = e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control type="number" name="condition_id"   onChange={(e) => (this.condition_id = e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" name="qty" onChange={(e) => (this.qty = e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleAddStock}>
                            Submit
                        </Button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddProduct
