import { React, useEffect, useCallback } from "react";
import TextField from '@mui/material/TextField';
import {PropTypes} from 'prop-types'
import { setPage, reg } from '../redux/ui/actions';
import { useDispatch, useSelector } from 'react-redux';
import { logged } from '../redux/ui/selector';
import {
  useNavigate
} from "react-router-dom";
import './Registration.css'
import logo from "../assets/logo-login.svg"

const Registration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loggedIn = useSelector(logged)

  const changeState = useCallback((namePage) => {
    dispatch(setPage(namePage));
  }, [dispatch])

  useEffect(() => {
    if(loggedIn){
      navigate('/map')
      changeState('Map')
    }
  }, [loggedIn, navigate, changeState])

  const registrate = (event) => {
    event.preventDefault();
    const payload = {
      payloadEmail: event.target.email.value,
      payloadName: event.target.name.value,
      payloadPassword: event.target.password.value,
      payloadSurname : 'Shaunin'
    }
    dispatch(reg(payload))
  }

  return (
    <div className="login-page">
      <div className="login__left-column">
        <img src={logo} className="login-logo" alt="logo" />
      </div>
      <div className="login__right-column">
        <div className="right-column__content">
          <div className="form-content">
            <div className="registration">
              Зарегистрироваться
            </div>
            <form onSubmit={registrate} className="form">
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
                <label htmlFor="name">Как вас зовут?</label><br/>
                <TextField 
                  variant='standard' 
                  id="name" 
                  type='text' 
                  name="name"
                  sx={{
                    marginBottom: 3,
                    width: 350,
                    outline: '#FDBF5A',
                    '& .MuiInputBase-root::after' : {
                      borderBottom: '#FDBF5A'
                    }
                  }}
                />
                <label htmlFor="password">Придумайте пароль</label><br/>
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
                <button type="submit" className="btn-login">Зарегистрироваться</button>  
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export default Registration