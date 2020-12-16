import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import { addItems } from '../../../redux/actionCreators/myBag'
import { connect } from 'react-redux'
import axios from 'axios';
import { Logo } from '../../../assets';
import "../login/login.css"

const base_url = process.env.REACT_APP_API_BASE_URL

class Register extends Component {
    handleSubmit = (e) => {
        const data = {
            username: this.username,
            password: this.password,
            level_id: 1,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email
        }
        axios.post(base_url + 'auth/signup', data)
            .then(({ data }) => {   
                alert(data.data.msg)
                window.location.href="/login"
            }).catch((error) => {
                alert(error)
            })
    }
    render() {
        // console.log(this.state)
        // console.log(this.props.bag.mybag)
        return (
            <div>
                <Container className="auth">
                    <div className="form-header">
                        <div className="img-container">
                            <Image src={Logo} alt="Logo" />
                        </div>
                        <p className="info">Please sign up with your account</p>
                        <div className="button-group">
                            <a href=" " className="button button-full">Customer</a>
                            <a href=" " className="button button-shadow">Seller</a>
                        </div>
                        <Form className="form-section" onSubmit={this.handleSubmit}>
                            <div className="form-main">
                                <input type="name" placeholder="Username" name="uname" onChange={(e) => (this.username = e.target.value)} required />
                            </div>
                            <div className="form-main">
                                <input type="password" placeholder="Password" name="psw" onChange={(e) => (this.password = e.target.value)} required />
                            </div>
                            <div className="form-main">
                                <input type="name" placeholder="Firstname" name="uname" required onChange={(e) => (this.firstname = e.target.value)} />
                            </div>
                            <div className="form-main">
                                <input type="name" placeholder="Lastname" name="uname" required onChange={(e) => (this.lastname = e.target.value)} />
                            </div>
                            <div className="form-main">
                                <input type="email" placeholder="Email" name="uname" required onChange={(e) => (this.email = e.target.value)} />
                            </div>
                            <a className="submit" type="submit" onClick={this.handleSubmit}>REGISTER</a>
                        </Form>
                        
                        <p className="register">Already have a Tokopedia account? <a href="login">Login</a></p>
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