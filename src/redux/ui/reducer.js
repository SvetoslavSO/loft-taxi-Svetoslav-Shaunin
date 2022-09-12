import { createReducer } from '@reduxjs/toolkit'
import {
  regCard,
  setPage,
  logIn,
  logOut,
  authToken,
  setCardName,
  setCardDate,
  setCardNumber,
  setCardCvc,
  setAddresses,
  setFirstAddress,
  setSecondAddress,
  setFirstArrayAddress,
  setSecondArrayAddress,
  coords,
  needTaxi
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
  addresses: [],
  authToken: '',
  firstAddress: '',
  secondAddress: '',
  setAddresses: '',
  firstArrayAddress: null,
  secondArrayAddress: null,
  coordinates: [],
  needTaxi: false
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
    store.currentCard.cvc = '';
    store.addresses= [];
    store.authToken =  '';
    store.firstAddress = '';
    store.secondAddress = '';
    store.setAddresses = '';
    store.firstArrayAddress = null;
    store.secondArrayAddress = null;
    store.needTaxi = false;
    store.coordinates = []
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
  [setCardName.type]: (store, action) => {
    store.userCard.name = action.payload
  },
  [setCardCvc.type]: (store, action) => {
    store.userCard.cvc = action.payload
  },
  [setCardNumber.type]: (store, action) => {
    store.userCard.cardNumber = action.payload
  },
  [setCardDate.type]: (store, action) => {
    store.userCard.cardDate = action.payload
  },
  [setAddresses.type]: (store, action) => {
    store.addresses = action.payload.addresses
  },
  [setFirstAddress.type]: (store, action) => {
    store.firstAddress = action.payload
  },
  [setSecondAddress.type]: (store, action) => {
    store.secondAddress = action.payload
  },
  [setFirstArrayAddress.type]: (store, action) => {
    store.firstArrayAddress = action.payload
  },
  [setSecondArrayAddress.type]: (store, action) => {
    store.secondArrayAddress = action.payload
  },
  [coords.type]: (store, action) => {
    store.coordinates = action.payload
  },
  [needTaxi.type]: (store) => {
    store.needTaxi = !store.needTaxi
  }
})