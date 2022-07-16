// const axios = require('axios');
// import fetch from "node-fetch";
const fetch = require("node-fetch");

exports.handler = async function(event, context){
    console.log('entered function');
    console.log({event});
    console.log({context});
    try {
        const { date } = event.queryStringParameters;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.REACT_APP_NASA_API}/`);
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(response.data),
          headers: {
            "access-control-allow-origin": "*",
          },
        });
        // return {
        //   statusCode: 200,
        //   body: JSON.stringify(response.data),
        //   headers: {
        //     "access-control-allow-origin": "*",
        //   },
        // };
      } 
      
      catch (err) {
        return {
          statusCode: 404,
          body: err.toString(),
          headers: {
            "access-control-allow-origin": "*",
          },
        };
      }
};