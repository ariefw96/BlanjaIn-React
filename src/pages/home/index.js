import React, { Component } from 'react';
import Carousell from '../../components/body/carousell';
import Category from '../../components/body/category';
import Product from '../../components/body/product/index.js';
import Navbar from '../../components/navbar';



class Home extends Component {
    render() {
        const {match, location, history} = this.props;
        console.log(match, location, history)
        return(
            <>
                <Navbar />
                <Carousell />
                <Category />
                <Product title='New' url="?new=desc" caption='You’ve never seen it before!' />
                <Product title='Popular' url="?popular=desc" caption='Find clothes that are trending recently'/>
                <div className="mt-5"></div>
            </>
        )
    }
}


export default Home;