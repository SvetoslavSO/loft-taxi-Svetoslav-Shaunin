import { takeEvery, call , put } from 'redux-saga/effects'
import { regRequest } from '../requests/addCardRequest'
import { getCardRequest } from '../requests/getCardRequest'
import { addCard, regCard } from '../ui/actions'


export function* addSaga(action) {
  const payload = {
    cardName: action.payload.cardName,
    cardNumber:action.payload.cardNumber,
    expiryDate: action.payload.cardDate,
    cvc: action.payload.cardCvc,
    authToken: action.payload.authToken
  }
  console.log(payload, 'registration')
  const success = yield call(regRequest, payload)
  const serverCard = yield call(getCardRequest, payload.authToken)
  console.log(serverCard)
  if(success){
    yield put(regCard(payload))
  }
}

export function* addCardSaga() {
  yield takeEvery(addCard, addSaga)
}