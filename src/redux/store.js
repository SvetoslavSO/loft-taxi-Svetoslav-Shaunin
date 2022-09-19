import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from './ui/reducer'
import { paymentReducer } from "./payment/reducer";
import { orderReducer } from "./order/reducer";
import { userReducer } from "./user/reducer";
import createSagaMiddleware from "@redux-saga/core";
import { authSaga } from './sagas/authSaga'
import { regSaga } from './sagas/regSaga'
import { addCardSaga } from './sagas/addCardSaga'
import { orderSaga } from "./sagas/orderSaga";

const sagaMiddleware = createSagaMiddleware()

export const rootReducers = combineReducers({
  ui: uiReducer,
  payment: paymentReducer,
  order: orderReducer,
  user: userReducer
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