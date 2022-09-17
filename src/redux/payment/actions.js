import { createAction } from "@reduxjs/toolkit";

export const regCard = createAction("@payment/regCard")
export const setCardName = createAction("@payment/cardName")
export const setCardDate = createAction("@payment/cardDate")
export const setCardNumber = createAction("@payment/cardNumber")
export const setCardCvc = createAction("@payment/cardCvc")
export const checkCard = createAction("@payment/checkCard")
export const isCardChanged = createAction("@payment/isCardChanged")
export const logOutPayment = createAction("@payment/logOut")
export const addCard = createAction("@payment/logOut")