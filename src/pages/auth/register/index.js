import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios';
import { Logo } from '../../../assets';
import "../login/login.css"

const url = process.env.REACT_APP_API_BASE_URL

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSeller: false
        }
    }
    handleSubmit = (e) => {
        const {history} = this.props
        let level = 1
        let storeName = ''
        if (this.state.isSeller) {
            level = 2
            storeName = this.store
        }
        const data = {
            email: this.email,
            password: this.password,
            fullname: this.fullname,
            level_id: level,
            storeName:storeName
        }
        console.log(data)
        axios.post(url + '/auth/signup', data)
            .then(({ data }) => {
                history.replace('/activate')
            }).catch((error) => {
                console.log(error)
            })
    }
    changeForm = () => {
        this.setState({
            isSeller: !this.state.isSeller
        })
    }
    render() {
        let btnSignup;
        let formSeller;
        if (!this.state.isSeller) {
            btnSignup =
                <>
                    <div className="button-group">
                        <div className="button button-full">Customer</div>
                        <div className="button button-shadow" onClick={this.changeForm}>Seller</div>
                    </div>
                </>
        } else {
            btnSignup =
                <>
                    <div className="button-group">
                        <div className="button button-shadow" onClick={this.changeForm}>Customer</div>
                        <div className="button button-full">Seller</div>
                    </div>
                </>
            formSeller = <>
                <div className="form-main">
                    <input type="name" placeholder="Store name" name="uname" required onChange={(e) => (this.store = e.target.value)} />
                </div>
            </>
        }
        return (
            <div>
                <Container className="auth">
                    <div className="form-header">
                        <div className="img-container">
                            <Image src={Logo} alt="Logo" />
                        </div>
                        <p className="info">Please sign up with your account</p>
                        {btnSignup}
                        <Form className="form-section">
                            <div className="form-main">
                                <input type="email" placeholder="Email" name="uname" required onChange={(e) => (this.email = e.target.value)} />
                            </div>
                            <div className="form-main">
                                <input type="password" placeholder="Password" name="psw" onChange={(e) => (this.password = e.target.value)} required />
                            </div>
                            <div className="form-main">
                                <input type="name" placeholder="Fullname" name="uname" required onChange={(e) => (this.fullname = e.target.value)} />
                            </div>
                            {formSeller}
                            <a className="submit" type="submit" onClick={this.handleSubmit}>REGISTER</a>
                        </Form>

                        <p className="register">Already have a BlanjaIn account? <Link to="/login">Login here</Link></p>
                    </div>
                </Container>
            </div>
        )
    }
}


const mapStateToProps = ({ bag }) => {
    return {
        bag
    };
};

export default connect(mapStateToProps)(Register);