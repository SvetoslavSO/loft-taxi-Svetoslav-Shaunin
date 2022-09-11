import { takeEvery, call , put } from 'redux-saga/effects'
import { authRequest } from '../requests/authRequest'
import { getCardRequest } from '../requests/getCardRequest'
import { authenticate, logIn, authToken, regCard } from '../ui/actions'

export function* authenticateSaga(action) {
  const payload = {
    email: action.payload.payloadEmail,
    password: action.payload.payloadPassword
  }
  const success = yield call(authRequest, payload)
  if(success){
    yield put(logIn(payload))
    yield put(authToken(success))
    const cardRequest = yield call(getCardRequest, success)
    console.log(cardRequest)
    if(cardRequest) {
      yield put(regCard(cardRequest))
    }
  }
}

export function* authSaga() {
  yield takeEvery(authenticate, authenticateSaga)
}