import { createAction } from "@reduxjs/toolkit";

export const logOutOrder = createAction("@order/logOut")
export const setAddresses = createAction("@order/setAddresses")
export const setFirstAddress = createAction("@order/setFirstAddress")
export const setSecondAddress = createAction("@order/setSecondAddress")
export const setFirstArrayAddress = createAction("@order/setArrayFirstAddress")
export const setSecondArrayAddress = createAction("@order/setArraySecondAddress")
export const orderReq = createAction("@order/orderReq")
export const coords = createAction("@order/coords")
export const needTaxi = createAction("@order/needTaxi")
export const taxiReady = createAction("@order/taxiReady")
export const carChange = createAction("@order/carChange")