import React, { Component } from 'react';
import '../../css/App.css';
import SideBar from '../sidebar';
import Header from '../header';
import Content from '../content';
class App extends Component {
  render() {
    return (
        <div className="App">
          <SideBar />
          <Header  />
          <Content />
        </div>
    );
  }
}

export default (App);
