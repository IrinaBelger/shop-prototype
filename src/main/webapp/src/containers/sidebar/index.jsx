import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/card';


class SideBar extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="sidebar">
                <Card  />
            </div>
        );
    }
}
export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(SideBar);