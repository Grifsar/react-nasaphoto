// import logo from './logo.svg';
//6/21/2022 has a smaller than average photo
//TODO Error handling - some days don't have an hdurl
//TODO Error handling - handle user manually entering and searching for bad date
//TODO random date function
//TODO add photo function - may need to play with tailwind to get this looking good, if not manually style this
//TODO play around with styling via Tailwind more

import './App.css';
import React, { useEffect, useState } from 'react';
import PhotoCard from './PhotoCard';

const today = new Date();

const nasaApiKey = 'bqcZop6SWgG0zUQUA7YwAah2yllPloUG9XJ9G5TN';
const nasa = 'https://api.nasa.gov/planetary/apod';
// const photoDay = nasa + 'planetary/apod';

const App = () => {
  //fetches the photo
  const searchPhotos = async (date) => {
    const response = await fetch(`${nasa}?date=${date}&api_key=${nasaApiKey}`);
    const data = await response.json();
    setPhoto(data);
  }
  function formatDate4API(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`) + '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());
  }
  const [photo, setPhoto] = useState('');
  const todayFormatted = formatDate4API(today);
  const [searchDate, setDate] = useState(todayFormatted);
  // setDate('');
  // searchDate = setDate(todayFormatted);
  useEffect(() => {
    searchPhotos(todayFormatted);
  }, []); // the ,[] should make sure this runs once on load
  return (
    <div className="App container mx-auto py-4">
      <header className='text-center'>
        <h1 className='text-4xl'>Nasa API Experiments</h1>
        <h2 className='text-2xl'>Photo of the day</h2>
      </header>
      <menu className='mt-6 text-center'>
        <label htmlFor="photoDay">
          <p>Pick a date between June 20th, 1995 and today to display the photo for that day</p>
        </label>
        <input className='border-2 border-indigo-700 mt-6' type="date" name="photoDay" id="photoDay" min="1995-06-20" max={todayFormatted}
          value={searchDate}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
        className='px-4 py-2 font-semibold text-sm bg-indigo-700 text-white rounded-full shadow-sm ml-6'
          onClick={() => searchPhotos(searchDate)}>Search</button><br />
        {/* <button id="btn-randomPhoto">Get Random Photo</button> */}
      </menu>
      <main>
        <PhotoCard photo={photo} />
      </main>
    </div>
  );
}

export default App;
