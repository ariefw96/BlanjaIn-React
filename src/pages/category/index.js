import React, { Component } from 'react'
import ProductCategory from '../../components/body/productCategory'
import Navbar from '../../components/navbar'

export class Category extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {location, history} = this.props;
        // console.log(location.search)
        return (
            <>
                <Navbar history={history}/>
                <ProductCategory match title='Search result' ctg={location.search}/>
            </>
        )
    }
}

export default Category
