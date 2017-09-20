import React, { Component } from 'react';
import '../../css/App.css';
import SideBar from '../sidebar';
import Header from '../header';
import Content from '../content';
class App extends Component {
  render() {
    return (
        <div className="App">
          <SideBar list={[1,2,3,4,5]}/>
          <Header  />
          <Content />
        </div>
    );
  }
}

export default (App);
