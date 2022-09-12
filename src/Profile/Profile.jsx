import { React, useEffect, useCallback } from "react";
import {PropTypes} from 'prop-types'
import {
  setPage,
  addCard,
  setCardName,
  setCardDate,
  setCardNumber,
  setCardCvc
} from '../redux/ui/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  logged,
  tokenSelector,
  cardNameSelector,
  cardCvcSelector,
  cardDateSelector,
  cardNumberSelector
} from "../redux/ui/selector"
import {
  useNavigate
} from "react-router-dom";
import { NavigationMenu } from '../NavigationMenu'
import './Profile.css'
import cardLogo from '../assets/cardLogo.svg';
import cardMagnet from '../assets/magnet.svg';
import TextField from '@mui/material/TextField';


const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loggedIn = useSelector(logged)
  const token = useSelector(tokenSelector)
  let cardNumber = useSelector(cardNumberSelector)
  let cardData = useSelector(cardDateSelector)
  let cardCvc = useSelector(cardCvcSelector)
  let cardName = useSelector(cardNameSelector)

  const changeState = useCallback((namePage) => {
    dispatch(setPage(namePage));
  }, [dispatch])

  useEffect(() => {
    if (loggedIn) {
      navigate('/profile')
      changeState('Profile')
    } else {
      navigate ('/')
      changeState('Logout')
    }
  }, [loggedIn, navigate, changeState])

  const submitCard = (event) => {
    event.preventDefault()
    const payload = {
      cardName: event.target.username.value,
      cardNumber: event.target.card.value,
      cardDate: event.target.date.value,
      cardCvc: event.target.CVC.value,
      authToken: token
    }
    dispatch(addCard(payload))
  }

  let cardNumberValue = ''
  let cardDateValue = ''
  let cardCvcValue = ''
  let cardNameValue = ''

  const changeName = (e) => {
    cardNameValue = e.target.value
    dispatch(setCardName(cardNameValue))
  }

  const changeNumber = (e) => {
    cardNumberValue = e.target.value
    if(cardNumberValue.length === 4 ) {
      cardNumberValue = cardNumberValue + '  '
      dispatch(setCardNumber(`${cardNumberValue}`))
    } else if (cardNumberValue.length === 5) {
      if(e.nativeEvent.data === null) {
        cardNumberValue = cardNumberValue.substring(0, 4)
        dispatch(setCardNumber(`${cardNumberValue}`))
      } else {
        cardNumberValue = cardNumberValue.substring(0, 4) + '  ' + cardNumberValue.substring(4) 
        dispatch(setCardNumber(`${cardNumberValue}`))
      }
    } else if (cardNumberValue.length === 10) {
      cardNumberValue = cardNumberValue + '  '
      dispatch(setCardNumber(`${cardNumberValue}`))    
    } else if (cardNumberValue.length === 11) {
      if(e.nativeEvent.data === null) {
        cardNumberValue = cardNumberValue.substring(0, 10)
        dispatch(setCardNumber(`${cardNumberValue}`))
      } else {
        cardNumberValue = cardNumberValue.substring(0, 10) + '  ' + cardNumberValue.substring(10) 
        dispatch(setCardNumber(`${cardNumberValue}`))
      }
    } else if (cardNumberValue.length === 16) {
      cardNumberValue = cardNumberValue + '  '
      dispatch(setCardNumber(`${cardNumberValue}`))
    } else if (cardNumberValue.length === 17) {
      if(e.nativeEvent.data === null) {
        cardNumberValue = cardNumberValue.substring(0, 16)
        dispatch(setCardNumber(`${cardNumberValue}`))
      } else {
        cardNumberValue = cardNumberValue.substring(0, 16) + '  ' + cardNumberValue.substring(16) 
        dispatch(setCardNumber(`${cardNumberValue}`))
      }
    }else if (cardNumberValue.length <= 22) {
      dispatch(setCardNumber(cardNumberValue))
    } 
  }

  const changeDate = (e) => {
    cardDateValue = e.target.value
    if(cardDateValue.length === 3  && (cardDateValue.substring(2) === '/')) {
      cardDateValue = cardDateValue.substring(0, cardDateValue.length - 1)
      dispatch(setCardDate(`${cardDateValue}`))
    } else if(cardDateValue.length === 3  && (cardDateValue.substring(2) !== '/')) {
      cardDateValue = cardDateValue.substring(0, 2) + '/' + cardDateValue.substring(2)
      dispatch(setCardDate(`${cardDateValue}`))
    } else if(cardDateValue.length === 2 && (e.nativeEvent.data === null)) {
      dispatch(setCardDate(`${cardDateValue}`))
    } else if(cardDateValue.length === 2 && (e.nativeEvent.data !== null)) {
      cardDateValue = cardDateValue + '/'
      dispatch(setCardDate(`${cardDateValue}`))
    }  else if (cardDateValue.length <= 5) {
      dispatch(setCardDate(cardDateValue))
    } 
  }

  const changeCvc = (e) => {
    cardCvcValue = e.target.value
    if(cardCvcValue.length <= 3) {
      dispatch(setCardCvc(`${cardCvcValue}`))
    } 
  }

  return (
    <div data-testid='profile' className="profile-page">
      <NavigationMenu activeItem='Profile'/>
      <div className="profile__container">
        <div className="profile__content">
          <div className="page-name">Профиль</div>
          <div className="page-desc">Введите платёжные данные</div>
          <form onSubmit={submitCard}  className="profile__form">
            <div className="form__columns">
              <div className="form__left-column">
                <label htmlFor="username">Имя владельца<br/></label>
                <TextField
                      variant='standard'
                      id="username"
                      type='text'
                      name="username"
                      sx={{
                        marginBottom: 3,
                        width: 350,
                        outline: '#FDBF5A',
                        '& .MuiInputBase-root::after' : {
                          borderBottom: '#FDBF5A'
                        }
                      }}
                      value = {cardName}
                      onChange = {(e) => changeName(e)}
                    /><br/>
                <label htmlFor="card">Номер карты<br/></label>
                <TextField
                      variant='standard'
                      id="card"
                      type='text'
                      name="card"
                      inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                      }}
                      sx={{
                        marginBottom: 3,
                        width: 350,
                        outline: '#FDBF5A',
                        '& .MuiInputBase-root::after' : {
                          borderBottom: '#FDBF5A'
                        }
                      }}
                      value={cardNumber}
                      onChange = {(e) => changeNumber(e)}
                    /><br/>  
                <div className="expiration-date">
                  <label htmlFor="date">MM/YY<br/></label>
                  <TextField
                      variant='standard'
                      id="date"
                      type='text'
                      name="date"
                      inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                      }}
                      sx={{
                        marginBottom: 3,
                        width: 350,
                        outline: '#FDBF5A',
                        '& .MuiInputBase-root::after' : {
                          borderBottom: '#FDBF5A'
                        }
                      }}
                      value={cardData}
                      onChange = {(e) => changeDate(e)}
                    /><br/>
                </div>
                <div className="cvc">
                  <label htmlFor="CVC">CVC<br/></label>
                  <TextField
                      variant='standard'
                      id="CVC"
                      type='text'
                      name="CVC"
                      inputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                      }}
                      sx={{
                        marginBottom: 3,
                        width: 350,
                        outline: '#FDBF5A',
                        '& .MuiInputBase-root::after' : {
                          borderBottom: '#FDBF5A'
                        }
                      }}
                      value={cardCvc}
                      onChange = {(e) => changeCvc(e)}
                    /><br/>
                </div>
              </div>
              <div className="form__right-column">
                <div className="card">
                  <div className="card-header">
                    <img src={cardLogo} className="card-logo" alt="card-logotype" />
                    <div className="expire-date">
                      {cardData}
                    </div>
                  </div>
                  <div className="card-number">{cardNumber}</div>
                  <div className="card__footer">
                    <img src={cardMagnet} className="card-magnet" alt="card-magnet" />
                    <div className="visa-logo"></div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="profile-btn">сохранить</button>
          </form>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  isLoggedIn: PropTypes.bool,
  activeItem: PropTypes.string,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export default Profile