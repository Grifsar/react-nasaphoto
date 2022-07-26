
const axios = require('axios');
exports.handler = async (event, context) => {
  const date = event.queryStringParameters.date;
  const apikay = process.env.REACT_APP_NASA_API;
  const params = new URLSearchParams([
    ['date', `${date}`],
    ['api_key', `${apikay}`]
]);
  const url = 'https://api.nasa.gov/planetary/apod';
  try {
    const response = await axios.get(url, {params});
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  }
  catch(error){
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }
};