import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import IconButton from '../../components/button';
import Home from '../home';
import DrawerRight from '../../components/drawer';
import BasketPage from '../basket';
import ProductCard from '../productCard';
import ContentAdd from './../../../node_modules/material-ui/svg-icons/content/add';
import {getCategories, getTypesByCategoryId, setType, setCategory} from '../../actions/categoryActions'
import {
    saveProduct
} from '../../actions/productActions'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false,
            disableType: true,
            disabledButton: true,
            product: {
                model: '',
                description: '',
                price: '',
                productTypeId: 0
            }
        };
        this.props.onGetCategories();
    }

    openDrawer() {
        this.setState({
            openDrawer: !this.state.openDrawer,
            disableType: true
        });
    }

    setSelectedCategory(selectedValue) {
        this.setState({
            disableType: false
        });
        this.props.onSetCategory(selectedValue);
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

    getTypesByCategoryId(event, index, categoryId) {
        if (!(categoryId === null)) {
            let selectedValue = this.props.categoryList.find(function (el) {
                return el.id == categoryId;
            });
            this.setSelectedCategory(selectedValue);
        }
    }

    onSave() {
        if (!(this.state.product.model === '' ||
                this.state.product.price === '' ||
                this.state.product.description === '' ||
                this.state.product.productTypeId === 0)) {
            this.onSaveProduct(this.state.product);
            this.setState({
                openDrawer: false,
                disableType: true,
                disabledButton: true,
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

    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/basket' component={BasketPage}/>
                    <Route path='/product/:productId' component={ProductCard}/>
                </Switch>
                <IconButton onClick={() => this.openDrawer()}
                            backgroundColor="#2BB2AC"
                            children={<ContentAdd/>}
                />
                <DrawerRight
                    title={'Create new product'}
                    active_type={'ADD_PRODUCT'}
                    disableType={this.props.newProduct.disableType}
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

export default connect(
    state => ({
        categoryList: state.categoryReducer.categoryList,
        types: state.categoryReducer.types,
        category: state.categoryReducer.category,
        newProduct: state.productReducer.newProduct,
        type: state.categoryReducer.type,
        active_type: state.categoryReducer.active_type
    }),
    dispatch => ({
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
        }
    })
)(Content);