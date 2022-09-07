import { authenticate, logIn } from "../ui/actions"
import { authRequest } from "../requests/authRequest"

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === authenticate.type) {
    const email = action.payload.payloadEmail;
    const password = action.payload.payloadPassword;
    const sucess = await authRequest(email, password)
    const payload = {
      email,
      password
    }
    if(sucess) {
      store.dispatch(logIn(payload))
    }
  } else {
    next(action)
  }
}