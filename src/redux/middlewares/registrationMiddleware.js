import { reg, logIn } from "../ui/actions"
import { regRequest } from "../requests/regRequest"

export const registrationMiddleware = (store) => (next) => async (action) => {
  if (action.type === reg.type) {
    const payload = {
      email: action.payload.payloadEmail,
      password: action.payload.payloadPassword,
      name: action.payload.payloadName,
      surname: action.payload.payloadSurname
    }
    const success = await regRequest(payload)
    if(success) {
      store.dispatch(logIn(payload))
    }
  } else {
    next(action)
  }
}