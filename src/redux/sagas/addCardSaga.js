import { takeEvery, call , put } from 'redux-saga/effects'
import { regRequest } from '../requests/addCardRequest'
import { addCard, regCard } from '../ui/actions'

export function* addSaga(action) {
  const payload = {
    cardName: action.payload.cardName,
    cardNumber:action.payload.cardNumber,
    cardDate: action.payload.cardDate,
    cardCvc: action.payload.cardCvc,
    authToken: action.payload.authToken
  }
  const success = yield call(regRequest, payload)
  if(success){
    yield put(regCard(payload))
  }
}

export function* addCardSaga() {
  yield takeEvery(addCard, addSaga)
}