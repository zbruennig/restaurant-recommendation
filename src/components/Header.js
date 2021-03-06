import React, { Component } from 'react'

import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

class Header extends Component {
  constructor (props) {
    super()
  }

  render () {
    let backgroundStyle = {backgroundColor: '#0c0a22'}
    let colorStyle = {color: '#efefef'}
    let activeStyle = {color: '#edcd54'}

    return (
      <header style={backgroundStyle}>
        <nav>
          <Router history={createHistory}>
            <div>
              <ul className='list-inline'>
                <li className='routing-button'>
                  <NavLink to={'/home'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/home')} activeStyle={activeStyle} >Home
                                    </NavLink>
                </li>
                <li className='routing-button'>
                  <NavLink to={'/new'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/new')} activeStyle={activeStyle} >Profile
                                    </NavLink>
                </li>
                <li className='routing-button'>
                  <NavLink to={'/order'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/order')} activeStyle={activeStyle}>Order
                                    </NavLink>
                </li>
                <li className='routing-button'>
                  <NavLink to={'/restaurant'} className='navbar-brand' style={colorStyle} onClick={() => createHistory.push('/restaurant')} activeStyle={activeStyle}>Restaurant
                                    </NavLink>
                </li>
              </ul>
            </div>
          </Router>

        </nav>
      </header>
    )
  }
}

export default Header
