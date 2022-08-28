import React from "react";
import logo from "./logo-login.svg"
import { withAuth } from "./AuthContext";
import TextField from '@mui/material/TextField';
import {PropTypes} from 'prop-types'

class Logout extends React.Component{

  auth = async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    await this.props.logIn(email.value, password.value)
    this.props.changeState('Map')
  }

  render() {
    const { changeState } = this.props
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
                  <button type="submit" className="btn-login" onClick={() => changeState("Map")}>Войти</button>
                </div>
              </form>
              <div className="new-profile">
                <div className="new-profile__text">Новый пользователь?</div>
                <button className="new-profile-btn" type="button" onClick={() => changeState("Registration")}>Регистрация</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Logout.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export const LogoutWithAuth = withAuth(Logout)