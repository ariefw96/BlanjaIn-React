import React, { Component } from 'react'
import './category.css'
import '../../../pages/style.css'
import { Link } from 'react-router-dom';
import { Jacket, Pants, Shoes, Short, Tshirt } from '../../../assets';

class Category extends Component{

    render(){   
        console.log(this.props.ctg)
        
        return(
            <div className="container mt-5">
                <h1>Category</h1>
                <small className="text-muted">What are you currently looking for</small>

                <div className="row d-flex justify-content-center">
                    <Link 
                    className="col-lg col-md col-sm col ml-0 mr-3 d-flex justify-content-center align-items-center" 
                    id="tshrit"
                    to={{
                        pathname:'/products',
                        search: "?category=1"
                        }}>
                        <div className="position-relative">
                            <img src={Tshirt} height="146px" width="116px" alt="" />
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">T-Shirt</h2>
                        </div>
                    </Link>
                    <Link href="" className="col-lg col-md col-sm col mr-3 d-flex justify-content-center align-items-center" id="short"  to={{
                        pathname:'/products',
                        search: "?category=2"
                        }}>
                        <div className="position-relative">
                            <img src={Short} height="146px" width="158px" alt="" />
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">Shorts</h2>
                        </div>
                    </Link>
                    <Link href="" className="col-lg col-md col-sm col mr-3 d-flex justify-content-center align-items-center"  id="jacket" to={{
                        pathname:'/products',
                        search: "?category=3"
                        }}>
                        <div className="position-relative">
                            <img src={Jacket} height="131px" width="131px" alt="" />
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">Jacket</h2>
                        </div>
                    </Link>
                    <Link href="" className="col-lg col-md col-sm col mr-3 d-flex justify-content-center align-items-center" id="pants" to={{
                        pathname:'/products',
                        search: "?category=4"
                        }}>
                        <div className="position-relative">
                            <img src={Pants} height="131px" width="76px" alt=""/>
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">Pants</h2>
                        </div>
                    </Link>
                    <Link href="" className="col-lg col-md col-sm col d-flex justify-content-center align-items-center" id="shoes" to={{
                        pathname:'/products',
                        search: "?category=5"
                        }}>
                        <div className="position-relative">
                            <img src={Shoes} height="109px" width="169px" alt="" />
                        </div>
                        <div className="position-absolute">
                            <h2 className="text-white text-weight-bold">Shoes</h2>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Category;