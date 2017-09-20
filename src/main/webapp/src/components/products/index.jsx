import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardProduct from '../../components/cardProduct';


class Products extends Component {
    render() {

        return (
            <div>
                {
                    this.props.products.map(p =>
                    <CardProduct  product={p}/>)}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        products: state.productsState.products
    }
}

export default connect(mapStateToProps)(Products)
