import { createSelector } from '@reduxjs/toolkit'

const selectPayment = (store) => store.payment;
export const cardNameSelector = createSelector(selectPayment, (payment) => payment.userCard.name)
export const cardNumberSelector = createSelector(selectPayment, (payment) => payment.userCard.cardNumber)
export const cardDateSelector = createSelector(selectPayment, (payment) => payment.userCard.cardDate)
export const cardCvcSelector = createSelector(selectPayment, (payment) => payment.userCard.cvc)
export const isCardCompletedSelector = createSelector(selectPayment, (payment) => payment.isCardCompleted)
export const cardChangedSelector = createSelector(selectPayment, (payment) => payment.cardChanged)