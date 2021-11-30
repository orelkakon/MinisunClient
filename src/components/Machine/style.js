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
    color: gold;
    text-shadow: black 2px 2px;
    text-decoration: underline;
`;

export const OptionTask = styled.button`
    height: 100px;
    width: 100px;
    font-size: large;
    margin: 5px;
    border: ${props => props.turnOn ? 'green 4px solid;' : 'gold 3px solid;'};
    opacity: ${props => props.turnOn ? 1 : 0.7};
    border-radius: 10px;
    background-color: black;
    color: gold;
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
`;

