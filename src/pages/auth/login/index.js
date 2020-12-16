import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import { Logo } from '../../../assets';
import { setLogintrue } from '../../../redux/actionCreators/Auth'
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
        axios.post(base_url + 'auth/login', dataUser)
            .then(({ data }) => {
                this.setState({
                    isLogin: true
                })
                dispatch({ type: "LOGIN" });
                const dataX = {
                    name: `data`,
                    email : `date`
                }
                localStorage.setItem("data",JSON.stringify(dataX))
                // udata = {
                //     user_id: data.data.tokenId.user_id,
                //     username: data.data.tokenId.username,
                //     level: data.data.tokenId.level,
                //     name: data.data.tokenId.name
                // }
                // this.props.dispatch(setLogintrue(udata))
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        console.log(localStorage)
        const { dispatch, auth } = this.props;
        return (
            <Container className="auth">
                {this.state.isLogin && <Redirect to="/" />}
                <div className="form-header">
                    <div className="img-container">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <p className="info">Please login with your account</p>
                    <div className="button-group">
                        <a href=" " className="button button-full">Customer</a>
                        <a href=" " className="button button-shadow">Seller</a>
                    </div>
                    <Form className="form-section">
                        <div className="form-main">
                            <input type="name" placeholder="Username" name="uname" required onChange={(e) => (this.username = e.target.value)} />
                        </div>
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="psw" required onChange={(e) => (this.password = e.target.value)} />
                        </div>
                    </Form>
                    <a className="forgot" href="reset">Forgot password?</a><br></br>
                    <a className="submit" type="submit" onClick={this.handleSubmit}>LOGIN</a>
                    <p className="register">Don't have a Tokopedia account? <a href="register">Register</a></p>
                </div>
            </Container>
        )
    }
}



const mapStateToProps = ({ auth }) => {
    return {
        auth,
    };
};

export default connect(mapStateToProps)(Login);