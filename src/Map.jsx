import React from "react";
import NavigationMenu from "./NavigationMenu";

class Map extends React.Component{
  render() {
    return (
      <div className="map-page">
        <NavigationMenu changeState={ this.props } activeItem='Map'/>
        <div>Map</div>
      </div>
    )
  }
}

export default Map