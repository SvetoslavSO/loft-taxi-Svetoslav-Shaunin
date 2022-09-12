//import React, { useRef, useEffect } from 'react';
import {
  React,
  useEffect,
  //useCallback,
  useRef
} from "react";
import {
  coords
} from '../redux/ui/selector';
import {
  useSelector
} from 'react-redux';
import mapboxgl from 'mapbox-gl';
import env from './env';
import './Map.css'

mapboxgl.accessToken = env.accessToken;

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const coordinates = useSelector(coords)
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3055604, 59.9429126],
      zoom: 10
    });

    if(coordinates !== []) {
      console.log('here')
      console.log(coordinates)
      map.fire('click')
    } else {
      console.log('empty array')
    }

    map.on('click', () => {
      console.log('here in func')
      map.flyTo({
        center: coordinates[0],
        zoom: 15
      });
     
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates
            }
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#ffc617",
          "line-width": 8
        }
      });
      }
    )

    return () => map.remove();
  }, [coordinates]);

  return (
    <div data-testid="map" className='map-container' ref={mapContainerRef} />
  );
};

export default MapComponent;