import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

class Restaurant extends Component {
  render () {
    let colorStyle = {color: '#2564ef'}
    let activeStyle = {color: '#ed6358'}

    return (
      <div>
        <h2>Restaurants</h2>

        <nav>
          <Router history={createHistory}>
            <div>
              <ul className='list-inline'>
                <li className='routing-button'>
                  <NavLink to={'/restaurant/ramen-bowls'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/../restaurant/ramen-bowls')} activeStyle={activeStyle} >Ramen Bowls
                                    </NavLink>
                </li>
                <li className='routing-button'>
                  <NavLink to={'/restaurant/texas-road-house'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/../restaurant/texas-road-house')} activeStyle={activeStyle} >Texas Road House
                                    </NavLink>
                </li>
                <li className='routing-button'>
                  <NavLink to={'/restaurant/burger-stand'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/../restaurant/burger-stand')} activeStyle={activeStyle} >Burger Stand
                                    </NavLink>
                </li>
                <li className='routing-button'>
                  <NavLink to={'/restaurant/free-state-brewery'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/../restaurant/free-state-brewery')} activeStyle={activeStyle} >Free State Brewery
                                    </NavLink>
                </li>
                <li className='routing-button'>
                  <NavLink to={'/restaurant/23rd-street-brewery'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/../restaurant/23rd-street-brewery')} activeStyle={activeStyle} >23rd Street Brewery
                                    </NavLink>
                </li>
                <li className='routing-button'>
                  <NavLink to={'/restaurant/all-menus'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/../restaurant/all-menus')} activeStyle={activeStyle} >All Menus
                                    </NavLink>
                </li>
              </ul>
            </div>
          </Router>
        </nav>
      </div>
    )
  }
}

export default Restaurant
