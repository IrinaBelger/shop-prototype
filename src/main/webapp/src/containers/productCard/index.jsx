import React, {Component} from 'react';
import {connect} from 'react-redux';
import DetailCard from '../../components/detailCard';
import DrawerRight from '../../components/drawer';
import {setProduct, deleteProduct, saveProduct, editProduct} from '../../actions/productActions'
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
        this.setState({
            openDrawer: !this.state.openDrawer,
            disableType: true
        });
    }

    setSelectedType(event, index, selectedValue) {
        if (!(selectedValue === null)) {
            let selectedType = this.props.types.find(function (el) {
                return el.id == selectedValue;
            });
            this.props.onSetType(selectedType);
            this.setState({
                disableType: false,
                product: {
                    productTypeId: selectedValue
                }
            });
        }
    }

    setSelectedCategory(selectedValue) {
        this.setState({
            disableType: false
        });
        this.props.onSetCategory(selectedValue);
    }

    getTypesByCategoryId(event, index, category) {
        if (!(category === null)) {
            let selectedValue = this.props.categoryList.find(function (el) {
                return el.id == category;
            });
            this.setSelectedCategory(selectedValue);
        }
    }

    onSave() {
        if (!(this.state.product.model === '' ||
                this.state.product.price === '' ||
                this.state.product.description === '' ||
                this.state.product.productTypeId === 0)) {
            this.props.onEditProduct(this.props.product.id, this.state.product,this.props.editedProduct);
            this.setState({
                openDrawer: false,
                disableType: true,
                product: {
                    model: '',
                    description: '',
                    price: '',
                    productTypeId: 0
                }
            });
        }

    }

    onChangeModel(event, value) {
        this.setState({
            disableType: false,
            product: {
                model: value
            }
        });
    }

    onChangeDescription(event, value) {
        this.setState({
            disableType: false,
            product: {
                description: value
            }
        });
    }

    onChangePrice(event, value) {
        this.setState({
            disableType: false,
            product: {
                price: value
            }
        });
    }


    getProduct(productId) {
        this.props.onSetProduct(productId);
    }

    addProductToBasket() {
        if (!this.props.productsInBasket.includes(this.props.product)) {
            this.props.onAddProductToBasket(this.props.product);
        }
    }

    deleteProduct() {
        let productCopy = this.props.product;
        this.props.deleteProduct(this.props.product.id,productCopy)
        this.navigateToPage();
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
        active_type: state.categoryReducer.active_type,
        editedProduct: state.productReducer.editedProduct
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
        deleteProduct: (productId, product) => {
            dispatch(deleteProduct(productId, product))
        },
        onGetTypesByCategoryId: (categoryId) => {
            dispatch(getTypesByCategoryId(categoryId));
        },
        onGetCategories: () => {
            dispatch(getCategories());
        },
        onSetType: (type) => {
            dispatch(setType(type));
        },
        onSetCategory: (category) => {
            dispatch(setCategory(category));
            dispatch(getTypesByCategoryId(category.id));
        },
        onSaveProduct: (product) => {
            dispatch(saveProduct(product))
        },
        onEditProduct: (product_id, product, editedProduct) => {
            dispatch(editProduct(product_id, product));
            dispatch(updateProductFromBasket(editedProduct));
            dispatch(setProduct(editedProduct));
        }
    })
)(ProductCard);