import styled from 'styled-components'
import minisunLogo from './../../assets/minisun_logo.png'

export const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 960px) {
    }
`;

export const FullLogin = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border: black 2px solid;
    box-shadow: black 3px 2px;
    background: linear-gradient(to top, orange 0%, #ffde17 100%);
    border-radius: 10px;
    height: 300px;
    width: 70%;
    margin: auto;
    @media only screen and (min-width: 960px) {
        height: 280px;
        width: 30%;
    }
`;

export const UsernameInput = styled.input`
    height: 20px;
    width: 180px;
    font-size: 15px;
    border-radius: 7px;
    border-color: black;
    box-shadow: black 2px 1px;
`;

export const PasswordInput = styled.input`
    height: 20px;
    width: 180px;
    font-size: 15px;
    border-radius: 7px;
    border-color: black;
    box-shadow: black 2px 1px;

`;

export const LoginButton = styled.button`
    height: 40px;
    width: 80px;
    font-size: 20px;
    border-radius: 10px;
    border-color: black;
    background-color: white;
    box-shadow: black 2px 1px;
    cursor: pointer;
    :hover{
        color: white;
        background-color: black;
    }
`;

export const LogoImg = styled.div`
    background: url(${minisunLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 400px;
    height: 300px;
    @media only screen and (min-width: 960px) {
        height: 290px;
    }
`;