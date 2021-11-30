import React from 'react';
import { Branch, PanelDiv } from './style'
import config from './../../config.json'
import { useNavigate } from "react-router-dom";
import BackButton from './../Back/index'

const Panel = () => {
    let history = useNavigate();

    const movePage = (path) => {
        history(path)
    }
    return (
        <div>
            {
                localStorage.getItem("loggedIn") === "1" ?
                    <>
                        <h1 style={{textAlign:"center"}}>Welcome Idan 🤩</h1>
                        <PanelDiv>
                            <BackButton url={'/'} />
                            {
                                config.minisunTree.map((branch, index) => {
                                    return (
                                        <Branch key={index} onClick={() => movePage(`./${branch.name.replace(" ", "")}`)}>{branch.name}</Branch>
                                    )
                                })
                            }
                        </PanelDiv>
                    </>
                    :
                    <h3 style={{ textAlign: "center", fontSize: '40px' }}>Are you admin? Please <a href="/" style={{ color: "blue" }}>log in</a> again to continue</h3>
            }
        </div>
    );
};

export default Panel;