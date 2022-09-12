import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from './ui/reducer'
import createSagaMiddleware from "@redux-saga/core";
import { authSaga } from './sagas/authSaga'
import { regSaga } from './sagas/regSaga'
import { addCardSaga } from './sagas/addCardSaga'
import { orderSaga } from "./sagas/orderSaga";

const sagaMiddleware = createSagaMiddleware()

const rootReducers = combineReducers({
  ui: uiReducer,
});

export const store = configureStore({ 
  reducer: rootReducers, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(sagaMiddleware)
})

sagaMiddleware.run(authSaga)
sagaMiddleware.run(regSaga)
sagaMiddleware.run(addCardSaga)
sagaMiddleware.run(orderSaga)