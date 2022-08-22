import React from "react";
import NavigationMenu from "./NavigationMenu";

class Map extends React.Component{
  render() {
    const { changeState } = this.props
    return (
      <div className="map-page">
        <NavigationMenu changeState={ changeState } activeItem='Map'/>
        <div>Map</div>
      </div>
    )
  }
}

export default Map