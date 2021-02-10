import axios from 'axios'
import React, { Component } from 'react'
import TablePivot from '../../../components/body/formUpdatePivot'
import './myproduct.css'

const base_url = process.env.REACT_APP_API_BASE_URL
const config = {
    headers: {
        'x-access-token': 'x '+localStorage.getItem('token')
    }
}

class EditProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            update_id: '',
            product_id: '',
            size_id: '',
            color_id: '',
            condition_id: '',
            qty: '',
        }
    }
  


    componentDidMount = () => {
        console.log(base_url+'product/getPivotId/'+this.props.match.params.id)
        axios.get(base_url+'product/getPivotId/'+this.props.match.params.id, config)
        .then(({data}) => {
            this.setState({
                update_id : data[0].id,
                product_id: data[0].product_id,
                size_id:data[0].size_id,
                color_id: data[0].color_id,
                condition_id: data[0].condition_id,
                qty:data[0].qty

            })
        }).catch((error) => {
            console.log(error)
        })
        
    }

    render() { 
        // console.log(this.props.history)
        const {update_id,product_id,color_id,size_id,condition_id,qty } = this.state
        console.log(this.state)
        return (
            <div className="container p-5">
                <div className="container bckgr">
                    {/* {this.props.history.push} */}
                    <TablePivot update_id={update_id} product_id={product_id} color_id={color_id} size_id={size_id} condition_id={condition_id} qty={qty} history={this.props.history}/>
                </div>

            </div>
        )
    }
}

export default EditProduct
