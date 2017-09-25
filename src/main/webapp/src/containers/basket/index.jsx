import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basket from '../../components/basket';
import IconButton from '../../components/button';
import {fetchBasket, countCost, deleteProductFromBasket} from '../../actions/basketActions'


class BasketPage extends Component {
    constructor(props) {
        super(props);
        this.props.onFetchBasket();
        this.props.onCountCost();
    }
    deleteProductFromBasket(product){
        this.props.onDeleteProductFromBasket(product);
    }
    render() {
        return (
            <Basket items={this.props.items}
                    cost={this.props.cost}
                    delete={(e) => this.deleteProductFromBasket(e)}/>
        );
    }
}


export default connect(
    state => ({
        items: state.basketReducer.items,
        cost: state.basketReducer.cost
    }),
    dispatch => ({
        onFetchBasket: () => {
            dispatch(fetchBasket());
        },
        onCountCost: () => {
            dispatch(countCost());
        },
        onDeleteProductFromBasket: (product) => {
            dispatch(deleteProductFromBasket(product));
        },
    })
)(BasketPage);