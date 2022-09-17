import { createReducer } from '@reduxjs/toolkit'
import {
  regCard,
  setCardName,
  setCardDate,
  setCardNumber,
  setCardCvc,
  checkCard,
  isCardChanged,
  logOutPayment
} from './actions'

const paymentStore = {
  userCard: {
    name: '',
    cardNumber: '',
    cardDate: '',
    cvc: ''
  },
  isCardCompleted: false,
  cardChanged: false,
}

export const paymentReducer = createReducer(paymentStore, {
  [regCard.type]: (store, action) => {
    store.userCard.name = action.payload.cardName
    store.userCard.cardNumber = action.payload.cardNumber
    store.userCard.cardDate = action.payload.expiryDate
    store.userCard.cvc = action.payload.cvc
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
  [checkCard.type]: (store, action) => {
    store.isCardCompleted = action.payload
  },
  [isCardChanged.type]: (store, action) => {
    store.cardChanged = action.payload
  },
  [logOutPayment.type]:  (store) => {
    store.userCard.name = '';
    store.userCard.cardNumber = '';
    store.userCard.cardDate = '';
    store.userCard.cvc = '';
    store.isCardCompleted= false;
    store.cardChanged= false;
  }
})