import React from "react";
import logo from "./logo-login.svg"

class Logout extends React.Component{
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
              <form className="form">
                <div className="form__left-column">
                  <label htmlFor="email">Email<br/></label>
                  <input id="email" type='email' name="email" size='28'/><br/>
                  <label htmlFor="password">Пароль<br/></label>
                  <input id="password" type="password" name="passwird" size='28'/>
                </div>
              </form>
              <div className="form__addition">Забыли Пароль</div>
              <button type="button" className="btn-login" onClick={() => changeState("Map")}>Войти</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Logout