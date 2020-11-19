import React from 'react';
import styled from 'styled-components';

import DatePicker from '../calendar/Calendar'

const Information = (props) => {

    const InfoDiv = styled.div `
        margin-left: 20px;
        padding:20px;
        background: #D3D3D3;
        opacity: 0.6;
        border-radius: 5px;
    `;

    // console.log('Info passed props:', props)

    return (
        <InfoDiv>
            <DatePicker value={props.value} onChange={props.onChange} />
            <button onClick={props.resetDate}>Today</button>
            <h3>Date: {props.nasaData.date}</h3>
            <h2>{props.nasaData.title}</h2>
            <p>{props.nasaData.explanation}</p>
        </InfoDiv>
    )
}

export default Information;