import React from "react";
import logo from "./logo-login.svg"
import { withAuth } from "./AuthContext";
import TextField from '@mui/material/TextField';
import {PropTypes} from 'prop-types'

class Registration extends React.Component{

  auth = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    await this.props.logIn(email.value, password.value)
    this.props.changeState('Map')
  }

  render() {
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
              <form onSubmit={this.auth} className="form">
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
}

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export const RegistrationWithAuth = withAuth(Registration)