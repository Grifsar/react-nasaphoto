//6/21/2022 has a smaller than average photo
//11/02/2015 might not have a photo
//04/21/2015
//03/25/2012
//TODO add photo function - may need to play with tailwind to get this looking good, if not manually style this
//TODO play around with styling via Tailwind more
//"homepage": "/react-nasaphoto",

import './App.css';
import React, { useEffect, useState } from 'react';

import PhotoCard from './PhotoCard';

const today = new Date();

// const nasaApiKey = process.env.REACT_APP_NASA_API;
// const nasa = 'https://api.nasa.gov/planetary/apod';
// const photoDay = nasa + 'planetary/apod';

const App = () => {
  //fetches the photo
  const searchPhotos = async (date) => {
    setPhoto('');
    const response = await fetch(`/.netlify/functions/app?date=${date}`);
    const data = await response.json();
    //05/10/2010
    console.log({data})
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
    <div className="App container mx-auto pt-4 bg-white min-h-screen">
     
        <header className='text-center'>
          <h1 className='text-4xl font-semibold'>Nasa Photo of the&nbsp;Day</h1>
        </header>
        <menu className='mt-6 text-center'>
          <label htmlFor="photoDay">
            <p>Pick a date between June 20th, 1995 and today to display the photo for that day</p>
            <p>These photos are being pulled from Nasa's photo of the day API and they have not been optimized for the web. Please be patient as they load.</p>
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
