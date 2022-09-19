import { takeEvery, call , put } from 'redux-saga/effects'
import { authRequest } from '../requests/authRequest'
import { getAdressList } from '../requests/getAdressList'
import { getCardRequest } from '../requests/getCardRequest'
import { authenticate, logIn, authToken} from '../ui/actions'
import { setAddresses } from '../order/actions'
import { regCard, checkCard } from '../payment/actions'
import { logInUser } from '../user/actions'

export function* authenticateSaga(action) {
  const payload = {
    email: action.payload.payloadEmail,
    password: action.payload.payloadPassword
  }
  const success = yield call(authRequest, payload)
  if(success){
    yield put(logIn(payload))
    yield put(logInUser(payload))
    yield put(authToken(success))
    const cardRequest = yield call(getCardRequest, success)
    if(cardRequest) {
      yield put(regCard(cardRequest))
      if(cardRequest.cardName === undefined || cardRequest.cardNumber === undefined || cardRequest.expiryDate === undefined || cardRequest.cvc === undefined){
        yield put(checkCard(false))
      } else {
        yield put(checkCard(true))
      }
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