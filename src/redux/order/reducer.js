import { createReducer } from '@reduxjs/toolkit'
import {
  setAddresses,
  setFirstAddress,
  setSecondAddress,
  setFirstArrayAddress,
  setSecondArrayAddress,
  coords,
  needTaxi,
  taxiReady,
  carChange,
  logOutOrder
} from './actions'

const orderStore = {
  addresses: [],
  firstAddress: '',
  secondAddress: '',
  firstArrayAddress: null,
  secondArrayAddress: null,
  coordinates: [],
  needTaxi: false,
  taxiReady: false,
  activeCar: 'standart'
}

export const orderReducer = createReducer(orderStore, {
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
  [needTaxi.type]: (store, action) => {
    store.needTaxi = action.payload
  },
  [taxiReady.type]: (store, action) => {
    store.taxiReady = action.payload
  },
  [carChange.type] : (store, action) => {
    store.activeCar = action.payload
  },
  [logOutOrder.type] : (store) => {
    store.addresses = [];
    store.firstAddress = '';
    store.secondAddress = '';
    store.firstArrayAddress = null;
    store.secondArrayAddress = null;
    store.coordinates = [];
    store.needTaxi = false;
    store.taxiReady = false;
    store.activeCar = 'standart';
  }
})