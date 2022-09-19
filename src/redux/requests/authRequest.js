export const authRequest = async (payload) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth`,
    {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password
      })
    }
  ).then(responce => responce.json()).then(data => data.token)
}