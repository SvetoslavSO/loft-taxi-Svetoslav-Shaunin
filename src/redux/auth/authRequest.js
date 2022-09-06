export const authRequest = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(responce => responce.json()).then(data => data.success)
}