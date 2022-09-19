import { createAction } from "@reduxjs/toolkit";

export const setPage = createAction("@ui/setPage")
export const logIn = createAction("@ui/logIn")
export const logOut = createAction("@ui/logOut")
export const addCard = createAction("@ui/addCard")
export const authenticate = createAction("@ui/auth")
export const reg = createAction("@ui/reg")
export const authToken = createAction("@ui/authToken")