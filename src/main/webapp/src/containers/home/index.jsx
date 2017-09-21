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
        this.props.addProductToBasket(product);
    }
    render() {
        return (
            <Products products={this.props.products}
                      addProductToBasket={ (e) => {this.addProductToBasket(e)  }}/>
            //
            // <DetailCard />
        );
    }
}
export default connect(
    state => ({
        products: state.productReducer.products
    }),
    dispatch => ({
        addProductToBasket: (product) => {
            dispatch(addProductToBasket(product));
        }
    })
)(Home);

