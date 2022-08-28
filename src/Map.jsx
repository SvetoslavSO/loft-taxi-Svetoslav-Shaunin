import React from "react";
import { NavigationMenu } from "./NavigationMenu";
import MapComponent from "./MapComponent";
import {PropTypes} from 'prop-types'

class Map extends React.Component{
  render() {
    const { changeState } = this.props
    return (
      <div data-testid='map-page-test' className="map-page">
        <NavigationMenu changeState={ changeState } activeItem='Map' />
        <div className="map-container">
          <MapComponent />
        </div>
      </div>
    )
  }
}

Map.propTypes = {
  changeState: PropTypes.func
};

export default Map