import { React, useEffect } from "react";
import logo from "./logo-login.svg"
import TextField from '@mui/material/TextField';
import {PropTypes} from 'prop-types'
import { setPage, authenticate } from './redux/ui/actions';
import { useDispatch, useSelector } from 'react-redux';
import { logged } from './redux/ui/selector';
import {
  useNavigate,
  Link
} from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loggedIn = useSelector(logged)
  useEffect(() => {
    if (loggedIn) {
      navigate('/map')
      changeState('Map')
    }
  }, [loggedIn, navigate])
  const setUser = (event) => {
    event.preventDefault()
    const { email, password } = event.target
    const payloadEmail = email.value;
    const payloadPassword = password.value;
    const payload = {
        payloadEmail,
        payloadPassword
    }
    dispatch(authenticate(payload))
  }
  const changeState = (namePage) => {
    dispatch(setPage(namePage));
  }
  return (
    <div className="login-page">
      <div className="login__left-column">
        <img src={logo} className="login-logo" alt="logo" />
      </div>
      <div className="login__right-column">
        <div className="right-column__content">
          <div className="form-content">
            <div className="enter">
              Войти
            </div>
            <form onSubmit={setUser} className="form">
              <div className="form__left-column">
                <label htmlFor="email">Email</label><br/>
                <TextField 
                  variant='standard' 
                  id="email" 
                  type='email' 
                  name="email"
                  sx={{
                    marginBottom: 3,
                    width: 350,
                    outline: '#FDBF5A',
                    '& .MuiInputBase-root::after' : {
                      borderBottom: '#FDBF5A'
                    }
                  }}
                /><br/>
                <label htmlFor="password">Пароль</label><br/>
                <TextField 
                  variant='standard' 
                  id="password" 
                  type='password' 
                  name="password"
                  sx={{
                    marginBottom: 3,
                    width: 350,
                    outline: '#FDBF5A',
                    '& .MuiInputBase-root::after' : {
                      borderBottom: '#FDBF5A'
                    }
                  }}
                />
                <div className="form__addition">Забыли Пароль</div>
                <button type="submit" className="btn-login" >Войти</button>
              </div>
            </form>
            <div className="new-profile">
              <div className="new-profile__text">Новый пользователь?</div>
              <Link to="/registration">
                <button className="new-profile-btn" type="button" onClick={() => changeState("Registration")}>Регистрация</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Logout.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export default Logout