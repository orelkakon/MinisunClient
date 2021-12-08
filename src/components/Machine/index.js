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
            const response = await getSwitchTimeHours(props.branch, props.machine, new Date().getFullYear(), new Date().toLocaleString('en-US', { month: 'long' }))
            setHours(response)
        }
        fetchData();
    }, [props.branch, props.machine])
    return (
        <FullMachine>
            <BackButton url={`/controlPanel/${props.branch.replace(" ", "")}`} />
            <Title>{`${props.branch} - ${props.machine}`}</Title>
            <LeftTime hours={hours} />
            <br />
            <OptionDiv>
                <OptionTask onClick={() => handleClick(showStatitsic, setShowStatitsic)} turnOn={showStatitsic}>Show average</OptionTask>
                <OptionTask onClick={() => handleClick(showDetails, setShowDetails)} turnOn={showDetails}>Show details</OptionTask>
                <OptionTask onClick={() => handleClick(insertDetails, setInsertDetails)} turnOn={insertDetails}>Insert details</OptionTask>
                <OptionTask onClick={() => handleClick(updateDetails, setUpdateDetails)} turnOn={updateDetails}>Update bulbs</OptionTask>
            </OptionDiv>
            {
                showStatitsic ? <Statistics branch={props.branch} machine={props.machine} /> :
                    showDetails ? <Present branch={props.branch} machine={props.machine} /> :
                        insertDetails ? <Insert branch={props.branch} machine={props.machine} /> :
                            updateDetails && <Update branch={props.branch} machine={props.machine} />
            }
        </FullMachine>
    );
};

export default Machine;