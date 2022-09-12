import { takeEvery, call , put } from 'redux-saga/effects'
import { authRequest } from '../requests/authRequest'
import { getAdressList } from '../requests/getAdressList'
import { getCardRequest } from '../requests/getCardRequest'
import { authenticate, logIn, authToken, regCard, setAddresses } from '../ui/actions'

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
    if(cardRequest) {
      yield put(regCard(cardRequest))
      const addresses = yield call(getAdressList, success)
      if(addresses) {
        yield put (setAddresses(addresses))
      }
      
    }
  }
}

export function* authSaga() {
  yield takeEvery(authenticate, authenticateSaga)
}