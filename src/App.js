import React from 'react';
import Registration from './Registration/Registration';
import './App.css';
import { Map } from './Map'
import { Profile } from './Profile';
import { Logout } from './Logout';
import {
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="App" id='app' data-testid="application">
      <Routes>
        <Route path='/' element={<Logout/>}></Route>
        <Route path="/map" element={<Map/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;