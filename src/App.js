import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./App.css";

import Photo from './components/nasa-data/Photo';
import Information from './components/nasa-data/Information';

function App() {

  const [nasaData , setNasaData] = useState([]);
  console.log('Data from state:', nasaData)

  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=7caY8A1AAjE6hem6vGosj17PHexJABdwyENfSADc')
      // Which we then set to state
      .then(res => setNasaData(res.data))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      {/* <h2>{nasaData.date}</h2> */}
      <Photo url={nasaData.url} />
      <Information nasaData={nasaData} />
    </div>
  );
}

export default App;
