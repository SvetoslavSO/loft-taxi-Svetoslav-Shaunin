import { React, useEffect } from "react";
import {PropTypes} from 'prop-types'
import { 
  useDispatch,
  useSelector 
} from 'react-redux';
import {
  setFirstAddress,
  setSecondAddress,
  setFirstArrayAddress,
  setSecondArrayAddress,
  needTaxi
} from '../redux/ui/actions'
import { 
  logged,
  addressesSelector,
  firstAddressSelector,
  secondAddressSelector,
  firstArrayAddressSelector,
  secondArrayAddressSelector
} from '../redux/ui/selector';
import {
  useNavigate
} from "react-router-dom";
import './ModalWindow.css'
import TextField from '@mui/material/TextField';
import standard from '../assets/standard.png'
import comfort from '../assets/comfort.png'
import buisness from '../assets/buisness.png'
import { Autocomplete } from "@mui/material";

const ModalWindow = () => {
  const navigate = useNavigate()
  const loggedIn = useSelector(logged)
  const dispatch = useDispatch()

  const places = useSelector(addressesSelector)
  const firstAddress = useSelector(firstAddressSelector)
  const secondAddress = useSelector(secondAddressSelector)
  const firstArrayAddress = useSelector(firstArrayAddressSelector)
  const secondArrayAddress = useSelector(secondArrayAddressSelector)

  useEffect(() => {
    if (!loggedIn) {
      navigate('/')
    }
  }, [loggedIn, navigate])

  const order = () => {
    if(firstAddress && secondAddress) {
      dispatch(needTaxi())
    } else {
      alert('не выбраны адреса')
    }
  }

  const handleChangeFirst = (e) => {
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
  }

  const handleChangeSecond = (e) => {
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
  }

  return (
    <div className="modal__container">
      <div className="inputs__container">
        <form className="choose__route">
          <Autocomplete
            id="start"
            value={firstAddress ? firstAddress : 'выберите адрес'}
            options={firstArrayAddress ? firstArrayAddress : places}
            sx={{
              marginBottom: 1,
              marginTop: 1,
              width: 350,
              outline: '#FDBF5A',
              '& .MuiInputBase-root::after' : {
                borderBottom: '#FDBF5A'
              }
            }}
            onChange = {(e) => handleChangeFirst(e)}
            renderInput={(params) => <TextField {...params}/>}
          />
          <Autocomplete
            id="end"
            value={secondAddress ? secondAddress : 'выберите адрес'}
            options={secondArrayAddress ? secondArrayAddress : places}
            sx={{
              marginBottom: 1,
              marginTop: 1,
              width: 350,
              outline: '#FDBF5A',
              '& .MuiInputBase-root::after' : {
                borderBottom: '#FDBF5A'
              }
            }}
            onChange = {(e) => handleChangeSecond(e)}
            renderInput={(params) => <TextField {...params}/>}
          />
        </form>
      </div>
      <div className="modal__content">
        <ul className="choose__rate">
          <li className="rate__plan">
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
          <li className="rate__plan">
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
          <li className="rate__plan">
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
}

ModalWindow.propTypes = {
  isLoggedIn: PropTypes.bool,
  activeItem: PropTypes.string,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeState: PropTypes.func
};

export default ModalWindow