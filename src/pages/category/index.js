import React, { Component } from 'react'
import ProductCategory from '../../components/body/productCategory'
import Navbar from '../../components/navbar'

export class Category extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {location, history} = this.props;
        const {cat_name} = this.props.location.state
        return (
            <>
                <Navbar history={history}/>
                <ProductCategory match title='Category' ctg={location.search} category_name={cat_name}/>
            </>
        )
    }
}

export default Category
