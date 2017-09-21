import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListView from '../../components/listView';
import axios from 'axios';
import {fetchCategories} from '../../actions/categoryActions'

class SideBar extends Component {
     constructor(props) {
         super(props);
         this.state = {
             active_type: props.active_type
         };

     }

    componentWillMount() {
        this.getCategoriesList();
    }

    selectType (id) {
        this.props.onSelectType(id);
    }

    getCategoriesList() {
        axios.get('http://localhost:8080/product-category/map',
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.props.onFetchCategories(response.data);
        });
    }

    render() {
        return (
            <div className="sidebar">
                <ListView categories={this.props.categories}
                          active_type={this.props.active_type}
                          onClick={ () => {this.handleToggle('ADD_CATEGORY')  }}
                          selectType={ (e) => this.selectType(e) }/>
            </div>
        );
    }
}
export default connect(
    state => ({
        categories: state.categories,
        active_type: state.active_type
    }),
    dispatch => ({
        onFetchCategories: (categories) => {
            dispatch(fetchCategories(categories));
        },
    })
)(SideBar);