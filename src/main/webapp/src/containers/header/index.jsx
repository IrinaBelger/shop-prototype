import React, {Component} from 'react';
import {connect} from 'react-redux';
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
import NavMenu from '../../components/menu';
import Card from '../../components/card';
import {deleteProductFromBasket} from "../../actions/basketActions";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if (this.props.active_type===null || this.props.active_category===null || Object.keys(this.props.active_type).length === 0  && Object.keys(this.props.active_category).length === 0) {
        } else {
            if (Object.keys(this.props.active_type).length === 0 && !(Object.keys(this.props.active_category).length === 0)) {
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
                if (!(Object.keys(this.props.active_type).length === 0) && !(Object.keys(this.props.active_category).length === 0)) {
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
        if (this.props.active_type===null || this.props.active_category===null || Object.keys(this.props.active_type).length === 0  && Object.keys(this.props.active_category).length === 0) {
            //TODO modal open
        } else {
            if (Object.keys(this.props.active_type).length === 0 && !(Object.keys(this.props.active_category).length === 0)) {
                this.props.onDeleteActiveCategory(this.props.active_category.id, value);
                this.onCheckProductsInBasketAfterDelete();
            } else {
                if (!(Object.keys(this.props.active_type).length === 0) && !(Object.keys(this.props.active_category).length === 0)) {
                    this.props.onDeleteActiveType(this.props.active_type.id, value);
                    this.onCheckProductsInBasketAfterDelete();
                }
            }
        }
    }

    onSetNewValue(event, value) {
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
                    break;
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
                    break;

            }
    }

    onCheckProductsInBasketAfterDelete(){
        let self = this;
        this.props.items.forEach(function(item, i, arr){
            self.props.onDeleteProductFromBasket(item.id, item);
        });
    }

    onSave() {
        if (!(this.state.categoryName === '' && this.state.typeName === '')) {
            switch (this.state.active_type) {
                case 'EDIT_TYPE':
                    this.props.onEditActiveType(this.props.active_type.id, this.state.typeName);
                    this.setState({
                        search_visible: false,
                        toggle_open: false,
                        active_type: '',
                        openDrawer: false,
                        title: '',
                        categoryName: '',
                        typeName: ''
                    });
                    break;

                case 'EDIT_CATEGORY':
                    this.props.onEditActiveCategory(this.props.active_category.id, this.state.categoryName);
                    this.setState({
                        search_visible: false,
                        toggle_open: false,
                        active_type: '',
                        openDrawer: false,
                        title: '',
                        categoryName: '',
                        typeName: ''
                    });
                    break;
            }
        }
    }

    render() {
        return (
            <div className="header">
                <Card items={this.props.items}/>
                <NavMenu delete={() => this.deleteActive()}
                         edit={() => this.editActive()}/>
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
        onFetchCategories: () => {
            dispatch(fetchCategories());
        },
        onGetCategories: () => {
            dispatch(getCategories());
        },
        onEditActiveType: (active_type_id, active_type_name) => {
            dispatch(editActiveType(active_type_id, active_type_name));

        },
        onEditActiveCategory: (active_category_id, active_category_name) => {
            dispatch(editActiveCategory(active_category_id, active_category_name));
        },
        onDeleteActiveType: (active_type_id, active_type) => {
            dispatch(deleteActiveType(active_type_id,active_type));
            dispatch(clearProducts([]));
        },
        onDeleteActiveCategory: (active_category_id, active_category) => {
            dispatch(clearProducts([]));
            dispatch(deleteActiveCategory(active_category_id, active_category));

        },
        onClearProducts: (products) => {
            dispatch(clearProducts(products));
        },
        onDeleteProductFromBasket: (id, product) => {
            dispatch(deleteProductFromBasket(id, product));
        }

    })
)(Header);