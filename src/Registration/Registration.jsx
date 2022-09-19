import { React, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { PropTypes } from 'prop-types'
import { setPage, reg } from '../redux/ui/actions';
import { logged } from '../redux/ui/selector';
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

  const registrate = useCallback((event) => {
    event.preventDefault();
    const payload = {
      payloadEmail: event.target.email.value,
      payloadName: event.target.name.value,
      payloadPassword: event.target.password.value,
      payloadSurname : 'Shaunin'
    }
    dispatch(reg(payload))
  }, [dispatch])

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
                  id="name" 
                  type='text' 
                  name="name"
                  label="Как вас зовут"
                  sx={{
                    marginBottom: 3,
                    width: 350,
                    outline: '#FDBF5A',
                    '& .MuiInputBase-root::after' : {
                      borderBottom: '#FDBF5A'
                    }
                  }}
                />
                <TextField 
                  variant='standard' 
                  id="password" 
                  type='password' 
                  name="password"
                  label="Придумайте пароль"
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