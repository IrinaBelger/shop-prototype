import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/search';
import NavMenu from '../../components/menu';
import Card from '../../components/card';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_visible: false,
            toggle_open: false
        };
    }
    openSearch() {
        this.setState({
            search_visible:!this.state.search_visible
        });
    }
    render() {
        const searchClass = this.state.search_visible ? "open" : "";
        return (
            <div className="header">
                <Card  items={this.props.items}/>
                <NavMenu />
                <Search onClick={ () => this.openSearch() }
                        className={searchClass}/>
            </div>
        );
    }

}
export default connect(
    state => ({
        items: state.basketReducer.items
    }),
    dispatch => ({
    })
)(Header);