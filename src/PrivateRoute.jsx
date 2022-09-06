import React from "react";
import { Route, Redirect } from 'react-router-dom'
import { logged } from './redux/ui/selector';
import { useSelector } from 'react-redux';

/*export const PrivateRoute = (state) => {
  const isLoggedIn = useSelector(logged)
  <Route
  {...rest}
    render = {(props) => 
      isLoggedIn ? <></>
    }
  />
}*/