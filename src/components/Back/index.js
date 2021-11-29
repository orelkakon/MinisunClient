import React from 'react';
import { BackIcon } from './style'
import { useNavigate } from "react-router-dom";


const BackButton = (props) => {
    let history = useNavigate();

    const movePage = (path) => {
        history(path)
    }
    return (
        <>
            <BackIcon onClick={() => movePage(props.url)}/>
        </>
    );
};

export default BackButton;