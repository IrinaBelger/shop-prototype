import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListView from '../../components/listView';

class SideBar extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="sidebar">
                <ListView />
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