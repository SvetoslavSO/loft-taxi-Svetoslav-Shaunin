import { React, useEffect, useCallback } from "react";
import {PropTypes} from 'prop-types'
import {
  setPage,
  addCard,
  setCurrentCardName,
  setCurrentCardDate,
  setCurrentCardNumber,
  setCurrentCardCvc,
  setCardNumberCounter,
  setCardDateCounter
} from '../redux/ui/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  logged,
  tokenSelector,
  cardNameSelector,
  cardCvcSelector,
  cardDateSelector,
  cardNumberSelector,
  currentCardNameSelector,
  currentCardCvcSelector,
  currentCardDateSelector,
  currentCardNumberSelector,
  cardNumberCounterSelector,
  cardDateCounterSelector
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
  let currentCardNumber = useSelector(currentCardNumberSelector)
  let currentCardData = useSelector(currentCardDateSelector)
  let currentCardCvc = useSelector(currentCardCvcSelector)
  let currentCardName = useSelector(currentCardNameSelector)
  let cardNumber = useSelector(cardNumberSelector)
  let cardData = useSelector(cardDateSelector)
  let cardCvc = useSelector(cardCvcSelector)
  let cardName = useSelector(cardNameSelector)
  let cardNumberCounter = useSelector(cardNumberCounterSelector)
  let cardDateCounter = useSelector(cardDateCounterSelector)

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

  const onKeyUpValidateCardNumber = (e) => {
    const isValid = (e.key>= 0 && e.key <= 9 && e.target.value.length < 22)
    if (isValid){
      dispatch(setCardNumberCounter(cardNumberCounter + 1))
      if (cardNumberCounter === 4) {
        cardNumberValue = currentCardNumber + "  " + e.key
        dispatch(setCurrentCardNumber(cardNumberValue))
        dispatch(setCardNumberCounter(1))
      } else if (e.target.value.length < 22) {
        cardNumberValue = currentCardNumber + e.key
        dispatch(setCurrentCardNumber(cardNumberValue))
      }
    } else {
      e.target.value = currentCardNumber
    }
  }

  const onKeyUpValidateCardDate = (e) => {
    const isValid = (e.key>= 0 && e.key <= 9 && e.target.value.length < 5)
    if(isValid){
      dispatch(setCardDateCounter(cardDateCounter + 1))
      if(cardDateCounter === 2 ) {
        cardDateValue = currentCardData + "/" + e.key
        dispatch(setCurrentCardDate(cardDateValue))
        dispatch(setCardDateCounter(1))
      } else if (currentCardData.length < 5){
        cardDateValue = currentCardData + e.key
        dispatch(setCurrentCardDate(cardDateValue))
      }
    } else {
      e.target.value = currentCardData
    }
  }

  const onKeyUpValidateCardCvc = (e) => {
    const isValid = (e.key>= 0 && e.key <= 9 && e.target.value.length < 3)
    if(isValid){
      cardCvcValue = currentCardCvc + e.key
      dispatch(setCurrentCardCvc(cardCvcValue))
    } else {
      e.target.value = currentCardCvc
    }
  }

  const onKeyUpValidateCardName = (e) => {
    console.log(e)
    cardNameValue = currentCardName + e.key
    dispatch(setCurrentCardName(cardNameValue))
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
                      value={cardName ? cardName : currentCardName}
                      onKeyUp={(e)=>onKeyUpValidateCardName(e)}
                    /><br/>
                <label htmlFor="card">Номер карты<br/></label>
                <TextField
                      variant='standard'
                      id="card"
                      type='text'
                      name="card"
                      sx={{
                        marginBottom: 3,
                        width: 350,
                        outline: '#FDBF5A',
                        '& .MuiInputBase-root::after' : {
                          borderBottom: '#FDBF5A'
                        }
                      }}
                      value={cardNumber ? cardNumber : currentCardNumber}
                      onKeyUp={(e)=>onKeyUpValidateCardNumber(e)}
                    /><br/>  
                <div className="expiration-date">
                  <label htmlFor="date">MM/YY<br/></label>
                  <TextField
                      variant='standard'
                      id="date"
                      type='text'
                      name="date"
                      sx={{
                        marginBottom: 3,
                        width: 350,
                        outline: '#FDBF5A',
                        '& .MuiInputBase-root::after' : {
                          borderBottom: '#FDBF5A'
                        }
                      }}
                      value={cardData ? cardData : currentCardData}
                      onKeyUp={(e) => onKeyUpValidateCardDate(e)}
                    /><br/>
                </div>
                <div className="cvc">
                  <label htmlFor="CVC">CVC<br/></label>
                  <TextField
                      variant='standard'
                      id="CVC"
                      type='text'
                      name="CVC"
                      sx={{
                        marginBottom: 3,
                        width: 350,
                        outline: '#FDBF5A',
                        '& .MuiInputBase-root::after' : {
                          borderBottom: '#FDBF5A'
                        }
                      }}
                      value={cardCvc ? cardCvc : currentCardCvc}
                      onKeyUp={(e) => onKeyUpValidateCardCvc(e)}
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