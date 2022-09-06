import './App.css';
import React from 'react';
import Map from './Map.jsx'
import Profile from './Profile';
import Logout from './Logout';
import Registration from './Registration';
import {
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="App" id='app' data-testid="application">
      <Routes>
        <Route path='/' element={<Logout></Logout>}></Route>
        <Route path="/map" element={<Map/>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;