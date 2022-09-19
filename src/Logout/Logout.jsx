import { React, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { PropTypes } from 'prop-types'
import { setPage, authenticate } from '../redux/ui/actions';
import { logged } from '../redux/ui/selector';
import './Logout.css'
import logo from "../assets/logo-login.svg"

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loggedIn = useSelector(logged)

  const setUser = useCallback((event) => {
    event.preventDefault()
    const { email, password } = event.target 
    const payload = {
        payloadEmail : email.value,
        payloadPassword : password.value
    }
    dispatch(authenticate(payload))
  }, [dispatch])

  const changeState = useCallback((namePage) => {
    dispatch(setPage(namePage));
  }, [dispatch])

  useEffect(() => {
    if (loggedIn) {
      navigate('/map')
      changeState('Map')
    }
  }, [loggedIn, navigate, changeState])

  return (
    <div className="login-page" data-testid='logout-page'>
      <div className="login__left-column">
        <img src={logo} className="login-logo" alt="logo" />
      </div>
      <div className="login__right-column">
        <div className="right-column__content">
          <div className="form-content">
            <div className="enter">
              Войти
            </div>
            <form data-testid='form-logout-page' onSubmit={setUser} className="form">
              <div className="form__left-column">
                <TextField 
                  variant='standard' 
                  id="email" 
                  type='email' 
                  name="email"
                  label="Email"
                  sx={{
                    marginBottom: 3,
                    width: 350,
                    outline: '#FDBF5A',
                    '& .MuiInputBase-root::after' : {
                      borderBottom: '#FDBF5A'
                    }
                  }}
                /><br/>
                <TextField 
                  variant='standard' 
                  id="password" 
                  type='password' 
                  name="password"
                  label="Password" 
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
                <button data-testid="submit-btn-logout" type="submit" className="btn-login" >Войти</button>
              </div>
            </form>
            <div className="new-profile">
              <div className="new-profile__text">Новый пользователь?</div>
              <Link to="/registration">
                <button data-testid='new-profile-btn' className="new-profile-btn" type="button" onClick={changeState("Registration")}>Регистрация</button>
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