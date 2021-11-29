import React from 'react';
import { Branch, PanelDiv } from './style'
import config from './../../config.json'
import { useNavigate } from "react-router-dom";

const Panel = () => {
    let history = useNavigate();

    const movePage = (path) => {
        history(path)
    }
    return (
        <div>
            {
                localStorage.getItem("loggedIn") === "1" &&
                <PanelDiv>
                    {
                        config.minisunTree.map(branch => {
                            return (
                                <Branch onClick={() => movePage(`./${branch.name.replace(" ","")}`)}>{branch.name}</Branch>
                            )
                        })
                    }
                </PanelDiv>
            }
        </div>
    );
};

export default Panel;