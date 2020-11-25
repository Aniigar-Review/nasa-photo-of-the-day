import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import "./App.css";

import Photo from './components/nasa-data/Photo';
import Information from './components/nasa-data/Information';


function App() {
  // Sets date to state for calendar function
  const [value, setValue] = useState(new Date());
  // Sets reformatted date from calendar to state to use in API call.
  const [photoDate, setPhotoDate] = useState(initialDate());
  //  Sets data from NASA API to state
  const [nasaData , setNasaData] = useState([]);


  function onChange(nextValue) {
    setValue(nextValue);
    newDate()
  }

  function initialDate() {
    const _date = new Date(); // ie: Dec 22 2020
    const formatted = _date.getFullYear() + '-' + (_date.getMonth()+1) + '-' + _date.getDate();
    return formatted.toString()
  }

  function newDate() {
    const _date = value; // ie: Dec 22 2020
    const formatted = _date.getFullYear() + '-' + (_date.getMonth()+1) + '-' + _date.getDate();
    setPhotoDate(formatted.toString())
  }

  function resetDate() {
    const _date = new Date(); // ie: Dec 22 2020
    const formatted = _date.getFullYear() + '-' + (_date.getMonth()+1) + '-' + _date.getDate();
    setPhotoDate(formatted.toString());
    setValue(new Date())
  }
  
  const MainDiv = styled.div `
    margin: auto;
    padding:20px;
    background: #778899 url(${nasaData.url}) fixed;
    // background-image: url(${nasaData.url});
    // filter: blur(20px) brightness(0.7);
    // opacity: 0.8; 
  `;

  const HeadDiv = styled.div `
    margin: auto;
    padding:20px;
    background: #D3D3D3;
    opacity: 0.6;
    border-radius: 5px;
  `;

  const BodyDiv = styled.div `
    margin: auto;
    padding:20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;


  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=7caY8A1AAjE6hem6vGosj17PHexJABdwyENfSADc&date=${photoDate}`)
      // Which we then set to state
      .then(res => setNasaData(res.data))
      // Always include error handling
      .catch(err => console.log(err));
  }, [photoDate]);


  return (
    <MainDiv className="App">
      <HeadDiv>
        <h1>Nasa Photo of the Day</h1>
      </HeadDiv>
      <BodyDiv>
        {/* <h2>{nasaData.date}</h2> */}
        <Photo url={nasaData.url} />
        <Information nasaData={nasaData} HeadDiv={HeadDiv} value={value} onChange={onChange} resetDate={resetDate} />
      </BodyDiv>
    </MainDiv>
  );
}

export default App;
