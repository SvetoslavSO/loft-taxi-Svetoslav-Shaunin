import { takeEvery, call , put } from 'redux-saga/effects'
import { orderRequest } from '../requests/orderRequest'
import { orderReq, coords, taxiReady } from '../ui/actions'

export function* orderSagaRequest(action) {
  const payload = {
    address1: action.payload.firstAddress,
    address2: action.payload.secondAddress,
    token: action.payload.token
  }
  const success = yield call(orderRequest, payload)
  if(success){
    yield put(coords(success))
    yield put(taxiReady())
  }
}

export function* orderSaga() {
  yield takeEvery(orderReq, orderSagaRequest)
}