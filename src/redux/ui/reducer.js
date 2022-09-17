import { createReducer } from '@reduxjs/toolkit'
import {
  //regCard,
  setPage,
  logIn,
  logOut,
  authToken,
  /*setCardName,
  setCardDate,
  setCardNumber,
  setCardCvc,
  setAddresses,
  setFirstAddress,
  setSecondAddress,
  setFirstArrayAddress,
  setSecondArrayAddress,
  coords,
  needTaxi,
  taxiReady,
  checkCard,
  isCardChanged,
  carChange*/
} from './actions'
const initialStore = {
  isLoggedIn: false,
  page: 'Logout',
  // user done
  /*user: {
    email: '',
    password: '',
    name: '',
    surname: ''
  },*/
  //payment
  /*userCard: {
    name: '',
    cardNumber: '',
    cardDate: '',
    cvc: ''
  },*/
  //addresses: [],
  authToken: '',
  //firstAddress: '',
  //secondAddress: '',
  //firstArrayAddress: null,
  //secondArrayAddress: null,
  //coordinates: [],
  //needTaxi: false,
  //taxiReady: false,
  //isCardCompleted: false,
  //cardChanged: false,
  //activeCar: 'standart'
}

export const uiReducer = createReducer(initialStore, {
  [setPage.type]: (store, action) => {
    store.page = action.payload;
  },
  [logIn.type]: (store, action) => {
    store.isLoggedIn = true
  },
  [logOut.type]:  (store) => {
    store.isLoggedIn = false;
    //store.user.email = '';
    //store.user.password = '';
    //store.user.surname = '';
    //store.user.name = '';
    //store.userCard.name = '';
    //store.userCard.cardNumber = '';
    //store.userCard.cardDate = '';
    //store.userCard.cvc = '';
    //store.currentCard.name = '';
    //store.currentCard.cardNumber = '';
    //store.currentCard.cardDate = '';
    //store.currentCard.cvc = '';
    //store.addresses= [];
    store.authToken =  '';
    //store.firstAddress = '';
    //store.secondAddress = '';
    //store.firstArrayAddress = null;
    //store.secondArrayAddress = null;
    //store.needTaxi = false;
    //store.taxiReady = false;
    //store.coordinates = [];
    //store.cardChanged = false;
  },/*
  [regCard.type]: (store, action) => {
    store.userCard.name = action.payload.cardName
    store.userCard.cardNumber = action.payload.cardNumber
    store.userCard.cardDate = action.payload.expiryDate
    store.userCard.cvc = action.payload.cvc
  },*/
  [authToken.type]: (store, action) => {
    store.authToken = action.payload
  },/*
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
  },
  [taxiReady.type]: (store) => {
    store.taxiReady = !store.taxiReady
  },*/
  /*[checkCard.type]: (store) => {
    if (store.userCard.cardDate === undefined || store.userCard.cardNumber === undefined || store.userCard.name === undefined || store.userCard.cvc === undefined) {
      store.isCardCompleted = false
    } else {
      store.isCardCompleted = true
    }
  },
  [isCardChanged.type]: (store, action) => {
    store.cardChanged = action.payload
  },
  [carChange.type] : (store, action) => {
    store.activeCar = action.payload
  }*/
})