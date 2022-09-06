import './App.css';
import React from 'react';
import Map from './Map.jsx'
import Profile from './Profile';
import Logout from './Logout';
import Registration from './Registration';
import { logged } from './redux/ui/selector';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import {
  Routes,
  Route
} from "react-router-dom";

function PrivateMap() {
  const isLoggedIn = useSelector(logged)
  return isLoggedIn ? <Map/> : <Navigate to='/'/>
}

function PrivateProfile() {
  const isLoggedIn = useSelector(logged)
  return isLoggedIn ? <Profile/> : <Navigate to='/'/>
}

const App = () => {
  return (
    <div className="App" id='app' data-testid="application">
      <Routes>
        <Route path='/' element={<Logout/>}></Route>
        <Route path="/map" element={<PrivateMap/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/profile" element={<PrivateProfile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;