import { React, useEffect } from "react";
import logo from "./logo-login.svg"
import TextField from '@mui/material/TextField';
import {PropTypes} from 'prop-types'
import { setPage, reg } from './redux/ui/actions';
import { useDispatch, useSelector } from 'react-redux';
import { logged } from './redux/ui/selector';
import {
  useNavigate,
  Link
} from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loggedIn = useSelector(logged)
  const changeState = (namePage) => {
    dispatch(setPage(namePage));
  }
  useEffect(() => {
    if(loggedIn){
      navigate('/map')
      changeState('Map')
    }
  }, [loggedIn, navigate])
  const registrate = (event) => {
    event.preventDefault();
    const { email, name, password } = event.target
    const payloadEmail = email.value
    const payloadName = name.value
    const payloadPassword = password.value
    const payloadSurname = 'shaunin'
    const payload = {
      payloadEmail,
      payloadName,
      payloadPassword,
      payloadSurname
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