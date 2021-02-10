import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import { Logo } from '../../../assets';
import { connect } from 'react-redux'
import axios from 'axios'
import { removeEmail } from './../../../redux/actionCreators/Auth'
import "../login/login.css"

const base_url = process.env.REACT_APP_API_BASE_URL

class Reset extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errMsg: ''   
        }
    }

    handleSubmit = () => {
        if (this.password != this.confirm_password) {
            this.setState({
                errMsg: 'Password harus sama !'
            })
        } else {
            const resetPw = {
                email: this.props.auth.email,
                newPassword: this.password
            }
            axios.patch(base_url + `/auth/reset`, resetPw)
                .then(({ data }) => {
                    console.log(data)
                    this.props.history.replace('/login')
                }).catch(({response}) =>{
                    console.log(response.data)
                    this.setState({
                        errMsg:response.data.message
                    })
                })
        }
    }

    render() {
        return (
            <Container className="auth">
                <div className="form-header">
                    <div className="img-container">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <p className="info">Please login with your account</p>
                    <p className="confirm">You need to change your password to activate your account</p>
                    <Form className="form-section">
                        <div className="form-main">
                            <input type="password" placeholder="Password" name="psw" required onChange={(e) => (this.password = e.target.value)} />
                        </div>
                        <div className="form-main">
                            <input type="password" placeholder="Confirm New Password" name="psw" required onChange={(e) => (this.confirm_password = e.target.value)} />
                        </div>
                    </Form>
                    <div className="submit" type="submit" onClick={this.handleSubmit}>Reset Password</div>
                    <p className={{ color: 'red', fontWeight: 'bold' }} > {this.state.errMsg}</p>
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

export default connect(mapStateToProps)(Reset);