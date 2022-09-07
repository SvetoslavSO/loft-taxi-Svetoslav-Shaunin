import { React, useEffect, useCallback } from "react";
import {PropTypes} from 'prop-types'
import { logged } from '../redux/ui/selector';
import { setPage } from '../redux/ui/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  useNavigate
} from "react-router-dom";
import { NavigationMenu } from "../NavigationMenu";
import './Map.css'
import MapComponent from "./MapComponent";


const Map = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loggedIn = useSelector(logged)

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

  return (
    <div data-testid='map-page-test' className="map-page">
      <NavigationMenu activeItem='Map' />
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  )
}

Map.propTypes = {
  changeState: PropTypes.func
};

export default Map