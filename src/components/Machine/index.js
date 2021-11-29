import React from 'react';
import { FullMachine, Title, OptionTask, OptionDiv } from './style';
import BackButton from './../Back/index';
import LeftTime from './../LeftTime/index'

const Machine = (props) => {
    return (
        <FullMachine>
            <BackButton url={`/controlPanel/${props.branch.replace(" ", "")}`} />
            <Title>{`${props.branch} - ${props.machine}`}</Title>
            <LeftTime hours={400} />
            <br />
            <OptionDiv>
                <OptionTask>Show statistics</OptionTask>
                <OptionTask>Show data</OptionTask>
                <OptionTask>Insert data</OptionTask>
                <OptionTask>Update data</OptionTask>
            </OptionDiv>
        </FullMachine>
    );
};

export default Machine;