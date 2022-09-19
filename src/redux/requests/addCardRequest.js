export const regRequest = async (payload) => {
  return fetch(
    `https://loft-taxi.glitch.me/card`, 
    {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cardNumber: payload.cardNumber,
        expiryDate: payload.expiryDate,
        cardName: payload.name,
        cvc: payload.cvc,
        token: payload.authToken
      })
    }
  ).then(responce => responce.json()).then(data => data.success)
}