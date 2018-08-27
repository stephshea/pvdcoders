import React, { Component } from 'react';
import logo from './images/pvdcoders1.png'
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="logo responsive-img" alt="logo" />
      <Home />
      </div>
    );
  }
}

export default App;
