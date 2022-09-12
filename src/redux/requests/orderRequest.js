export const orderRequest = async (payload) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${payload.address1}&address2=${payload.address2}&token=${payload.token}`, 
    {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(responce => responce.json())
}