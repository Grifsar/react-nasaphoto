//6/21/2022 has a smaller than average photo
//TODO add photo function - may need to play with tailwind to get this looking good, if not manually style this
//TODO play around with styling via Tailwind more
//"homepage": "/react-nasaphoto",

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
    //05/10/2010
    // console.log({data})
    setPhoto(data);
  }
  function formatDate4API(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`) + '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());
  }
  function randomDate(){
    let minDate = new Date('1995-06-20').getTime(); //first day with a photo of the day in milliseconds
    const randDate = new Date(Math.random() * (today.getTime() - minDate) + minDate); //makes sure that date is in range
    const formattedDate = formatDate4API(new Date(randDate));
    setDate(formattedDate);
    searchPhotos(formattedDate);
  }
  const [photo, setPhoto] = useState('');
  const todayFormatted = formatDate4API(today);
  const [searchDate, setDate] = useState(todayFormatted);
  useEffect(() => {
    searchPhotos(todayFormatted);
  }, [todayFormatted]); // the ,[] should make sure this runs once on load
  return (
    <div className="App container mx-auto pt-4 bg-white">
     
        <header className='text-center'>
          <h1 className='text-4xl font-semibold'>Nasa API Experiments</h1>
          <h2 className='text-2xl font-semibold'>Photo of the day</h2>
        </header>
        <menu className='mt-6 text-center'>
          <label htmlFor="photoDay">
            <p>Pick a date between June 20th, 1995 and today to display the photo for that day</p>
          </label>
          <input className='border-2 border-indigo-700 text-indigo-700 font-semibold mt-6' type="date" name="photoDay" id="photoDay" min="1995-06-20" max={todayFormatted}
            value={searchDate}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
          className='px-4 py-2 font-semibold text-sm bg-indigo-700 text-white rounded-full shadow-sm ml-6'
            onClick={() => searchPhotos(searchDate)}>Search</button>
          <button
            className='px-4 py-2 font-semibold text-sm bg-indigo-700 text-white rounded-full shadow-sm ml-6'
            onClick={() => randomDate()}
            >Random</button>
        </menu>
        <main>
          <PhotoCard photo={photo} />
        </main>
    </div>
  );
}

export default App;
