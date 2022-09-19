import { createSelector } from '@reduxjs/toolkit'

const selectOrder = (store) => store.order;
export const addressesSelector = createSelector(selectOrder, (order) => order.addresses)
export const firstAddressSelector = createSelector(selectOrder, (order) => order.firstAddress)
export const secondAddressSelector = createSelector(selectOrder, (order) => order.secondAddress)
export const firstArrayAddressSelector = createSelector(selectOrder, (order) => order.firstArrayAddress)
export const secondArrayAddressSelector = createSelector(selectOrder, (order) => order.secondArrayAddress)
export const taxiSelector = createSelector(selectOrder, (order) => order.needTaxi)
export const coordsSelector = createSelector(selectOrder, (order) => order.coordinates)
export const taxiReadySelector = createSelector(selectOrder, (order) => order.taxiReady)
export const activeCarSelector = createSelector(selectOrder, (order) => order.activeCar)