import React from "react";
import NavigationMenu from "./NavigationMenu";
import MapComponent from "./MapComponent";
import {PropTypes} from 'prop-types'

const Map = () => {
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