import React from 'react';

const Information = (props) => {

    console.log('Info passed props:', props)

    return (
        <div>
            <h3>Date: {props.nasaData.date}</h3>
            <h2>{props.nasaData.title}</h2>
            <p>{props.nasaData.explanation}</p>
        </div>
    )
}

export default Information;