import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {
    fetchCategories,
    deleteActiveCategory,
    deleteActiveType,
    editActiveCategory,
    editActiveType,
    getCategories
} from '../../actions/categoryActions'
import  {clearProducts} from '../../actions/productActions'
import DrawerRight from '../../components/drawer';

import Search from '../../components/search';
import NavMenu from '../../components/menu';
import Card from '../../components/card';
import {deleteProductFromBasket} from "../../actions/basketActions";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_visible: false,
            toggle_open: false,
            active_type: '',
            openDrawer: false,
            title: '',
            categoryName: '',
            typeName: ''
        };
    }

    openDrawer() {
        this.setState({
            search_visible: this.state.search_visible,
            toggle_open: this.state.toggle_open,
            active_type: this.state.active_type,
            openDrawer: !this.state.openDrawer,
            title: this.state.title,
            categoryName: this.state.categoryName,
            typeName: this.state.typeName
        });
    }

    openSearch() {
        this.setState({
            search_visible: !this.state.search_visible
        });
    }

    editActive(event, value) {
        if (this.props.active_type === {} && this.props.active_category === {}) {
            //TODO modal open
        } else {
            if (this.props.active_type === {} && !(this.props.active_category === {})) {
                //TODO edit category
                this.setState({
                    search_visible: this.state.search_visible,
                    toggle_open: this.state.toggle_open,
                    active_type: 'EDIT_CATEGORY',
                    openDrawer: true,
                    title: 'Edit category',
                    categoryName: this.state.categoryName,
                    typeName: this.state.typeName
                });

            } else {
                if (!(this.props.active_type === {}) && !(this.props.active_category === {})) {
                    //TODO edit type
                    this.setState({
                        search_visible: this.state.search_visible,
                        toggle_open: this.state.toggle_open,
                        active_type: 'EDIT_TYPE',
                        openDrawer: true,
                        title: 'Edit type',
                        categoryName: this.state.categoryName,
                        typeName: this.state.typeName
                    });


                }
            }

        }
    }

    deleteActive(event, value) {
        if (Object.keys(this.props.active_type).length === 0  && Object.keys(this.props.active_category).length === 0) {
            //TODO modal open
        } else {
            if (Object.keys(this.props.active_type).length === 0 && !(Object.keys(this.props.active_category).length === 0)) {
                axios.delete('http://localhost:8080/product-category/' + this.props.active_category.id,
                    {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
                    this.props.onDeleteActiveCategory(value);
                    this.fetchCategories();
                    this.props.onClearProducts([]);
                    this.onCheckProductsInBasketAfterDelete();
                });
            } else {
                if (!(Object.keys(this.props.active_type).length === 0) && !(Object.keys(this.props.active_category).length === 0)) {
                    axios.delete('http://localhost:8080/product-type/' + this.props.active_type.id,
                        {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
                        this.props.onDeleteActiveType(value);
                        this.fetchCategories();
                        this.props.onClearProducts([]);
                        this.onCheckProductsInBasketAfterDelete();
                    });
                }
            }

        }


    }

    fetchCategories() {
        axios.get('http://localhost:8080/product-category/map',
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onFetchCategories(response.data);
        });
    }

    getCategories() {
        axios.get('http://localhost:8080/product-category',
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onGetCategories(response.data);
        });
    }

    onSetNewValue(event, value) {
        if (!(this.state.categoryName === '' && this.state.typeName === '')) {
            switch (this.state.active_type) {
                case 'EDIT_TYPE':
                    this.setState({
                        search_visible: this.state.search_visible,
                        toggle_open: this.state.toggle_open,
                        active_type: this.state.active_type,
                        openDrawer: this.state.openDrawer,
                        title: this.state.title,
                        categoryName: this.state.categoryName,
                        typeName: value
                    });

                case 'EDIT_CATEGORY':
                    this.setState({
                        search_visible: this.state.search_visible,
                        toggle_open: this.state.toggle_open,
                        active_type: this.state.active_type,
                        openDrawer: this.state.openDrawer,
                        title: this.state.title,
                        categoryName: value,
                        typeName: this.state.typeName
                    });

            }
        }
    }

    onCheckProductsInBasketAfterDelete(){
        let self = this;
        this.props.items.forEach(function(item, i, arr){
            axios.get('http://localhost:8080/product/getProductStatus/'+item.id,
                {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
                if(!response.data){
                    self.props.onDeleteProductFromBasket(item);
                }
            });
        });

    }

    onSave() {
        if (!(this.state.categoryName === '' && this.state.typeName === '')) {
            let self = this;
            switch (this.state.active_type) {
                case 'EDIT_TYPE':
                    axios({
                        method: 'put',
                        headers: {'Content-Type': 'application/json'},
                        url: 'http://localhost:8080/product-type',
                        data: {
                            id: this.props.active_type.id,
                            name: this.state.typeName
                        }
                    })
                        .then(response => {
                            this.props.onEditActiveType(this.state.typeName);
                            this.fetchCategories();
                            self.setState({
                                search_visible: false,
                                toggle_open: false,
                                active_type: '',
                                openDrawer: false,
                                title: '',
                                categoryName: '',
                                typeName: ''
                            });
                        })
                        .catch(function (error) {
                            console.log(error);
                        });


                case 'EDIT_CATEGORY':
                    axios({
                        method: 'put',
                        headers: {'Content-Type': 'application/json'},
                        url: 'http://localhost:8080/product-category',
                        data: {
                            id: this.props.active_category.id,
                            name: this.state.categoryName
                        }
                    }).then(response => {
                        this.props.onEditActiveCategory(this.state.categoryName);
                        this.fetchCategories();
                        this.getCategories();
                        self.setState({
                            search_visible: false,
                            toggle_open: false,
                            active_type: '',
                            openDrawer: false,
                            title: '',
                            categoryName: '',
                            typeName: ''
                        });
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
            }
        }
    }

    render() {
        const searchClass = this.state.search_visible ? "open" : "";
        return (
            <div className="header">
                <Card items={this.props.items}/>
                <NavMenu delete={() => this.deleteActive()}
                         edit={() => this.editActive()}/>
                <Search onClick={() => this.openSearch()}
                        className={searchClass}/>
                <DrawerRight
                    title={this.state.title}
                    active_type={this.state.active_type}
                    openDrawer={this.state.openDrawer}
                    onClose={() => this.openDrawer()}
                    onChangeName={(event, value) => this.onSetNewValue(event, value)}
                    onSave={() => this.onSave()}/>
            </div>
        );
    }

}

export default connect(
    state => ({
        items: state.basketReducer.items,
        active_type: state.categoryReducer.active_type,
        active_category: state.categoryReducer.active_category,
    }),
    dispatch => ({
        onFetchCategories: (categories) => {
            dispatch(fetchCategories(categories));
        },
        onGetCategories: (categoryList) => {
            dispatch(getCategories(categoryList));
        },
        onEditActiveType: (active_type) => {
            dispatch(editActiveType(active_type));
        },
        onEditActiveCategory: (active_category) => {
            dispatch(editActiveCategory(active_category));
        },
        onDeleteActiveType: (active_type) => {
            dispatch(deleteActiveType(active_type));
        },
        onDeleteActiveCategory: (active_category) => {
            dispatch(deleteActiveCategory(active_category));
        },
        onClearProducts: (products) => {
            dispatch(clearProducts(products));
        },
        onDeleteProductFromBasket: (products) => {
            dispatch(deleteProductFromBasket(products));
        }

    })
)(Header);