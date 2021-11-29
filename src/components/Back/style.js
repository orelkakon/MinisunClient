import styled from 'styled-components'
import backLogo from './../../assets/backLogo.png'

export const BackIcon = styled.button`
    position: fixed;
    background: url(${backLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border: none;
    width: 90px;
    height: 90px;
    left: 10px;
    z-index: 10;
    cursor: pointer;
    &:hover{
        transform: scale(0.8);
        transition-duration: 1s; 
    }
    @media(max-width: 960px) {
        bottom: 60px;
    }
    @media(min-width: 960px) {
        top: 30px;
    }
`;