export const getAdressList = async (payload) => {
  console.log('yes')
  return fetch(
    `https://loft-taxi.glitch.me/addressList`, 
    {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: payload.token
      })
    }
  ).then(responce => responce.json()).then(data => data.success)
}