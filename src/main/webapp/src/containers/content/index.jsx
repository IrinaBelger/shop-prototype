import React, { Component } from 'react';
import { connect } from 'react-redux';

import IconButton from '../../components/button';
import Home from '../home'
import BasketPage from '../basket'
import { Route, Switch } from 'react-router-dom'


class Content extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/basket' component={BasketPage}/>
                </Switch>
                <IconButton />
            </div>
        );
    }

}
export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(Content);