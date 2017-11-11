import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import createHistory from "history/createBrowserHistory"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Survey from './components/Survey'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Survey/>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
