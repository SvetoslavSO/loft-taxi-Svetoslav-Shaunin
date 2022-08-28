import React from "react";
import logo from './logo.svg';
import { withAuth } from "./AuthContext";
import {PropTypes} from 'prop-types'

class Nav extends React.Component {
  
  isActive = (value, activeItem) => {
    return 'navigation-button ' + ((value === activeItem) ? 'active' : '')
  }

  unAuth = async (event) => {
    event.preventDefault();
    await this.props.logOut()
    this.props.changeState('Logout')
  }

  render () {
    const changeState = this.props.changeState
    const activeItem = this.props.activeItem
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav onSubmit={this.unAuth} className='navigation-menu'>
          <ul className="navigation-items">
            <li className='navigation-item'>
              <button type="button" className={this.isActive('Map', activeItem)} onClick={() => changeState("Map")}>Карта</button>
            </li>
            <li className='navigation-item'>
              <button type="button" className={this.isActive('Profile', activeItem)} onClick={() => changeState("Profile")}>Профиль</button>
            </li>
            <li className='navigation-item'>
              <button type="submit" className={this.isActive('Logout', activeItem)} onClick={(event) => this.unAuth(event)}>Выйти</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Nav.propTypes = {
  isLoggedIn: PropTypes.bool,
  activeItem: PropTypes.string,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export const NavigationMenu = withAuth(Nav)