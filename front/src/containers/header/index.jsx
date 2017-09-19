import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/search';
import NavMenu from '../../components/menu';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_visible: false
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
                <Search onClick={ () => this.openSearch() }
                        className={searchClass}/>
                <NavMenu />
            </div>
        );
    }

}
export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(Header);