// const { resolvePath } = require("react-router-dom");
// const fetch = require('node-fetch');
const url = 'https://api.nasa.gov/planetary/apod';
const apikey = process.env.REACT_APP_NASA_API;

const axios = require('axios');
exports.handler = async (event, context) => {
  const date = event.queryStringParameters.date;
  let response;
  const params = new URLSearchParams([
    ['date', `${date}`],
    ['api_key', `${apikey}`]
]);
  // const url = 'https://api.nasa.gov/planetary/apod';
  try {
    const response = await axios.get(url, {params});
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

//   const params = new URLSearchParams([
//     ['date', `${date}`],
//     ['api_key', `${apikay}`]
// ]);
//   
//   try {
//     const response = await axios.get(url, {params});
//     return {
//       statusCode: 200,
//       body: JSON.stringify(response.data)
//     }
//   }
//   catch(error){
//     return {
//       statusCode: 500,
//       body: JSON.stringify(error)
//     }
//   }
};