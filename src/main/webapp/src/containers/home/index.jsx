import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../../components/products';
import DetailCard from '../../components/detailCard';
import {addProductToBasket} from '../../actions/basketActions'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    addProductToBasket(product){
        if(!this.props.productsInBasket.includes(product)) {
            this.props.addProductToBasket(product);
        }
    }
    viewProduct(product){

    }
    render() {
        return (
            <div>
                <Products products={this.props.products}
                      addProductToBasket={ (e) => {this.addProductToBasket(e)  }}
                      viewProduct={(e) => {this.viewProduct(e)}}/>
            </div>
        );
    }
}
export default connect(
    state => ({
        products: state.productReducer.products,
        productsInBasket: state.basketReducer.items
    }),
    dispatch => ({
        addProductToBasket: (product) => {
            dispatch(addProductToBasket(product));
        }
    })
)(Home);

