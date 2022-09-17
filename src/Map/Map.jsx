import { React, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { setPage } from '../redux/ui/actions';
import { orderReq } from '../redux/order/actions';
import { isCardChanged } from '../redux/payment/actions';
import { logged, tokenSelector } from '../redux/ui/selector';
import { taxiSelector, firstAddressSelector, secondAddressSelector } from '../redux/order/selector';
import { cardChangedSelector } from '../redux/payment/selector';
import { NavigationMenu } from "../NavigationMenu";
import './Map.css'
import MapComponent from "./MapComponent";
import { ModalWindow } from "../ModalWindow"

const Map = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loggedIn = useSelector(logged)
  const needTaxi = useSelector(taxiSelector)
  const firstAddress = useSelector(firstAddressSelector)
  const secondAddress = useSelector(secondAddressSelector)
  const token = useSelector(tokenSelector)
  const cardChanged = useSelector(cardChangedSelector)

  const changeState = useCallback((namePage) => {
    dispatch(setPage(namePage));
  }, [dispatch])

  useEffect(() => {
    if (loggedIn) {
      navigate('/map')
      changeState('Map')
    } else {
      navigate ('/')
      changeState('Logout')
    }
  }, [loggedIn, navigate, changeState])

  useEffect(() => {
    if(needTaxi){
      const payload = {
        firstAddress: firstAddress,
        secondAddress: secondAddress,
        token: token
      }
      dispatch(orderReq(payload))
    }
  }, [dispatch, needTaxi, firstAddress, secondAddress, token])

  useEffect(() => {
    if(cardChanged){
      dispatch(isCardChanged(false))
    }
  }, [dispatch, cardChanged])


  return (
    <div data-testid='map-page-test' className="map-page">
      <NavigationMenu activeItem='Map' />
      <div className="map-container">
        <MapComponent/>
        <div className="modal-window">
          <ModalWindow />
        </div>
      </div>
    </div>
  )
}

Map.propTypes = {
  changeState: PropTypes.func
};

export default Map