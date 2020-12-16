import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './myproduct.css'


const baseUrl = 'http://127.0.0.1:8000/product/add-product'

class AddProduct extends Component {

    state = {
        product_img:[]
    }

    handlerFile = (e) => {
        this.setState({
            product_img: e.target.files
        })
    }

    handleUpload = (e) => {
        let x = new FormData()
        x.append("product_name", this.product_name)
        x.append("category_id", this.category_id)
        x.append("product_price", this.product_price)
        x.append("product_desc", this.product_desc)
        x.append("user_id",localStorage.getItem('user_id'))
        for(let i=0;i<this.state.product_img.length;i++){
            x.append("product_img",this.state.product_img[i])
        }
        for (var pair of x.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        e.preventDefault();
        const config = { headers: { 'Content-Type': 'multipart/form-data' , 'x-access-token': 'x '+localStorage.getItem('token')} };
        axios.post(baseUrl, x, config)
        .then(({data}) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }



    render() {
        const { match, location, history } = this.props
        console.log(match, location, history)
        console.log(this.state)
        return (
            <div className="container p-5">
                <div className="container bckgr">
                    <h2>Tambah product baru</h2>
                    <form className="col-lg-6" onSubmit={this.handlerSubmit} autoComplete="off">
                        <Form.Group controlId="formBasicEmail" enctype="multipart/form-data">
                            <Form.Label>Name product</Form.Label>
                            <Form.Control type="text" name="product_name" placeholder="Name product" onChange={(e) => (this.product_name = e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" name="category_id" placeholder="Category" onChange={(e) => (this.category_id = e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" name="product_price" placeholder="Product Price" onChange={(e) => (this.product_price = e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type="text" name="product_desc" placeholder="Product Description"  onChange={(e) => (this.product_desc = e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Product Size</Form.Label>
                            <Form.Control type="file" name="product_img" placeholder="Product Img" onChange={(e) => this.handlerFile(e)} multiple/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleUpload}>
                            Submit
                        </Button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddProduct
