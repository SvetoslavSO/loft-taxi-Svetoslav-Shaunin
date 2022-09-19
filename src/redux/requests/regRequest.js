export const regRequest = async (payload) => {
  return fetch(
    `https://loft-taxi.glitch.me/register`, 
    {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        name: payload.name,
        surname: payload.surname
      })
    }
  ).then(responce => responce.json()).then(data => data.success)
}