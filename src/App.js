import React, { Component } from 'react';
import './App.css';
import createHistory from "history/createBrowserHistory";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Survey from './components/Survey';
import Header from './components/Header';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Router history={createHistory}>
                <div>
                    <Route exact path = "/" render={(props) => <Homepage/>} />
                    <Route path="/home" render={(props) => <Homepage/>} />
                    <Route path="/new" render={(props) => <Survey /*prop1 = {variable} prop2 = {variable} */ />} />
                </div>
            </Router>
        </div>

    );
  }
}

export default App;