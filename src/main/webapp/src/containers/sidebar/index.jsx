import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListView from '../../components/listView';
import {fetchCategories, setActiveType, setActiveCategory, getCategories, clearActiveType, createCategory} from '../../actions/categoryActions'
import {fetchProducts, clearProducts} from '../../actions/productActions'
import DrawerRight from '../../components/drawer';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false,
            category: {
                name: '',
                types: ''
            }
        };
        this.props.onFetchCategories();
    }

    navigateToPage = () => {
        this.context.router.push('/')
    };

    openDrawer() {
        this.setState({
            openDrawer: !this.state.openDrawer
        });
    }

    onSelectType(id) {
        this.props.onSetActiveType(id);
        this.navigateToPage();
    }

    onSelectCategory(category){
       let active_category =  this.props.categoryList.find(function(element, index, array){
            if(element.name === category){
                return element;
            }
        });
        this.props.onSetActiveCategory(active_category)
    }
    onAddCategory() {
        this.setState({
            openDrawer: true
        });
    }

    onChangeCategoryName(event, value) {
        this.setState({
            openDrawer: this.state.openDrawer,
            category: {
                name: value,
                types: this.state.category.types
            }
        });
    }

    onChangeTypesName(event, value) {
        this.setState({
            category: {
                name: this.state.category.name,
                types: value
            }
        });
    }

    onSave() {
        if (!(this.state.category.name === '' ||
                this.state.category.types === '')) {
            this.props.onCreateCategory(this.state.category);
            this.setState({
                openDrawer: false,
                category: {
                    name: '',
                    types: ''
                }
            });
            this.navigateToPage();
        }
    }

    render() {
        return (
            <div className="sidebar">
                <ListView categories={this.props.categories}
                          active_type={this.props.active_type}
                          selectCategory={(e) => {this.onSelectCategory(e)}}
                          onAddCategory={() => {
                              this.onAddCategory()
                          }}
                          selectType={(e) => this.onSelectType(e)}/>
                <DrawerRight
                    title={'Create new category'}
                    active_type={'ADD_CATEGORY'}
                    openDrawer={this.state.openDrawer}
                    onClose={() => this.openDrawer()}
                    onChangeCategoryName={(event, value) => this.onChangeCategoryName(event, value)}
                    onChangeTypesName={(event, value) => this.onChangeTypesName(event, value)}
                    onSave={() => this.onSave()}/>
            </div>
        );
    }
}

SideBar.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(
    state => ({
        categories: state.categoryReducer.categories,
        active_type: state.categoryReducer.active_type,
        active_category: state.categoryReducer.active_category,
        categoryList: state.categoryReducer.categoryList
    }),
    dispatch => ({
        onFetchCategories: () => {
            dispatch(fetchCategories());
            dispatch(getCategories());
        },
        onCreateCategory: (category) => {
            dispatch(createCategory(category));
            dispatch(fetchCategories());
        },
        onGetCategoryList: () => {
            dispatch(getCategories());
        },
        onSetActiveType: (active_type) => {
            dispatch(setActiveType(active_type));
        },
        onFetchProducts: (id) => {
            dispatch(fetchProducts(id));
        },
        onSetActiveCategory: (active_category) => {
            dispatch(clearActiveType([]));
            dispatch(clearProducts([]));
            dispatch(setActiveCategory(active_category));
        },
        onClearActiveType: (active_type) => {
            dispatch(clearActiveType(active_type));
            dispatch(fetchProducts(active_type));
        },
        onClearProducts: (products) => {
            dispatch(clearProducts(products));
        }

    })
)(SideBar);