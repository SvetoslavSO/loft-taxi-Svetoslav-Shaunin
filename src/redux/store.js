import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from './ui/reducer'
import { authMiddleware } from "./middlewares/authMiddleware";
import { registrationMiddleware } from "./middlewares/registrationMiddleware";

const rootReducers = combineReducers({
  ui: uiReducer,
});

export const store = configureStore({ 
  reducer: rootReducers, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(authMiddleware)
    .concat(registrationMiddleware)
})