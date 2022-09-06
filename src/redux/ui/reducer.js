import { createReducer } from '@reduxjs/toolkit'
import { setPage } from './actions'
import { logIn } from './actions'
import { logOut } from './actions'
const initialStore = {
  isLoggedIn: false,
  page: 'Logout',
  user: {
    email: '',
    password: '',
    name: '',
    surname: ''
  }
}

export const uiReducer = createReducer(initialStore, {
  [setPage.type]: (store, action) => {
    store.page = action.payload;
  },
  [logIn.type]: (store, action) => {
    store.isLoggedIn = true;
    store.user.surname = action.payload.surname
    store.user.name = action.payload.name;
    store.user.email = action.payload.email;
    store.user.password = action.payload.password
  },
  [logOut.type]:  (store) => {
    store.isLoggedIn = false;
    store.user.email = '';
    store.user.password = '';
    store.user.surname = '';
    store.user.name = ''
  }
})