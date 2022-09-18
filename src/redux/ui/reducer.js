import { createReducer } from '@reduxjs/toolkit'
import {
  setPage,
  logIn,
  logOut,
  authToken
} from './actions'
const initialStore = {
  isLoggedIn: false,
  page: 'Logout',
  authToken: ''
}

export const uiReducer = createReducer(initialStore, {
  [setPage.type]: (store, action) => {
    store.page = action.payload;
  },
  [logIn.type]: (store) => {
    store.isLoggedIn = true
  },
  [logOut.type]:  (store) => {
    store.isLoggedIn = false;
    store.authToken =  '';
  },
  [authToken.type]: (store, action) => {
    store.authToken = action.payload
  }
})