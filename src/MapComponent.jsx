import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapComponent.css'
import env from './env'

mapboxgl.accessToken = env.accessToken;

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3055604, 59.9429126],
      zoom: 10
    });
    return () => map.remove();
  }, []);

  return (
    <div>
      <div data-testid="map" className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default MapComponent;