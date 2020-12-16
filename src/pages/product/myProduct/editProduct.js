import Axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './myproduct.css'

const Url = 'http://localhost:8000/product/'

class EditProduct extends Component {

    state={
        id : '',
        category_id:'',
        product_name:'',
        product_price:'',
        product_qty:'',
        product_desc:'',
        product_size: '',
        product_color:'',
        product_condition:'',
        update_date: new Date(Date.now()),
    }
  


    componentDidMount = async () => {
        const idparam = this.props.match.params.id
        const res = await Axios.get(Url + idparam)
        const {id, category_id, product_name, product_price, product_qty, product_desc, product_size ,product_color, product_condition } = res.data.data[0]

        this.setState({
            id: id,
            category_id: category_id,
            product_name: product_name,
            product_price: product_price,
            product_qty: product_qty,
            product_desc: product_desc,
            product_size : product_size,
            product_color: product_color,
            product_condition: product_condition,
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        await Axios.put((Url), this.state)
        console.log(this.state)
        alert('Data Berhasil diubah')
        this.props.history.push('/profile/myproduct')
    }



    render() { 
        console.log(this.props.history)
        console.log("isi props dari edit product : ",this.props.match.params.id)
        console.log(this.state)
        const {category_id, product_name, product_price, product_qty, product_desc, product_size, product_color, product_condition } = this.state
        return (
            <div className="container p-5">
                <div className="container bckgr">
                    <h2>Edit Product</h2>
                            <form className="col-lg-6" onSubmit={this.handlerSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name product</Form.Label>
                                    <Form.Control  type="text" name="product_name" placeholder={product_name}  onChange={this.handlerChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="number"  name="category_id"  value={category_id}  onChange={this.handlerChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control type="number" name="product_price" value={product_price}   onChange={this.handlerChange}  />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Product Quantity</Form.Label>
                                    <Form.Control type="text" name="product_qty" value={product_qty}   onChange={this.handlerChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control type="text" name="product_desc" value={product_desc}   onChange={this.handlerChange}  />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Product Size</Form.Label>
                                    <Form.Control type="text" name="product_size" value={product_size}   onChange={this.handlerChange}  />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Product Color</Form.Label>
                                    <Form.Control type="text" name="product_color" value={product_color}  onChange={this.handlerChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Product Condition</Form.Label>
                                    <Form.Control type="text" name="product_condition" value={product_condition}  onChange={this.handlerChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </form>
                    
                </div>

            </div>
        )
    }
}

export default EditProduct
