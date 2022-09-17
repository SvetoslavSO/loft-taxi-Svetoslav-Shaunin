import { React, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types'
import { setPage } from '../redux/ui/actions';
import {
  addCard,
  setCardName,
  setCardDate,
  setCardNumber,
  setCardCvc,
  isCardChanged,
  checkCard
} from "../redux/payment/actions"
import { logged, tokenSelector } from "../redux/ui/selector"
import {
  cardNameSelector,
  cardCvcSelector,
  cardDateSelector,
  cardNumberSelector,
  cardChangedSelector
} from "../redux/payment/selector"
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
  const cardNumber = useSelector(cardNumberSelector)
  const cardData = useSelector(cardDateSelector)
  const cardCvc = useSelector(cardCvcSelector)
  const cardName = useSelector(cardNameSelector)
  const cardChanged = useSelector(cardChangedSelector)

  const changeState = useCallback((namePage) => {
    dispatch(setPage(namePage));
  }, [dispatch])

  const goToMap = useCallback(() => {
    navigate('/map')
    changeState('Map')
  }, [changeState, navigate])

  const changeName = useCallback((e) => {
    dispatch(setCardName(e.target.value))
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

  const submitCard = useCallback((event) => {
    event.preventDefault()
    const payload = {
      cardName: event.target.username.value,
      cardNumber: event.target.card.value,
      cardDate: event.target.date.value,
      cardCvc: event.target.CVC.value,
      authToken: token
    }
    if(payload.cardName === '' || payload.cardDate === '' || payload.cardNumber === '' || payload.cardCvc === '') {
      alert('не заполнены все поля')
    } else {
      dispatch(addCard(payload))
      dispatch(isCardChanged(true))
      dispatch(checkCard(true))
    }
  }, [dispatch, token])

  const changeNumber = useCallback((e) => {
    if(e.target.value.length === 4 ) {
      dispatch(setCardNumber(e.target.value + '  '))
    } else if (e.target.value.length === 5) {
      if(e.nativeEvent.data === null) {
        dispatch(setCardNumber(e.target.value.substring(0, 4)))
      } else {
        dispatch(setCardNumber(e.target.value.substring(0, 4) + '  ' + e.target.value.substring(4) ))
      }
    } else if (e.target.value.length === 10) {
      dispatch(setCardNumber(e.target.value + '  '))    
    } else if (e.target.value.length === 11) {
      if(e.nativeEvent.data === null) {
        dispatch(setCardNumber(e.target.value.substring(0, 10)))
      } else {
        dispatch(setCardNumber(e.target.value.substring(0, 10) + '  ' + e.target.value.substring(10) ))
      }
    } else if (e.target.value.length === 16) {
      dispatch(setCardNumber(e.target.value + '  '))
    } else if (e.target.value.length === 17) {
      if(e.nativeEvent.data === null) {
        dispatch(setCardNumber(e.target.value.substring(0, 16)))
      } else {
        dispatch(setCardNumber(e.target.value.substring(0, 16) + '  ' + e.target.value.substring(16) ))
      }
    }else if (e.target.value.length <= 22) {
      dispatch(setCardNumber(e.target.value))
    } 
  }, [dispatch])

  const changeDate = useCallback((e) => {
    if(e.target.value.length === 3  && (e.target.value.substring(2) === '/')) {
      dispatch(setCardDate(e.target.value.substring(0, e.target.value.length - 1)))
    } else if(e.target.value.length === 3  && (e.target.value.substring(2) !== '/')) {
      
      dispatch(setCardDate(e.target.value.substring(0, 2) + '/' + e.target.value.substring(2)))
    } else if(e.target.value.length === 2 && (e.nativeEvent.data === null)) {
      dispatch(setCardDate(e.target.value))
    } else if(e.target.value.length === 2 && (e.nativeEvent.data !== null)) {
      dispatch(setCardDate(e.target.value + '/'))
    }  else if (e.target.value.length <= 5) {
      dispatch(setCardDate(e.target.value))
    } 
  }, [dispatch])

  const changeCvc = useCallback((e) => {
    if(e.target.value.length <= 3) {
      dispatch(setCardCvc(e.target.value))
    } 
  }, [dispatch])

  if(cardChanged){
    return (
      <div data-testid='profile' className="profile-page">
        <NavigationMenu activeItem='Profile'/>
        <div className="profile__container">
          <div className="profile-changed__content">
            <div className="profile-changed__title">Профиль</div>
            <div className="profile-changed__desc">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
            <button type="button" onClick={goToMap} className="profile-btn">Перейти на карту</button>
          </div>
        </div>
      </div>
    )
  } else {
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
                          inputMode: 'number',
                          pattern: '[0-9, \s]*'
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
                          inputMode: 'number',
                          pattern: '[0-9, \/]*'
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
                          inputMode: 'number',
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
}

Profile.propTypes = {
  isLoggedIn: PropTypes.bool,
  activeItem: PropTypes.string,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export default Profile