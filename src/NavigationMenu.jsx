import { React, useEffect } from "react";
import logo from './logo.svg';
import {PropTypes} from 'prop-types'
import { setPage, logOut } from './redux/ui/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, logged } from './redux/ui/selector';
import {
  useNavigate,
  Link
} from "react-router-dom";

const NavigationMenu = () => {
  const navigate = useNavigate()
  const loggedIn = useSelector(logged)
  const isActive = (value, activeItem) => {
    return 'navigation-button ' + ((value === activeItem) ? 'active' : '')
  }
  const dispatch = useDispatch()
  const changeState = (namePage) => {
    dispatch(setPage(namePage));
  }
  const page = useSelector(selectPage)
  const unAuth = () => {
    dispatch(logOut())
    changeState('Logout')
  }
  useEffect(() => {
    if (!loggedIn) {
      navigate('/')
    }
  }, [loggedIn, navigate])
  const activeItem = page
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav onSubmit={unAuth} className='navigation-menu'>
        <ul className="navigation-items">
          <li className='navigation-item'>
            <Link to="/map">
              <button type="button" className={isActive('Map', activeItem)} onClick={() => changeState("Map")}>Карта</button>
            </Link>
          </li>
          <li className='navigation-item'>
            <Link to="/profile">
              <button type="button" className={isActive('Profile', activeItem)} onClick={() => changeState("Profile")}>Профиль</button>
            </Link>
          </li>
          <li className='navigation-item'>
            <button type="button" className={isActive('Logout', activeItem)} onClick={() => unAuth()}>Выйти</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

NavigationMenu.propTypes = {
  isLoggedIn: PropTypes.bool,
  activeItem: PropTypes.string,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export default NavigationMenu