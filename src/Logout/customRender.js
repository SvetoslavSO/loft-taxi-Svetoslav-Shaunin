import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from "@redux-saga/core";
import { rootReducers } from '../redux/store'
import { authSaga } from '../redux/sagas/authSaga'
import { regSaga } from '../redux/sagas/regSaga'
import { addCardSaga } from '../redux/sagas/addCardSaga'
import { orderSaga } from "../redux/sagas/orderSaga";

export const customRender = (component, state) => {

  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: state,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat(sagaMiddleware)
  })

  
  sagaMiddleware.run(authSaga)
  sagaMiddleware.run(regSaga)
  sagaMiddleware.run(addCardSaga)
  sagaMiddleware.run(orderSaga)

  return {
    ...render(
      <MemoryRouter>
        <Provider store={store}>{component}</Provider>
      </MemoryRouter>
    ),
    store
  }
}
