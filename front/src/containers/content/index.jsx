import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../../components/products';
import IconButton from '../../components/button';

class Content extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="content">
                <Products />
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