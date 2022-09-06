import { reg, logIn } from "../ui/actions"
import { regRequest } from "./regRequest"

export const registrationMiddleware = (store) => (next) => async (action) => {
  if (action.type === reg.type) {
    const email = action.payload.payloadEmail;
    const password = action.payload.payloadPassword;
    const name = action.payload.payloadName
    const surname = action.payload.payloadSurname
    const success = await regRequest(email, password, name, surname)
    const payload = {
      email,
      password,
      name,
      surname
    }
    if(success) {
      store.dispatch(logIn(payload))
    }
  } else {
    next(action)
  }
}