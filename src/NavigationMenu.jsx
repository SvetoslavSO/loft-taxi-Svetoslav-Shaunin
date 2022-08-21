import React from "react";
import logo from './logo.svg';

class NavigationMenu extends React.Component {
  
  isActive = (value) => {
    return 'navigation-button ' + ((value === this.props.activeItem) ? 'active' : '')
  }

  render () {
    const { changeState } = this.props.changeState
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className='navigation-menu'>
          <ul className="navigation-items">
            <li className='navigation-item'>
              <button type="button" className={this.isActive('Map')} onClick={() => changeState("Map")}>Карта</button>
            </li>
            <li className='navigation-item'>
              <button type="button" className={this.isActive('Profile')} onClick={() => changeState("Profile")}>Профиль</button>
            </li>
            <li className='navigation-item'>
              <button type="button" className={this.isActive('Logout')} onClick={() => changeState("Logout")}>Выйти</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavigationMenu