export const getCardRequest = async (payload) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?token=${payload}`, 
    {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(responce => responce.json())
}