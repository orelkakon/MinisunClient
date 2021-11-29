import React from 'react';
import { Machine, MachineDiv } from './style';
import { useNavigate } from "react-router-dom";
import BackButton from './../Back/index'

const Branch = (props) => {
    let history = useNavigate();

    const movePage = (path) => {
        history(path)
    }
    return (
        <div>
            {
                localStorage.getItem("loggedIn") === "1" ?
                <MachineDiv>
                    <BackButton url={'/controlPanel'} />
                    {
                        props.branch.machines.map((machine, index) => {
                            return (
                                <Machine key={index} onClick={() => movePage(`./${machine.name.replace(" ", "-")}`)}>{machine.name}</Machine>
                            )
                        })
                    }
                </MachineDiv>
                :
                <h3 style={{textAlign:"center", fontSize: '40px'}}>Are you admin? Please <a href="/" style={{color:"blue"}}>log in</a> again to continue</h3>
            }
        </div>

    );
};

export default Branch;