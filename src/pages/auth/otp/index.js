import React, { Component } from 'react'
import { Container, Form, Image } from 'react-bootstrap'
import { Logo } from '../../../assets';
import { connect } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./../login/login.css"

const base_url = process.env.REACT_APP_API_BASE_URL

class Otp extends Component {
    constructor(props){
        super(props)
        this.state = {
            errMsg:''
        }
    }

    handleSubmit = () => {
        const {history} = this.props
        axios.get(base_url+`/auth/otp/${this.props.auth.email}/${this.otp}`)
        .then(({data}) =>{
            // console.log(data)
            history.replace('/reset')
        }).catch(({response}) =>{
            console.log(response.data)
            this.setState({
                errMsg:'Gagal!'
            })
        })
    }

    render() {
        return (
            <Container className="auth">
                <div className="form-header">
                    <div className="img-container">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <p className="info">Please type OTP here</p>
                    <Form className="form-section" autoComplete="off">
                        <div className="form-main">
                            <input type="name" placeholder="OTP" name="psw" required onChange={(e) => (this.otp = e.target.value)} />
                        </div>
                    </Form>
                    <a className="submit" type="submit" onClick={this.handleSubmit}>Find OTP</a>
                    {/* <p className="register">Already have BlanjaIn account? Login <Link to="/login">here</Link></p> */}
                    <p style={{color:'red', fontWeight:'bold'}} >{this.state.errMsg}</p>
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

export default connect(mapStateToProps)(Otp);