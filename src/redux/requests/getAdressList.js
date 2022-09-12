export const getAdressList = async (payload) => {
  return fetch(
    `https://loft-taxi.glitch.me/addressList?token=${payload}`, 
    {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(responce => responce.json()).then(data => data)
}