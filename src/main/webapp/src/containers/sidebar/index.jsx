import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListView from '../../components/listView';
import axios from 'axios';
import {fetchCategories} from '../../actions/categoryActions'
import {fetchProducts} from '../../actions/productActions'
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
    }

    navigateToPage = () => {
        this.context.router.push('/')
    };

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


    selectType(id) {
        let self = this;
        axios.get('http://localhost:8080/product/' + id,
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onFetchProducts(response.data);
            self.navigateToPage();

        });
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
                          onAddCategory={() => {
                              this.onAddCategory()
                          }}
                          selectType={(e) => this.selectType(e)}/>
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
        active_type: state.categoryReducer.active_type
    }),
    dispatch => ({
        onFetchCategories: (categories) => {
            dispatch(fetchCategories(categories));
        },
        onFetchProducts: (products) => {
            dispatch(fetchProducts(products));
        }
    })
)(SideBar);