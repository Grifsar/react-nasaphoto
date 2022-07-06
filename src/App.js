// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
const today = new Date();

const nasaApiKey = 'bqcZop6SWgG0zUQUA7YwAah2yllPloUG9XJ9G5TN';
const nasa = 'https://api.nasa.gov/planetary/apod';
// const photoDay = nasa + 'planetary/apod';

const App = () => {
  const [photo, setPhoto] = useState('');
  const searchPhotos = async (date) => {
    console.log('entered search');
    const response = await fetch(`${nasa}?date=${date}&api_key=${nasaApiKey}`);
    const data = await response.json();
    setPhoto(data);
    console.log(data.title);
  }
  function formatDate4API(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`) + '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());
  }
  const todayFormatted = formatDate4API(today);
  const [searchDate, setDate] = useState('');
  // setDate('');
  // searchDate = setDate(todayFormatted);
  return (
    <div className="App container mx-auto py-4">
      <header>
        <h1>Nasa API Experiments</h1>
        <h2>Photo of the day</h2>
      </header>
      <menu>
        <label htmlFor="photoDay">
          <p>Pick a date between June 20th, 1995 and today to display the photo for that day</p>
        </label>
        <input type="date" name="photoDay" id="photoDay" min="1995-06-20"
          value={searchDate}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={() => searchPhotos(searchDate)}>Search</button><br />
        {/* <button id="btn-randomPhoto">Get Random Photo</button> */}
      </menu>
      <main>
        <div id="container-photoDay"></div>
      </main>
    </div>
  );
}

export default App;
