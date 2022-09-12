import {
  React,
  useEffect,
  useCallback
} from "react";
import {PropTypes} from 'prop-types'
import { 
  logged,
  taxiSelector,
  firstAddressSelector,
  secondAddressSelector,
  tokenSelector
} from '../redux/ui/selector';
import {
  orderReq,
  setPage
} from '../redux/ui/actions';
import { 
  useDispatch,
  useSelector
} from 'react-redux';
import {
  useNavigate
} from "react-router-dom";
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
  })


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