import { createSelector } from '@reduxjs/toolkit'

const selectUI = (store) => store.ui;
export const selectPage = createSelector(selectUI, (ui) => ui.page)
export const logged = createSelector(selectUI , (ui) => ui.isLoggedIn)
export const tokenSelector = createSelector(selectUI, (ui) => ui.authToken)
export const cardNameSelector = createSelector(selectUI, (ui) => ui.userCard.name)
export const cardNumberSelector = createSelector(selectUI, (ui) => ui.userCard.cardNumber)
export const cardDateSelector = createSelector(selectUI, (ui) => ui.userCard.cardDate)
export const cardCvcSelector = createSelector(selectUI, (ui) => ui.userCard.cvc)
export const currentCardNameSelector = createSelector(selectUI, (ui) => ui.currentCard.name)
export const currentCardNumberSelector = createSelector(selectUI, (ui) => ui.currentCard.cardNumber)
export const currentCardDateSelector = createSelector(selectUI, (ui) => ui.currentCard.cardDate)
export const currentCardCvcSelector = createSelector(selectUI, (ui) => ui.currentCard.cvc)
export const cardNumberCounterSelector = createSelector(selectUI, (ui) => ui.currentCard.numberCounter)
export const cardDateCounterSelector = createSelector(selectUI, (ui) => ui.currentCard.dateCounter)