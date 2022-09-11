import { React, useEffect } from "react";
import {PropTypes} from 'prop-types'
import { /* useDispatch ,*/ useSelector } from 'react-redux';
import { logged } from '../redux/ui/selector';
import {
  useNavigate,
  //Link
} from "react-router-dom";
import './ModalWindow.css'
import TextField from '@mui/material/TextField';
import standard from '../assets/standard.png'
import comfort from '../assets/comfort.png'
import buisness from '../assets/buisness.png'

const ModalWindow = () => {
  const navigate = useNavigate()
  const loggedIn = useSelector(logged)
  //const dispatch = useDispatch()

  useEffect(() => {
    if (!loggedIn) {
      navigate('/')
    }
  }, [loggedIn, navigate])
  
  return (
    <div className="modal__container">
      <div className="inputs__container">
        <TextField
          variant="standard"
          id="start"
          type="text"
          name="start"
          sx={{
            marginBottom: 3,
            marginTop: 3,
            width: 350,
            outline: '#FDBF5A',
            '& .MuiInputBase-root::after' : {
              borderBottom: '#FDBF5A'
            }
          }}
        />
        <TextField
          variant="standard"
          id="end"
          type="text"
          name="end"
          sx={{
            marginBottom: 3,
            width: 350,
            outline: '#FDBF5A',
            '& .MuiInputBase-root::after' : {
              borderBottom: '#FDBF5A'
            }
          }}
        />
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
        <button type="submit" className="modal-btn">Заказать</button>
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