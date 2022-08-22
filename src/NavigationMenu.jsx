import React from "react";
import logo from './logo.svg';

class NavigationMenu extends React.Component {
  
  isActive = (value, activeItem) => {
    return 'navigation-button ' + ((value === activeItem) ? 'active' : '')
  }

  render () {
    const changeState = this.props.changeState
    const activeItem = this.props.activeItem
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className='navigation-menu'>
          <ul className="navigation-items">
            <li className='navigation-item'>
              <button type="button" className={this.isActive('Map', activeItem)} onClick={() => changeState("Map")}>Карта</button>
            </li>
            <li className='navigation-item'>
              <button type="button" className={this.isActive('Profile', activeItem)} onClick={() => changeState("Profile")}>Профиль</button>
            </li>
            <li className='navigation-item'>
              <button type="button" className={this.isActive('Logout', activeItem)} onClick={() => changeState("Logout")}>Выйти</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavigationMenu