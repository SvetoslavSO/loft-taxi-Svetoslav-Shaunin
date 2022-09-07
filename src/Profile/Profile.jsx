import { React, useEffect, useCallback } from "react";
import {PropTypes} from 'prop-types'
import { logged } from '../redux/ui/selector';
import { setPage } from '../redux/ui/actions';
import { useDispatch, useSelector } from 'react-redux';
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

  let cardCounter = 0

  const onKeyUpValidateCard = (e) => {
    cardCounter = cardCounter + 1;
    if (cardCounter === 4) {
      e.target.value = e.target.value + "  "
      cardCounter = 0
    }
  }

  return (
    <div data-testid='profile' className="profile-page">
      <NavigationMenu activeItem='Profile'/>
      <div className="profile__container">
        <div className="profile__content">
          <div className="page-name">Профиль</div>
          <div className="page-desc">Введите платёжные данные</div>
          <form className="profile__form">
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
                  /><br/>
              <label htmlFor="card">Номер карты<br/></label>
              <TextField
                    variant='standard'
                    id="card"
                    type='text'
                    name="card"
                    onKeyUp={(e)=>onKeyUpValidateCard(e)}
                    sx={{
                      marginBottom: 3,
                      width: 350,
                      outline: '#FDBF5A',
                      '& .MuiInputBase-root::after' : {
                        borderBottom: '#FDBF5A'
                      }
                    }}
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
                  /><br/>
              </div>
            </div>
            <div className="form__right-column">
              <div className="card">
                <div className="card-header">
                  <img src={cardLogo} className="card-logo" alt="card-logotype" />
                  <div className="expire-date">
                    05/08
                  </div>
                </div>
                <div className="card-number">5545 2300 3432 4521</div>
                <div className="card__footer">
                  <img src={cardMagnet} className="card-magnet" alt="card-magnet" />
                  <div className="visa-logo"></div>
                </div>
              </div>
            </div>
          </form>
          <button type="button" className="profile-btn">сохранить</button>
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