import React, {Component} from 'react';
import {connect} from 'react-redux';
import DetailCard from '../../components/detailCard';
import axios from 'axios';
import DrawerRight from '../../components/drawer';
import {setProduct, deleteProduct, saveProduct} from '../../actions/productActions'
import {addProductToBasket, updateProductFromBasket} from '../../actions/basketActions'
import {getCategories, getTypesByCategoryId, setType, setCategory} from '../../actions/categoryActions'


class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.getProduct(props.match.params.productId);
        this.state = {
            openDrawer: false,
            disableType: true,
            product: {
                model: '',
                description: '',
                price: '',
                productTypeId: 0
            }
        };
        this.getCategories();
    }

    navigateToPage = () => {
        this.context.router.push('/')
    };

    openDrawer() {
        console.log('123');
        this.setState({
            openDrawer: !this.state.openDrawer,
            disableType: true
        });
    }

    getCategories() {
        axios.get('http://localhost:8080/product-category',
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onGetCategories(response.data);
        });
    }

    setSelectedType(event, index, selectedValue) {
        if (!(selectedValue === null)) {
            let selectedType = this.props.types.find(function (el) {
                return el.id == selectedValue;
            });
            this.props.onSetType(selectedType);
            this.setState({
                openDrawer: this.state.openDrawer,
                disableType: false,
                product: {
                    model: this.state.product.model,
                    description: this.state.product.description,
                    price: this.state.product.price,
                    productTypeId: selectedValue
                }
            });
        }
    }

    setSelectedCategory(selectedValue) {
        this.setState({
            openDrawer: this.state.openDrawer,
            disableType: false,
            product: this.state.product
        });
        this.props.onSetCategory(selectedValue);
    }

    getTypesByCategoryId(event, index, category) {
        if (!(category === null)) {
            let selectedValue = this.props.categoryList.find(function (el) {
                return el.id == category;
            });
            this.setSelectedCategory(selectedValue);
            axios.get('http://localhost:8080/product-type/' + category,
                {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
                this.props.onGetTypesByCategoryId(response.data);
            });
        }
    }

    onSave() {
        if (!(this.state.product.model === '' ||
                this.state.product.price === '' ||
                this.state.product.description === '' ||
                this.state.product.productTypeId === 0)) {
            let self = this;
            axios({
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                url: 'http://localhost:8080/product/' + this.props.product.id,
                data: this.state.product
            })
            .then(response => {
                console.log(response);
                let copyOldProduct = self.props.product;
                self.props.onUpdateProductFromBasket(response.data);
                self.props.onSetProduct(response.data);
                self.setState({
                    openDrawer: false,
                    disableType: true,
                    product: {
                        model: '',
                        description: '',
                        price: '',
                        productTypeId: 0
                    }
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    }

    onChangeModel(event, value) {
        this.setState({
            openDrawer: this.state.openDrawer,
            disableType: false,
            product: {
                model: value,
                description: this.state.product.description,
                price: this.state.product.price,
                productTypeId: this.state.product.productTypeId
            }
        });
    }

    onChangeDescription(event, value) {
        this.setState({
            openDrawer: this.state.openDrawer,
            disableType: false,
            product: {
                model: this.state.product.model,
                description: value,
                price: this.state.product.price,
                productTypeId: this.state.product.productTypeId
            }
        });
    }

    onChangePrice(event, value) {
        this.setState({
            openDrawer: this.state.openDrawer,
            disableType: false,
            product: {
                model: this.state.product.model,
                description: this.state.product.description,
                price: value,
                productTypeId: this.state.product.productTypeId
            }
        });
    }


    getProduct(productId) {
        axios.get('http://localhost:8080/product/getById/' + productId,
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onSetProduct(response.data);
        });
    }

    addProductToBasket() {
        if (!this.props.productsInBasket.includes(this.props.product)) {
            this.props.onAddProductToBasket(this.props.product);
        }
    }

    deleteProduct() {
        let self = this;
        let productCopy = this.props.product;
        axios.delete('http://localhost:8080/product/' + this.props.product.id,
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            self.navigateToPage();
            this.props.deleteProduct(productCopy)
        });
    }

    editProduct() {
        this.getTypesByCategoryId(null, null, this.props.product.productType.productCategory.id);
        this.props.onSetType(this.props.product.productType);
        this.setState({
            openDrawer: true,
            disableType: false,
            product: {
                model: this.props.product.model,
                description: this.props.product.description,
                price: this.props.product.price,
                productTypeId: this.props.product.productType.id
            }
        });
    }

    render() {
        return (
            <div>
                <DetailCard product={this.props.product}
                            delete={() => this.deleteProduct()}
                            edit={() => this.editProduct()}
                            addProductToBasket={() => this.addProductToBasket()}/>
                <DrawerRight
                    title={'Edit product'}
                    active_type={'EDIT_PRODUCT'}
                    model={this.state.product.model}
                    price={this.state.product.price}
                    description={this.state.product.description}
                    selectedCategory={this.props.category}
                    selectedType={this.props.type}
                    onChangeModel={(event, value) => this.onChangeModel(event, value)}
                    onChangeDescription={(event, value) => this.onChangeDescription(event, value)}
                    onChangePrice={(event, value) => this.onChangePrice(event, value)}
                    onChangeCategory={(event, index, selectedValue) => this.getTypesByCategoryId(event, index, selectedValue)}
                    onChangeType={(event, index, selectedValue) => this.setSelectedType(event, index, selectedValue)}
                    types={this.props.types}
                    onSave={() => this.onSave()}
                    categoryList={this.props.categoryList}
                    openDrawer={this.state.openDrawer}
                    onClose={() => this.openDrawer()}/>
            </div>
        );
    }
}

ProductCard.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(
    state => ({
        product: state.productReducer.product,
        productsInBasket: state.basketReducer.items,
        categoryList: state.categoryReducer.categoryList,
        types: state.categoryReducer.types,
        category: state.categoryReducer.category,
        type: state.categoryReducer.type,
        active_type: state.categoryReducer.active_type
    }),
    dispatch => ({
        onSetProduct: (product) => {
            dispatch(setProduct(product));
        },
        onAddProductToBasket: (product) => {
            dispatch(addProductToBasket(product))
        },
        onUpdateProductFromBasket: (product) => {
            dispatch(updateProductFromBasket(product))
        },
        deleteProduct: (product) => {
            dispatch(deleteProduct(product))
        },
        onGetTypesByCategoryId: (types) => {
            dispatch(getTypesByCategoryId(types));
        },
        onGetCategories: (categoryList) => {
            dispatch(getCategories(categoryList));
        },
        onSetType: (type) => {
            dispatch(setType(type));
        },
        onSetCategory: (category) => {
            dispatch(setCategory(category));
        },
        onSaveProduct: (product) => {
            dispatch(saveProduct(product))
        }
    })
)(ProductCard);