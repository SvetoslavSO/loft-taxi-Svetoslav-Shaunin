import { createReducer } from '@reduxjs/toolkit'
import {
  regCard,
  setPage,
  logIn,
  logOut,
  authToken,
  setCurrentCardName,
  setCurrentCardDate,
  setCurrentCardNumber,
  setCurrentCardCvc,
  setCardNumberCounter,
  setCardDateCounter
} from './actions'
const initialStore = {
  isLoggedIn: false,
  page: 'Logout',
  user: {
    email: '',
    password: '',
    name: '',
    surname: ''
  },
  userCard: {
    name: '',
    cardNumber: '',
    cardDate: '',
    cvc: ''
  },
  currentCard: {
    name: '',
    cardNumber: '',
    cardDate: '',
    cvc: '',
    numberCounter: 0,
    dateCounter: 0
  },
  authToken: ''
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
    store.user.name = '';
    store.userCard.name = '';
    store.userCard.cardNumber = '';
    store.userCard.cardDate = '';
    store.userCard.cvc = '';
    store.currentCard.name = '';
    store.currentCard.cardNumber = '';
    store.currentCard.cardDate = '';
    store.currentCard.cvc = ''
  },
  [regCard.type]: (store, action) => {
    store.userCard.name = action.payload.cardName
    store.userCard.cardNumber = action.payload.cardNumber
    store.userCard.cardDate = action.payload.expiryDate
    store.userCard.cvc = action.payload.cvc
  },
  [authToken.type]: (store, action) => {
    store.authToken = action.payload
  },
  [setCurrentCardName.type]: (store, action) => {
    store.currentCard.name = action.payload
  },
  [setCurrentCardCvc.type]: (store, action) => {
    store.currentCard.cvc = action.payload
  },
  [setCurrentCardNumber.type]: (store, action) => {
    store.currentCard.cardNumber = action.payload
  },
  [setCurrentCardDate.type]: (store, action) => {
    store.currentCard.cardDate = action.payload
  },
  [setCardNumberCounter.type]: (store, action) => {
    store.currentCard.numberCounter = action.payload
  },
  [setCardDateCounter.type]: (store, action) => {
    store.currentCard.dateCounter = action.payload
  }
})