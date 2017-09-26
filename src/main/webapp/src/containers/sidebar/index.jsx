import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListView from '../../components/listView';
import axios from 'axios';
import {fetchCategories, setActiveType, setActiveCategory, getCategories, clearActiveType} from '../../actions/categoryActions'
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
        this.fetchCategories();
        this.fetchCategoryList();
    }

    navigateToPage = () => {
        this.context.router.push('/')
    };

    fetchCategoryList() {
        axios.get('http://localhost:8080/product-category',
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onGetCategoryList(response.data);
        });
    }

    fetchCategories() {
        axios.get('http://localhost:8080/product-category/map',
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onFetchCategories(response.data);
        });
    }

    openDrawer() {
        this.setState({
            openDrawer: !this.state.openDrawer
        });
    }

    onSelectType(id) {
        let self = this;
        this.props.onSetActiveType(id);
        axios.get('http://localhost:8080/product/' + id,
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onFetchProducts(response.data);
            self.navigateToPage();
        });
    }

    onSelectCategory(category){
       let active_category =  this.props.categoryList.find(function(element, index, array){
            if(element.name === category){
                return element;
            }
        });
        this.props.onClearActiveType({});
        this.props.onClearProducts([]);
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
            openDrawer: this.state.openDrawer,
            category: {
                name: this.state.category.name,
                types: value
            }
        });
    }

    onSave() {
        if (!(this.state.category.name === '' ||
                this.state.category.types === '')) {
            let self = this;
            axios({
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                url: 'http://localhost:8080/product-category',
                data: this.state.category
            })
            .then(response => {
                console.log(response);
                self.setState({
                    openDrawer: false,
                    category: {
                        name: '',
                        types: ''
                    }
                });
                self.fetchCategories();
                self.fetchCategoryList();
                self.navigateToPage();
            })
            .catch(function (error) {
                console.log(error);
            });
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
        onFetchCategories: (categories) => {
            dispatch(fetchCategories(categories));
        },
        onGetCategoryList: (categoryList) => {
            dispatch(getCategories(categoryList));
        },
        onSetActiveType: (active_type) => {
            dispatch(setActiveType(active_type));
        },
        onFetchProducts: (products) => {
            dispatch(fetchProducts(products));
        },
        onSetActiveCategory: (active_category) => {
            dispatch(setActiveCategory(active_category));
        },
        onClearActiveType: (active_type) => {
            dispatch(clearActiveType(active_type));
        },
        onClearProducts: (products) => {
            dispatch(clearProducts(products));
        }

    })
)(SideBar);