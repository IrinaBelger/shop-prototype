import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import IconButton from '../../components/button';
import Home from '../home';
import DrawerRight from '../../components/drawer';
import BasketPage from '../basket';
import ContentAdd from './../../../node_modules/material-ui/svg-icons/content/add';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false
        };
    }
    openDrawer(){
        console.log('123');
        this.setState({
            openDrawer: !this.state.openDrawer
        });
    }
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/basket' component={BasketPage}/>
                </Switch>
                <IconButton onClick={() => this.openDrawer()}
                            backgroundColor="#2BB2AC"
                            children={<ContentAdd />}
                />
                <DrawerRight openDrawer={this.state.openDrawer}
                             onClose={ () => this.openDrawer() }/>

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