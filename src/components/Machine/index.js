import React, { useEffect, useState } from 'react';
import { FullMachine, Title, OptionTask, OptionDiv } from './style';
import { getSwitchTimeHours } from './../../api/requests'
import BackButton from './../Back/index';
import LeftTime from './../LeftTime/index'
import Statistics from './../Statistics/index'
import Insert from './../Insert/index'
import Update from './../Update/index'
import Present from './../Present/index'

const Machine = (props) => {
    const [changeHours, setChangeHours] = useState(false)
    const [showStatitsic, setShowStatitsic] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [insertDetails, setInsertDetails] = useState(false)
    const [updateDetails, setUpdateDetails] = useState(false)
    const [hours, setHours] = useState(0)

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

    useEffect(() => {
        const fetchData = async () => {
            const response = await getSwitchTimeHours(props.branch, props.machine)
            setHours(response)
        }
        fetchData();
    }, [props.branch, props.machine, changeHours])
    return (
        <FullMachine>
            <BackButton url={`/controlPanel/${props.branch.replace(" ", "")}`} />
            <Title>{`${props.branch} - ${props.machine}`}</Title>
            <LeftTime hours={hours} />
            <br />
            <OptionDiv>
                <OptionTask onClick={() => handleClick(showStatitsic, setShowStatitsic)} turnOn={showStatitsic}>Show Statistics</OptionTask>
                <OptionTask onClick={() => handleClick(showDetails, setShowDetails)} turnOn={showDetails}>Show Time Details</OptionTask>
                <OptionTask onClick={() => handleClick(insertDetails, setInsertDetails)} turnOn={insertDetails}>Update Time Details</OptionTask>
                <OptionTask onClick={() => handleClick(updateDetails, setUpdateDetails)} turnOn={updateDetails}>Update Switch Times</OptionTask>
            </OptionDiv>
            {
                showStatitsic ? <Statistics branch={props.branch} machine={props.machine} /> :
                    showDetails ? <Present branch={props.branch} machine={props.machine} changeHours={changeHours} setChangeHours={setChangeHours}/> :
                        insertDetails ? <Insert branch={props.branch} machine={props.machine} changeHours={changeHours} setChangeHours={setChangeHours}/> :
                            updateDetails && <Update branch={props.branch} machine={props.machine} changeHours={changeHours} setChangeHours={setChangeHours}/>
            }
        </FullMachine>
    );
};

export default Machine;