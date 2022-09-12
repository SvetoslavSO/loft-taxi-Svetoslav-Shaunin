import { takeEvery, call , put } from 'redux-saga/effects'
import { regRequest } from '../requests/regRequest'
import { reg, logIn } from '../ui/actions'

export function* authenticateSaga(action) {
  const payload = {
    email: action.payload.payloadEmail,
    password: action.payload.payloadPassword,
    name: action.payload.payloadName,
    surname: action.payload.payloadSurname
  }
  const success = yield call(regRequest, payload)
  if(success){
    yield put(logIn(payload))
  }
}

export function* regSaga() {
  yield takeEvery(reg, authenticateSaga)
}