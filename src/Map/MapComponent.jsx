import {
  React,
  useEffect,
  useRef
} from "react";
import {
  coords
} from '../redux/ui/selector';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  needTaxi
} from '../redux/ui/actions'
import mapboxgl from 'mapbox-gl';
import env from './env';
import './Map.css'

mapboxgl.accessToken = env.accessToken;

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const coordinates = useSelector(coords)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3055604, 59.9429126],
      zoom: 10
    });
    map.on('load', ()=> {
      if(coordinates.length !== 0) {
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
                coordinates: coordinates
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
        dispatch(needTaxi())
      } else {
        map.removeSource('route')
      }
    })

    return () => map.remove();
  }, [coordinates, dispatch]);

  return (
    <div data-testid="map" className='map-container' ref={mapContainerRef} />
  );
};

export default MapComponent;