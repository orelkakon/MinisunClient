import React from 'react';
import { Machine, MachineDiv } from './style';
import { useNavigate } from "react-router-dom";

const Branch = (props) => {
    let history = useNavigate();

    const movePage = (path) => {
        history(path)
    }
    return (
        <MachineDiv>
            {
                props.branch.machines.map((machine, index) => {
                    return (
                        <Machine key={index} onClick={() => movePage(`./${machine.name.replace(" ", "-")}`)}>{machine.name}</Machine>
                    )
                })
            }
        </MachineDiv>
    );
};

export default Branch;