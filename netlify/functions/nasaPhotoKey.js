const axios = require('axios')
exports.handler = async event => {
  try {
    const response = await axios({
      params: {
        apikey: process.env.REACT_APP_NASA_API,
        date: event.queryStringParameters.date
      },
      url: 'https://api.nasa.gov/planetary/apod'
    })
    return {
      body: JSON.stringify(response.data),
      statusCode: 200
    }
  } catch (err) {
    if (axios.isAxiosError) {
      console.log('Error from API', err)
      return {
        body: JSON.stringify({
          error: err.response.statusText
        }),
        statusCode: err.response.statusCode
      }
    } else {
      console.log('Internal error', err)
      return {
        body: JSON.stringify({
          error: 'Something went wrong'
        }),
        statusCode: 500
      }
    }
  }
}