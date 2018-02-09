import React, { Component } from 'react';
import logo from './logo.svg';
import TopBrandsContainer from './components/top-brands-container/top-brands-container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test react title.</h1>
        </header>
        <p className="App-intro">
            <TopBrandsContainer title="Top Brands Goes Here."></TopBrandsContainer>
        </p>
      </div>
    );
  }
}

export default App;