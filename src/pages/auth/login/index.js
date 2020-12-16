import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import { Logo } from '../../../assets';
import { setLogintrue, passToken } from '../../../redux/actionCreators/Auth'
import { connect } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./login.css"

const base_url = process.env.REACT_APP_API_BASE_URL

class Login extends Component {
    state = {
        isLogin: false,
    }

    handleSubmit = (e) => {
        const { dispatch, auth } = this.props;
        const dataUser = {
            username: this.username,
            password: this.password
        }
        e.preventDefault()
        axios.post(base_url + 'auth/login', dataUser)
            .then(({ data }) => {
                this.props.dispatch(setLogintrue())
                localStorage.setItem('username',data.data.tokenId.username)
                localStorage.setItem('user_id',data.data.tokenId.user_id)
                localStorage.setItem('level',data.data.tokenId.level)
                localStorage.setItem('name',data.data.tokenId.name)
                localStorage.setItem('token',data.data.tokenId.token)
                // this.props.dispatch(passToken(localStorage.getItem('token')))
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        // console.log(localStorage)
        const { dispatch, auth } = this.props;
        // console.log(auth.newState)
        return (
            <Container className="auth">
                {auth.isLogin && <Redirect to="/" />}
                <div className="form-header">
                    <div className="img-container">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <p className="info">Please login with your account</p>
                    <div className="button-group">
                        <a href=" " className="button button-full">Customer</a>
                        <a href=" " className="button button-shadow">Seller</a>
                    </div>
                    <Form className="form-section" autoComplete="off">
                        <div className="form-main">
                            <input type="name" placeholder="Username" name="uname" required onChange={(e) => (this.username = e.target.value)} />
                        </div>
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="psw" required onChange={(e) => (this.password = e.target.value)} />
                        </div>
                    </Form>
                    <a className="forgot" href="reset">Forgot password?</a><br></br>
                    <a className="submit" type="submit" onClick={this.handleSubmit}>LOGIN</a>
                    <p className="register">Don't have a Tokopedia account? <a href="./register">Register</a></p>
                </div>
            </Container>
        )
    }
}



const mapStateToProps = ({ auth, newState }) => {
    return {
        auth,
        newState
    };
};

export default connect(mapStateToProps)(Login);