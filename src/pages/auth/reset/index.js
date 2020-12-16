import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import { Logo } from '../../../assets';
import "../login/login.css"

class Reset extends Component {
    render() {
        return (
            <Container className="auth">
            <div className="form-header">
                <div className="img-container">
                <Image src={Logo}  alt="Logo" />
                </div>
                <p className="info">Reset password</p>
                <Form className="form-section">
                    <div className="form-main">
                        <input type="email" placeholder="Email" name="uname" required />
                    </div>
                </Form>
                <a className="submit" href="confirm" type="submit">RESSET</a>
                <p className="register">Don't have a Tokopedia account? <a href="signup">Register</a></p>
            </div>
        </Container>
        )
    }
}


export default Reset;