import styled from 'styled-components'

export const FullMachine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    min-height: 80vh;
`;

export const Title = styled.h1`
    font-size: xx-large;
    text-align: center;
    color: gold;
    text-shadow: gray 2px 1px;
    /* text-decoration: underline; */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const OptionTask = styled.button`
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 5px;
    border: ${props => props.turnOn ? 'black 3px solid;' : 'gold 3px solid;'};
    opacity: ${props => props.turnOn ? 1 : 0.7};
    border-radius: 10px;
    background: linear-gradient(to top, orange 0%, #ffde17 100%);
    color: black;
    cursor: pointer;
    transition: 1s;
    @media(max-width: 960px) {
        height: 90px;
        width: 90px;
        font-size: 15px;
    }
    :hover {
        border: black 3px solid;
        background-color: gold;
        color: black;
    }
`;

export const OptionDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`;

