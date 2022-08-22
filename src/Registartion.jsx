import React from "react";
import logo from "./logo-login.svg"

class Registration extends React.Component{
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
              <div className="registration">
                Зарегистрироваться
              </div>
              <form className="form">
                <div className="form__left-column">
                  <label htmlFor="email">Email</label><br/>
                  <input id="email" type='email' name="email" size='28'/><br/>
                  <label htmlFor="name">Как вас зовут?</label><br/>
                  <input id="name" type="text" name="name" size='28'/><br/>
                  <label htmlFor="password">Придумайте пароль</label><br/>
                  <input id="password" type="password" name="password" size='28'/>
                </div>
              </form>
              <div className="form__addition">Забыли Пароль</div>
              <button type="button" className="btn-login" onClick={() => changeState("Map")}>Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Registration