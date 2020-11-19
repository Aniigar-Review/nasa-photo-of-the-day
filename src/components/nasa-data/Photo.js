import React from 'react';
import styled from 'styled-components';

const Photo = (props) => {

    const Image = styled.img `
        margin-right: 20px;
        border: #D3D3D3 solid 5px;
        border-radius: 5px;
    `;

    // console.log('Photo passed prop:', props)

    return (
        <div>
            <Image className='photo' src={props.url} />
        </div>
    )
}

export default Photo;