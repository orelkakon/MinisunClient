import styled from 'styled-components'


export const PanelDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 60vh;
    align-content: center;
`;

export const Branch = styled.button`
    border: black 3px solid;
    margin: 10px;
    background-color: gold;
    border-radius: 5px;
    box-shadow: black 2px 1px;
    height: 150px;
    width: 150px;
    
    //inline details
    display: flex;
    color: black;
    font-size: 22px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 1s;
    @media(min-width: 960px) {
        height: 200px;
        width: 200px;
        font-size: 30px;
    }
    :hover {
        background-color: black;
        color: gold;
        box-shadow: gold 5px 4px;
    }
`;