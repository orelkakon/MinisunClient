import React, { useState } from 'react';
import { FullMachine, Title, OptionTask, OptionDiv } from './style';
import BackButton from './../Back/index';
import LeftTime from './../LeftTime/index'
import Statistics from './../Statistics/index'
import Insert from './../Insert/index'
import Update from './../Update/index'
import Present from './../Present/index'

const Machine = (props) => {
    const [showStatitsic, setShowStatitsic] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [insertDetails, setInsertDetails] = useState(false)
    const [updateDetails, setUpdateDetails] = useState(false)

    const turnOffAll = () => {
        setShowStatitsic(false)
        setUpdateDetails(false)
        setInsertDetails(false)
        setShowDetails(false)
    }

    const handleClick = (kind, setKind) => {
        if (kind) {
            setKind(false)
        }
        else {
            turnOffAll()
            setKind(true)
        }
    }
    return (
        <FullMachine>
            <BackButton url={`/controlPanel/${props.branch.replace(" ", "")}`} />
            <Title>{`${props.branch} - ${props.machine}`}</Title>
            <LeftTime hours={400} />
            <br />
            <OptionDiv>
                <OptionTask onClick={() => handleClick(showStatitsic, setShowStatitsic)} turnOn={showStatitsic}>Show statistics</OptionTask>
                <OptionTask onClick={() => handleClick(showDetails, setShowDetails)} turnOn={showDetails}>Show details</OptionTask>
                <OptionTask onClick={() => handleClick(insertDetails, setInsertDetails)} turnOn={insertDetails}>Insert details</OptionTask>
                <OptionTask onClick={() => handleClick(updateDetails, setUpdateDetails)} turnOn={updateDetails}>Update details</OptionTask>
            </OptionDiv>
            {
                showStatitsic ? <Statistics /> :
                showDetails ? <Present /> :
                insertDetails ? <Insert /> :
                updateDetails && <Update /> 
            }
        </FullMachine>
    );
};

export default Machine;