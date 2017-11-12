import React, { Component } from 'react';
import './App.css';
import createHistory from "history/createBrowserHistory";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Survey from './components/Survey';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Order from './components/Order';
import Restaurant from './components/Restaurant';
import RamenBowls from "./components/restaurants/RamenBowls";
import FreeStateBrewery from "./components/restaurants/FreeStateBrewery";
import BurgerStand from "./components/restaurants/BurgerStand";
import TexasRoadHouse from "./components/restaurants/TexasRoadHouse";
import TwentyThirdStreetBrewery from "./components/restaurants/TwentyThirdStreetBrewery";
import AllRestaurants from "./components/restaurants/AllRestaurants";


class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <Router history={createHistory}>
                <div>
                    <Route exact path = "/" render={(props) => <Homepage/>} />
                    <Route path="/home" render={(props) => <Homepage/>} />
                    <Route path="/new" render={(props) => <Survey />} />
                    <Route path="/order" render={(props) => <Order />} />
                    <Route path="/restaurant" render={(props) => <Restaurant /> } />
                    <Route path="/restaurant/ramen-bowls" render={(props) => <RamenBowls/>} />
                    <Route path="/restaurant/free-state-brewery" render={(props) => <FreeStateBrewery/>} />
                    <Route path="/restaurant/burger-stand" render={(props) => <BurgerStand/>} />
                    <Route path="/restaurant/texas-road-house" render={(props) => <TexasRoadHouse/>} />
                    <Route path="/restaurant/23rd-street-brewery" render={(props) => <TwentyThirdStreetBrewery/>} />
                    <Route path="/restaurant/all-menus" render={(props) => <AllRestaurants/>} />

                </div>
            </Router>
        </div>

    );
  }
}

export default App;