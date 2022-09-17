import { takeEvery, call , put } from 'redux-saga/effects'
import { orderRequest } from '../requests/orderRequest'
import { orderReq, coords, taxiReady } from '../order/actions'

export function* orderSagaRequest(action) {
  const payload = {
    address1: action.payload.firstAddress,
    address2: action.payload.secondAddress,
    token: action.payload.token
  }
  const success = yield call(orderRequest, payload)
  if(success){
    yield put(coords(success))
    yield put(taxiReady(true))
  }
}

export function* orderSaga() {
  yield takeEvery(orderReq, orderSagaRequest)
}