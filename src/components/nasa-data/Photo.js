import React from 'react';

const Photo = (props) => {

    console.log('Photo passed prop:', props)

    return (
        <div>
            <img className='photo' src={props.url} />
        </div>
    )
}

export default Photo;