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
        axios.get('http://localhost:8080/product-category/map',
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
                    {
                        Object.keys(this.state.categories).map((c) =>
                            <ListItem primaryText={c} key={c}
                                      initiallyOpen={false} primaryTogglesNestedList={this.state.categories[c]}
                                      nestedItems={this.state.categories[c].map(p=> <ListItem
                                                                      key={p.id}
                                                                      primaryText={p.name}
                                                                    />)}

                            />)
                    }
                </List>
            </div>
        );
    }
}

export default ListView;