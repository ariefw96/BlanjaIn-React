import React, { Component } from 'react'
import ProductCategory from '../../components/body/productCategory'
import Navbar from '../../components/navbar'

export class Category extends Component {
    render() {
        const {location} = this.props;
        // console.log(location.search)
        return (
            <>
                <Navbar />
                <ProductCategory match title='Search result' ctg={location.search}/>
            </>
        )
    }
}

export default Category
