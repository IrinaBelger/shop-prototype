import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailCard from '../../components/detailCard';
import axios from 'axios';
import {setProduct, deleteProduct} from '../../actions/productActions'
import {addProductToBasket} from '../../actions/basketActions'

class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.getProduct(props.match.params.productId);
    }

    navigateToPage = () => {
        this.context.router.push('/')
    };

    getProduct(productId) {
        axios.get('http://localhost:8080/product/getById/'+productId,
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onSetProduct(response.data);
        });
    }

    addProductToBasket(){
        this.props.addProductToBasket(this.props.product);
    }
    deleteProduct(){
        let self = this;
        let productCopy = this.props.product;
        axios.delete('http://localhost:8080/product/'+this.props.product.id,
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            self.navigateToPage();
            this.props.deleteProduct(productCopy)
        });
    }
    editProduct(){

    }
    render() {
        return (
            <DetailCard product={this.props.product}
            delete={() => this.deleteProduct()}
            edit={() => this.editProduct}
            addProductToBasket={()=>this.addProductToBasket()}/>
        );
    }
}

ProductCard.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(
    state => ({
        product: state.productReducer.product
    }),
    dispatch => ({
        onSetProduct: (product) => {
            dispatch(setProduct(product));
        },
        addProductToBasket:(product) =>{
            dispatch(addProductToBasket(product))
        },
        deleteProduct:(product) =>{
            dispatch(deleteProduct(product))
        }
    })
)(ProductCard);