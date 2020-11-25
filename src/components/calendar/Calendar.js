import React from 'react';
import Calendar from 'react-calendar';


const DatePicker = (props) => {

    // console.log('PickDate passed props:', props)

    return (
        <div>
            <Calendar value={props.value} onChange={props.onChange}  />
        </div>
    )
}

export default DatePicker;