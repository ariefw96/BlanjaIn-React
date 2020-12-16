import React, { Component } from 'react'
import { Star } from '../../../assets'

export default class Rating extends Component {

    

    render() {
        
        const {total_rating} = this.props
        // console.log(total_rating)
        let a = '';
        for(let i = 0; i< total_rating; i++){
            a += i
        }
        let lop = a.split('')
        
        return (
            <div className="d-flex">
                <div className="rate">
                    {/* <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />*/}
                    {lop.map((data) => {
                        return <img src={Star} alt="" />
                    })}
                </div>
                <p className="text-muted rate-num" >({total_rating})</p>
            </div>
        )
    }
}
