import React from "react";
import NavigationMenu from './NavigationMenu'

class Profile extends React.Component {

  render(){
    let cardCounter = 0

    const ValidateCard = (e) => {
      cardCounter = cardCounter + 1;
      if (cardCounter === 4) {
        e.target.value = e.target.value + "  "
        cardCounter = 0
      }
    }

    return (
      <div className="profile-page">
        <NavigationMenu changeState={ this.props } activeItem='Profile'/>
        <div className="profile__content">
          <div className="page-name">Профиль</div>
          <div className="page-desc">Введите платёжные данные</div>
          <form className="profile__form">
            <div className="form__left-column">
              <label htmlFor="email">Имя владельца<br/></label>
              <input id="email" type='email' name="email" size='28'/><br/>
              <label htmlFor="card">Номер карты<br/></label>
              <input id='card' type="text" name="card" size='28' onKeyUp={(e)=>ValidateCard(e)}/><br/>
              <div className="expiration-date">
                <label htmlFor="date">MM/YY<br/></label>
                <input id="date" type='text' name="date" size='28'/><br/>
              </div>
              <div className="cvc">
                <label htmlFor="CVC">CVC<br/></label>
                <input id="CVC" type='text' name="CVC" size='28'/><br/>
              </div>
            </div>
            <div className="form__right-column"></div>
          </form>
        </div>
      </div>
    )
  }
}

export default Profile