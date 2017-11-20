import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
