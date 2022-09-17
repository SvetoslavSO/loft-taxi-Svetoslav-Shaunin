import { React, useEffect, useCallback, useMemo } from "react";
import { PropTypes } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setPage } from '../redux/ui/actions'
import TextField from '@mui/material/TextField';
import {
  setFirstAddress,
  setSecondAddress,
  setFirstArrayAddress,
  setSecondArrayAddress,
  needTaxi,
  taxiReady,
  coords,
  carChange
} from '../redux/order/actions'
import { logged } from '../redux/ui/selector';
import {
  addressesSelector,
  firstAddressSelector,
  secondAddressSelector,
  firstArrayAddressSelector,
  secondArrayAddressSelector,
  taxiReadySelector,
  activeCarSelector
} from '../redux/order/selector'
import { isCardCompletedSelector } from '../redux/payment/selector'
import './ModalWindow.css'
import standard from '../assets/standard.png'
import comfort from '../assets/comfort.png'
import buisness from '../assets/buisness.png'
import { Autocomplete } from "@mui/material";

const ModalWindow = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loggedIn = useSelector(logged)
  const isTaxiReady = useSelector(taxiReadySelector)
  const isCardCompleted = useSelector(isCardCompletedSelector)


  const places = useSelector(addressesSelector)
  const firstAddress = useSelector(firstAddressSelector)
  const secondAddress = useSelector(secondAddressSelector)
  const firstArrayAddress = useSelector(firstArrayAddressSelector)
  const secondArrayAddress = useSelector(secondArrayAddressSelector) 
  const activeCar = useSelector(activeCarSelector)

  const changeState = useCallback((namePage) => {
    dispatch(setPage(namePage));
  }, [dispatch])

  useEffect(() => {
    if (!loggedIn) {
      navigate('/')
      changeState('Logout')
    }
  }, [loggedIn, navigate, changeState])

  const order = useCallback(() => {
    if(firstAddress && secondAddress) {
      dispatch(needTaxi())
    } else {
      alert('не выбраны адреса')
    }
  }, [dispatch, firstAddress, secondAddress])

  const setCar = useCallback((carName) => {
    dispatch(carChange(carName))
  }, [dispatch])

  const navigateToProfile = useCallback(() => {
    navigate('/profile')
    changeState('Profile')
  }, [navigate, changeState])

  const newOrder = useCallback(() => {
    dispatch(coords([]))
    dispatch(taxiReady(false))
    dispatch(setSecondArrayAddress(null))
    dispatch(setFirstArrayAddress(null))
    dispatch(setFirstAddress(''))
    dispatch(setSecondAddress(''))
  }, [dispatch])

  const handleChangeFirst = useCallback((e) => {
    e.preventDefault()
    for(let i=0; i<places.length; i++) {
      if (places[i] === e.target.innerHTML) {
        const oldArray = [...places]
        oldArray.splice(i, 1)
        dispatch(setFirstAddress(e.target.innerHTML))
        dispatch(setSecondArrayAddress(oldArray))
      } else if (e.target.innerHTML === ''){
        dispatch(setSecondArrayAddress(null))
        dispatch(setFirstArrayAddress(null))
        dispatch(setFirstAddress(''))
      } else if (e.target.classList.contains('MuiSvgIcon-root')) {
        const element = document.getElementById('end')
        if (places[i] === element.value) {
          const oldArray = [...places]
          oldArray.splice(i, 1)
          dispatch(setFirstArrayAddress(oldArray))
        }
        dispatch(setSecondArrayAddress(null))
        dispatch(setFirstAddress(''))
      }
    }
  }, [dispatch, places])

  const handleChangeSecond = useCallback((e) => {
    e.preventDefault()
    for(let i=0; i<places.length; i++) {
      if (places[i] === e.target.innerHTML) {
        const oldArray = [...places]
        oldArray.splice(i, 1)
        dispatch(setFirstArrayAddress(oldArray))
        dispatch(setSecondAddress(e.target.innerHTML))
      } else if (e.target.innerHTML === ''){
        dispatch(setSecondArrayAddress(null))
        dispatch(setFirstArrayAddress(null))
        dispatch(setSecondAddress(''))
      } else if (e.target.classList.contains('MuiSvgIcon-root')){
        const element = document.getElementById('start')
        if (places[i] === element.value) {
          const oldArray = [...places]
          oldArray.splice(i, 1)
          dispatch(setSecondArrayAddress(oldArray))
        }
        dispatch(setFirstArrayAddress(null))
        dispatch(setSecondAddress(''))
      }
    }
  }, [dispatch, places])

  const memoIsActive = useMemo(() => 
    (value, activeCar) => {
      return 'rate__plan ' + ((value === activeCar) ? 'active' : '')
  }, [])

  if(isCardCompleted && !isTaxiReady) {
    return (
      <div className="modal__container">
        <div className="inputs__container">
          <form className="choose__route">
            <Autocomplete
              id="start"
              options={firstArrayAddress ? firstArrayAddress : places}
              sx={{
                marginBottom: 1,
                marginTop: 1,
                width: 400,
                outline: '#FDBF5A',
                '& .MuiInputBase-root::after' : {
                  borderBottom: '#FDBF5A'
                }
              }}
              onChange = {(e) => handleChangeFirst(e)}
              renderInput={(params) => <TextField {...params} label="выберите адрес начальной точки маршрута"/>}
            />
            <Autocomplete
              id="end"
              options={secondArrayAddress ? secondArrayAddress : places}
              sx={{
                marginBottom: 1,
                marginTop: 1,
                width: 400,
                outline: '#FDBF5A',
                '& .MuiInputBase-root::after' : {
                  borderBottom: '#FDBF5A'
                }
              }}
              onChange = {(e) => handleChangeSecond(e)}
              renderInput={(params) => <TextField {...params} label="выберите адрес конечной точки маршрута"/>}
            />
          </form>
        </div>
        <div className="modal__content">
          <ul className="choose__rate">
            <li className={memoIsActive('standart', activeCar)} onClick={() => setCar('standart')}>
              <div className="rate__description">
                <div className="rate__name">
                  Стандарт
                </div>
                <div className="price-title">
                  Стоимость
                </div>
                <div className="price">
                  150 ₽
                </div>
              </div>
              <div className="car">
                <img src={standard} alt="" className="car__picture" />
              </div>
            </li>
            <li className={memoIsActive('comfort', activeCar)} onClick={() => setCar('comfort')}>
              <div className="rate__description">
                <div className="rate__name">
                  Премиум
                </div>
                <div className="price-title">
                  Стоимость
                </div>
                <div className="price">
                  250 ₽
                </div>
              </div>
              <div className="car">
                <img src={comfort} alt="" className="car__picture" />
              </div>
            </li>
            <li className={memoIsActive('buisness', activeCar)} onClick={() => setCar('buisness')}>
              <div className="rate__description">
                <div className="rate__name">
                  Бизнес
                </div>
                <div className="price-title">
                  Стоимость
                </div>
                <div className="price">
                  300 ₽
                </div>
              </div>
              <div className="car">
                <img src={buisness} alt="" className="car__picture" />
              </div>
            </li>
          </ul>
          <button onClick={order} type="button" className="modal-btn">Заказать</button>
        </div>
      </div>
    );
  } else if(isTaxiReady) {
    return (
     <div className="new-order">
       <div className="new-order__text">
         <div className="new-order__title">Заказ размещён</div>
         <div className="new-order__desc">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</div>
       </div>
       <button onClick={newOrder} type="button" className="modal-btn-changed">Сделать новый заказ</button>
     </div>
    )
  } else {
    return (
      <div className="add-card">
        <div className="add-card__desc">Для того, чтобы заказать такси, пожалуйста, заполните карту</div>
        <button onClick={navigateToProfile} type="button" className="modal-btn">Заполнить карту</button>
      </div>
    )
  }
}

ModalWindow.propTypes = {
  isLoggedIn: PropTypes.bool,
  activeItem: PropTypes.string,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export default ModalWindow