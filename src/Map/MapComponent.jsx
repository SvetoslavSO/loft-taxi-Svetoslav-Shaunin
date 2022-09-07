import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import env from './env';
import './Map.css'

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
    <div data-testid="map" className='map-container' ref={mapContainerRef} />
  );
};

export default MapComponent;