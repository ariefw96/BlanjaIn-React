import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import './myproduct.css'


const baseUrl = 'http://127.0.0.1:8000/product/add-product'

class AddProduct extends Component {

    state = {
        product_img: [],
        cat_updt:'',
        dataInserted: false
    }

    optCatcher = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        // console.log('changed')
    }

    handlerFile = (e) => {
        this.setState({
            product_img: e.target.files
        })
    }

    handleUpload = (e) => {
        let x = new FormData()
        x.append("product_name", this.product_name)
        x.append("category_id", this.state.cat_updt)
        x.append("product_price", this.product_price)
        x.append("product_desc", this.product_desc)
        x.append("user_id", localStorage.getItem('user_id'))
        for (let i = 0; i < this.state.product_img.length; i++) {
            x.append("product_img", this.state.product_img[i])
        }
        for (var pair of x.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        e.preventDefault();
        const config = { headers: { 'Content-Type': 'multipart/form-data', 'x-access-token': 'x ' + localStorage.getItem('token') } };
        axios.post(baseUrl, x, config)
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    dataInserted:true
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    componentDidMount = () => {
        axios.get('http://127.0.0.1:8000/products/all_ctg')
            .then(({ data }) => {
                this.setState({
                    cat: data
                })
                console.log('getData')
            }).catch((err) => {
                console.log(err)
            })
    }


    render() {
        const { match, location, history } = this.props
        const { cat } = this.state
        console.log(match, location, history)
        console.log(this.state)
        return (
            <div className="container p-5">
                {this.state.dataInserted && <Redirect to="/profile/myproduct" />}
                <div className="container bckgr">
                    <h2>Tambah product baru hhe</h2>
                    <form className="col-lg-6" autoComplete="off">
                        <Form.Group controlId="formBasicEmail" enctype="multipart/form-data">
                            <Form.Label>Name product</Form.Label>
                            <Form.Control type="text" name="product_name" placeholder="Name product" onChange={(e) => (this.product_name = e.target.value)} />
                        </Form.Group>
                        <div className="form-group">
                            <label>Category  </label><br></br>
                            <select id="cat_updt" className="form-control col-6" onChange={this.optCatcher}>
                                {
                                    cat && cat.map(({ id, category_name }) => {
                                        return (
                                            <>
                                                <option value={id}>{category_name}</option>
                                            </>
                                        )

                                    })
                                }
                            </select>
                        </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" name="product_price" placeholder="Product Price" onChange={(e) => (this.product_price = e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Product Description" onChange={(e) => (this.product_desc = e.target.value)} rows={6} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Product Size</Form.Label>
                            <Form.Control type="file" name="product_img" placeholder="Product Img" onChange={(e) => this.handlerFile(e)} multiple />
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
