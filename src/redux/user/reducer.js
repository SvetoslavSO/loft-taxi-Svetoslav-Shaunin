import { createReducer } from '@reduxjs/toolkit'
import {
  logInUser,
  logOutUser
} from './actions'

const userStore = {
  user: {
    email: '',
    password: '',
    name: '',
    surname: ''
  }
}

export const userReducer = createReducer(userStore, {
  [logInUser.type]: (store, action) => {
    store.user.surname = action.payload.surname
    store.user.name = action.payload.name;
    store.user.email = action.payload.email;
    store.user.password = action.payload.password
  },
  [logOutUser.type]: (store) => {
    store.user.surname = '' 
    store.user.name = ''
    store.user.email = ''
    store.user.password = ''
  },
})