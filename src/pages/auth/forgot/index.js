import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import { Logo } from '../../../assets';
import { connect } from 'react-redux'
import { setEmail } from '../../../redux/actionCreators/Auth'
import axios from 'axios'
import "../login/login.css"
const base_url = process.env.REACT_APP_API_BASE_URL

class Reset extends Component {
    constructor(props) {
        super(props)
        this.state={
            errMsg:''
        }
    }
    handleSubmit = () => {
        if(this.email == '' || this.email == undefined){
            this.setState({
                errMsg:'Email tidak boleh kosong!'
            })
        }else{
            const data = {
                email: this.email
            }
            axios.post(base_url + `auth/forgot`, data)
                .then(({ data }) => {
                    this.props.dispatch(setEmail(this.email))
                    this.props.history.replace('/otp')
                }).catch(({ response }) => {
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
                    <p className="info">Reset password</p>
                    <Form className="form-section" autoComplete="off">
                        <div className="form-main">
                            <input type="name" placeholder="Email" name="uname" required onChange={(e) => (this.email = e.target.value)} />
                        </div>
                    </Form>
                    <p style={{color:'red', fontWeight:'bold'}}>{this.state.errMsg}</p>
                    <div className="submit" onClick={this.handleSubmit} type="submit">RESET</div>
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