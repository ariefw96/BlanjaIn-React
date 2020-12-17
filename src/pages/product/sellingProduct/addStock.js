import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import './myproduct.css'
const qs = require('querystring')

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': 'x ' + localStorage.getItem('token')
    }
}

class AddProduct extends Component {

    state = {
        prod: [],
        color: [],
        size: [],
        cond: [],
        product_id: '',
        color_id: '',
        size_id: '',
        condition_id: '',
        qty: '',
        update_id: '',
        addData: false

    }
    optCatcher = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    setUpdate = (id) => {
        this.setState({
            update_id: id.target.name
        })
    }

    submitHandler = (e) => {
        // e.preventDefault()
        const params = {
            product_id: this.state.product_id,
            color_id: this.state.color_id,
            size_id: this.state.size_id,
            condition_id: this.state.condition_id,
            qty: this.state.qty
        }
        console.log(params)
        axios.post('http://127.0.0.1:8000/product/add-stock', qs.stringify(params), config)
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    addData: true
                })
            }).catch((error) => {
                console.log(error)
            })

    }

    componentDidMount = () => {
        axios.get('http://127.0.0.1:8000/products/all_prod')
            .then(({ data }) => {
                this.setState({
                    prod: data
                })
            }).catch((error) => {
                console.log(error)
            })
        axios.get('http://127.0.0.1:8000/products/all_color')
            .then(({ data }) => {
                this.setState({
                    color: data
                })
            }).catch((error) => {
                console.log(error)
            })

        axios.get('http://127.0.0.1:8000/products/all_size')
            .then(({ data }) => {
                this.setState({
                    size: data
                })
            }).catch((error) => {
                console.log(error)
            })

        axios.get('http://127.0.0.1:8000/products/all_cond')
            .then(({ data }) => {
                this.setState({
                    cond: data
                })
            }).catch((error) => {
                console.log(error)
            })
        // console.log(this.props)

    }

    render() {
        // const { match, location, history } = this.props
        const { prod, size, color, cond } = this.state
        // console.log(match, location, history)
        // console.log(this.state)
        return (
            <>
                <div className="container p-5">
                    {this.state.addData && <Redirect to="/profile/mystock" />}
                    <div className="container bckgr">
                        <div className="ml-3">
                            <h2>Tambah Stock Barang</h2>
                            <div className="dropdown-divider"></div>
                            <form onSubmit={this.submitHandler} autoComplete="off">
                                <div className="form-group">
                                    <label>Pilih Product  </label><br></br>
                                    <select className="form-control col-6" id="product_id" onChange={this.optCatcher}>
                                        <option value="" selected hidden>Pilih</option>
                                        {
                                            prod && prod.map(({ id, product_name }) => {

                                                return (
                                                    <>
                                                        <option value={id}>{product_name}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Pilih Ukuran  </label><br></br>
                                    <select id="size_id" className="form-control col-6" onChange={this.optCatcher}>
                                        <option value="" selected hidden>Pilih</option>
                                        {
                                            size && size.map(({ id, size_name }) => {

                                                return (
                                                    <>
                                                        <option value={id}>{size_name}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Pilih Warna  </label><br></br>
                                    <select id="color_id" className="form-control col-6" onChange={this.optCatcher}>
                                        <option value="" selected hidden>Pilih</option>
                                        {
                                            color && color.map(({ id, color_name }) => {
                                                return (
                                                    <>
                                                        <option value={id}>{color_name}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Pilih Kondisi  </label><br></br>
                                    <select id="condition_id" className="form-control col-6" onChange={this.optCatcher}>
                                        <option value="" selected hidden>Pilih</option>
                                        {
                                            cond && cond.map(({ id, condition_name }) => {
                                                return (
                                                    <>
                                                        <option value={id}>{condition_name}</option>
                                                    </>
                                                )

                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Jumlah  </label><br></br>
                                    <input type="number" className="form-control col-3" name='qty' onChange={this.changeHandler} /><br></br>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" onClick={this.setUpdate}>Kirim</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AddProduct
