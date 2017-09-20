import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {List, ListItem} from './../../../node_modules/material-ui/List';

class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isLoading: true
        }

    }

    getCategoriesList() {
        axios.get('http://localhost:8080/product-category',
            {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}}).then(response => {
            this.setCategoriesListState(response);

        });
    }

    // Custom function we'll use to update the component state
    setCategoriesListState(categories) {
        this.setState({
            categories: categories.data
        });
        this.render();
        this.forceUpdate();
    }

    componentWillMount() {
        this.getCategoriesList();
    }

    render() {
        return (
            <div>
                <div className="addProject clearfix">
                    <span>Category</span>
                    <button className="iconButton" onClick={this.state.onClick}>+</button>
                </div>
                <List>
                    {this.state.categories.map(c => <ListItem primaryText={c.name} key={c.id}/>)}
                </List>
            </div>
        );
    }
}

export default ListView;