/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './carousell.css'
import '../../../pages/style.css'
import { Link } from 'react-router-dom';

class Carousell extends Component{

    render(){
        return(
            <div className="container">
                <div className="box">
                <Link>
                    <div className="card">
                        <img className="image" src="https://images.unsplash.com/photo-1503342452485-86b7f54527ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                        <div className="title">
                            <p className="txt-title">Women Trends</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="card">
                        <img className="image" src="https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                        <div className="title">
                            <p className="txt-title">Trends In 2020</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="card">
                        <img className="image" src="https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                        <div className="title">
                            <p className="txt-title">Black Edition</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="card">
                        <img className="image" src="https://www.buyforutoo.store/wp-content/uploads/2020/09/jonathan-francisca-HY-Nr7GQs3k-unsplash-1200x800.jpg" />
                        <div className="title">
                            <p className="txt-title">Casual Edition</p>
                        </div>
                    </div>
                </Link>
            </div>
            </div>
        )
    }
}

export default Carousell;