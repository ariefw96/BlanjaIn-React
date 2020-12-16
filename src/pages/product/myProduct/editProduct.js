import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import './myproduct.css'

const url = 'http://127.0.0.1:8000/'

const config = {
    headers: {
        'x-access-token': 'x ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNCwidXNlcm5hbWUiOiJhcmllZjA5OCIsImxldmVsIjoyLCJpYXQiOjE2MDgxMTg1NzJ9.8ahe3i11cutawAUBG6fSYRQkiD7gvkX7-TlG8P1zHgM',
        'Content-Type': 'multipart/form-data'
    }
};

class EditProduct extends Component {

    state = {
        product_img: [],
        cat_updt: '',
        dataUpdated: false
    }

    optCatcher = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log('changed')
    }

    handlerFile = (e) => {
        this.setState({
            product_img: e.target.files
        })
    }

    handleUpload = (e) => {
        const idparam = this.props.match.params.id
        let x = new FormData()
        if (this.product_name) {
            x.append("product_name", this.product_name)
        }
        if (this.state.cat_updt != '') {
            x.append("category_id", this.state.cat_updt)
        }
        if (this.product_price) {
            x.append("product_price", this.product_price)
        }
        if (this.product_desc) {
            x.append("product_desc", this.product_desc)
        }
        x.append("user_id", localStorage.getItem('user_id'))
        if (this.state.product_img[0]) {
            for (let i = 0; i < this.state.product_img.length; i++) {
                x.append("product_img", this.state.product_img[i])
            }
        }
        for (var pair of x.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        // e.preventDefault();
        // const config = { headers: { 'Content-Type': 'multipart/form-data', 'x-access-token': 'x ' + localStorage.getItem('token') } };
        axios.patch(url + 'product/updateProd/' + idparam, x, config)
            .then(({ data }) => {
                console.log(data)
            }).catch((err) => {
                console.log(err)
            })

            this.setState({
                dataUpdated:true
            })
    }

    componentDidMount = () => {
        const idparam = this.props.match.params.id
        axios.get(url + 'product/getId/' + idparam, config)
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    id: data[0].id,
                    category_id: data[0].category_id,
                    product_name: data[0].product_name,
                    product_price: data[0].product_price,
                    product_desc: data[0].product_desc,
                })
            }).catch((error) => {
                console.log(error)
            })

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
        console.log('aaaa')
        const { category_id, product_name, product_price, product_desc, cat } = this.state
        console.log(this.state)
        return (
            <div className="container p-5">
                {this.state.dataUpdated && <Redirect to="/profile/myproduct" />}
                <div className="container bckgr">
                    <h2>Edit Product</h2>
                    <form className="col-lg-6" onSubmit={this.handlerSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name product</Form.Label>
                            <Form.Control type="text" name="product_name" placeholder={product_name} onChange={(e) => (this.product_name = e.target.value)} />
                        </Form.Group>
                        <div className="form-group">
                            <label>Pilih Category  </label><br></br>
                            <select id="cat_updt" className="form-control col-6" onChange={this.optCatcher}>
                                {
                                    cat && cat.map(({ id, category_name }) => {
                                        if (id == category_id) {
                                            return (
                                                <>
                                                    <option value={id} selected>{category_name}</option>
                                                </>
                                            )
                                        } else {
                                            return (
                                                <>
                                                    <option value={id}>{category_name}</option>
                                                </>
                                            )
                                        }


                                    })
                                }
                            </select>
                        </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" name="product_price" placeholder={product_price} onChange={(e) => (this.product_price = e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control as="textarea" placeholder={product_desc} onChange={(e) => (this.product_desc = e.target.value)} rows={6} />
                            {/* <Form.Control type="text" name="product_desc" placeholder={product_desc} onChange={(e) => (this.product_desc = e.target.value)} /> */}
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

export default EditProduct
