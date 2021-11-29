import React from 'react';
import { Timer } from './style'

const index = (props) => {
    const getColor = (hours) => {
        if(hours < 40){
            return 'maroon'
        } else if(hours < 200){
            return 'red'
        } else if(hours < 300){
            return 'yellow'
        } else {
            return 'green'
        }
    }
    return (
        <Timer color = {getColor(props.hours)}>
            {`${props.hours} hours left`}
        </Timer>
    );
};

export default index;