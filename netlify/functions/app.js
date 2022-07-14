const axios = require('axios');

exports.handler = async function(event, context){
    console.log({event});
    console.log({context});
    try {
        const { date } = event.queryStringParameters;
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.REACT_APP_NASA_API}/`);
        return {
          statusCode: 200,
          body: JSON.stringify({ data: response.data }),
        };
      } catch (err) {
        return {
          statusCode: 404,
          body: err.toString(),
        };
      }

};