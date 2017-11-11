import React, { Component } from 'react';

import {BrowserRouter as Router, NavLink} from "react-router-dom";
import createHistory from "history/createBrowserHistory"

class Header extends Component {

    constructor(props){
        super();
    }

    render(){

        let backgroundStyle = {backgroundColor:"#0c0a22"};
        let colorStyle = {color:"#efefef"};
        let activeStyle = {color:"#edcd54"};

        return(
            <header style={backgroundStyle}>
                {/*<div style = {{color:"#fff"}}>This is the header component!</div>*/}
                <nav>
                    <Router history = {createHistory}>
                        <div>
                            <ul className="list-inline">
                                <li className="routing-button">
                                    <NavLink to={"/home"} className= "navbar-brand" style = {colorStyle} onClick =
                                    {() => createHistory.push("/home")} activeStyle = {activeStyle} >Home
                                    </NavLink>
                                </li>
                                <li className="routing-button">
                                    <NavLink to={"/new"} className="navbar-brand" style = {colorStyle} onClick =
                                    {() => createHistory.push("/new")} activeStyle = {activeStyle} >Survey
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Router>

                </nav>
            </header>
        );
    }
}

export default Header;