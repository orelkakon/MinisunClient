import styled from 'styled-components'

export const Timer = styled.div`
    text-align: center;
    height: 40px;
    width: 180px;
    background-color: ${props => props.color};
    font-size: x-large;
    font-weight: 600;
    border: 0.5px black solid;
    border-radius: 3px;
    box-shadow: black 1px 2px ;
    ${props => props.color === "maroon" && `animation: blinker 1s linear infinite;`};
    ${props => props.color === "maroon" && `@keyframes blinker { 50% { opacity: 0.2; }}`};
    @media(max-width: 960px) {
        padding-top: 8px;
    }

`;