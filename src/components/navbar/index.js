import React, { Component } from 'react'
import { Sort, Logo, Search, Chart } from '../../assets';
import { setLoginfalse } from '../../redux/actionCreators/Auth'
import { addItems } from '../../redux/actionCreators/myBag'
import './home.css'
import '../../pages/style.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'

const token = 'x ' + localStorage.getItem("token")
const config = {
    headers: {
        'x-access-token': token
    }
}
const base_url = process.env.REACT_APP_API_BASE_URL



class Navbar extends Component {

    state = {
        product_name: ``,
        current_url: ``,
        color: '',
        size: '',
        category: '',
        fetchSize: [],
        fetchColor: [],
        searchName: ''
    }


    clickOptHandler = (e) => {
        this.setState({
            [e.target.name]: `&${[e.target.name]}=${e.target.id}`
        })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    //search
    submitHandler = () => {
        const pathName = '/products?name='+this.search
        // window.location.href=pathName
        return 
        
    }
    //filter
    submitFilterHandler = () => {
        // console.log(this.state.current_url +this.state.color+this.state.size_selected)
        const newUrl = this.state.current_url.split('&')
        window.location.href = newUrl[0] + this.state.color + this.state.size + this.state.category
    }

    //logout
    logoutApp = () => {
        const { dispatch, auth } = this.props;
        axios.post(base_url + 'auth/logout', token, config)
            .then((result) => {
                this.props.dispatch(setLoginfalse())
                localStorage.removeItem('username')
                localStorage.removeItem('user_id')
                localStorage.removeItem('level')
                localStorage.removeItem('name')
                localStorage.removeItem('token')
            }).catch((error) => {
                console.log(error)
            })
    }

    getAllSize = () => {
        axios.get('http://localhost:8000/products/allsize')
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    fetchSize: data
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    clickFilterHandler = () => {
        this.setState({
            current_url: window.location.href,
        })
    }

    componentDidMount = () => {
        this.getAllSize()
    }

    render() {
        const { fetchSize } = this.state
        const { dispatch, auth } = this.props;
        // console.log(this.props)

        console.log(localStorage)
        let loginBtn;
        // if (auth.isLogin) {
        if(localStorage.getItem("username")){
            loginBtn = <>
                <div className="text-decoration-none">
                    <div>Welcome
                        <Link to="/profile">{localStorage.getItem("username")},</Link>
                        <button className="btn btn-danger pl-4 pr-4 mr-3 rounded-pill" onClick={this.logoutApp}>Logout</button>
                    </div>
                </div>
            </>
        } else {
            loginBtn = <>
                <Link className="text-decoration-none" to="/login">
                    <button className="btn btn-danger pl-4 pr-4 mr-3 rounded-pill">Login</button>
                </Link>
                <Link className="text-decoration-none" to="/register">
                    <button className="btn btn-danger pl-4 pr-4 rounded-pill bg">Sign up</button>
                </Link>
            </>
        }
        return (
            <>
                <header className="sticky-top">
                    <nav className="navbar shadow p-3 mb-5 bg-white rounded">
                        <div className="container">
                            <Link to='/' className="text-decoration-none">
                                <div className="col-lg-2 d-flex">
                                    <img src={Logo} alt="" />
                                    <span className="txt ml-4">Blanja</span>
                                </div>
                            </Link>
                            <div className="col-lg-6 d-flex mt-2">
                                <div className="input-group">
                                    <input type="text" className="form-control border-right-0" style={{ borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px" }} name='product_name' placeholder="Search here..." autoComplete="off" onChange={(e) => (this.setState({searchName: e.target.value}))} />
                                    <span className="input-group-append">
                                        <div className="input-group-text bg-transparent border-left-0" style={{ borderTopRightRadius: "25px", borderBottomRightRadius: "25px", height: "38px" }}>
                                        <Link to={{
            pathname:'/products',
            search: "?name="+this.state.searchName
            }}
            >
                <div ><i className="fas fa-search"></i></div>
                </Link>
                                        </div>
                                    </span>
                                </div>
                                <div>
                                    <button className="btn btn-outline-dark ml-5" data-toggle="modal" data-target="#FilterModal" onClick={this.clickFilterHandler}>
                                        <img src={Sort} alt="" />
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-4 red mt-3 d-flex justify-content-end">
                                <Link to="/mybag">
                                    <button className="btn btn-default mr-2">
                                        <img src={Chart} alt="" />
                                    </button>
                                </Link>
                                {loginBtn}
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="modal fade" id="FilterModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="FilterModalLabel">Filter</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <strong>Colors</strong><br></br>
                                <div className="row">
                                    <button id="1" name="color" className="btn btn-danger rounded-circle ml-3" onClick={this.clickOptHandler}>R</button>
                                    <button id="2" name="color" className="btn btn-success rounded-circle ml-2" onClick={this.clickOptHandler}>G</button>
                                    <button id="3" name="color" className="btn btn-primary rounded-circle ml-2" onClick={this.clickOptHandler}>B</button>
                                    <button id="4" name="color" className="btn btn-dark rounded-circle ml-2" onClick={this.clickOptHandler}>K</button>
                                </div>
                                <div className="dropdown-divider"></div>
                                <strong>Sizes</strong><br></br>
                                <div className="row ml-2">
                                    {
                                        fetchSize && fetchSize.map(({ id, size_name }) => {
                                            return (
                                                <>
                                                    <button id={id} name="size" className="btn btn-outline-secondary mr-2 mb-1" onClick={this.clickOptHandler}>{size_name}</button>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div className="dropdown-divider"></div>
                                <strong>Category</strong><br></br>
                                <button id="1" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>T-shirt</button>
                                <button id="2" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>Short</button>
                                <button id="3" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>Jacket</button>
                                <button id="4" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>Pants</button>
                                <button id="5" name="category" className="btn btn-outline-secondary ml-2" onClick={this.clickOptHandler}>Shoes</button>
                                <div className="dropdown-divider"></div>
                                <strong>Brand</strong>
                                <select className="text-muted" style={{ border: "none" }}>
                                    <option disabled selected hidden>Zalora, Adidas, MiHoYo and many More</option>
                                    <option>Zalora Cloth</option>
                                    <option>Adidas</option>
                                    <option>MiHoYo</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary rounded-pill mr-1" style={{ width: "200px" }} data-dismiss="modal" >Discard</button>
                                <button type="button" className="btn btn-danger rounded-pill ml-auto ml-1" style={{ width: "200px" }} onClick={this.submitFilterHandler}>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth,
    };
};

export default connect(mapStateToProps)(Navbar);
