import styled from 'styled-components'
import deleteLogo from './../../assets/delete.png'

export const TableDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    min-height: 80vh;
`;

export const Table = styled.table`
    border: 3px solid black;
    border-radius: 5px;
    box-shadow: black 1px 4px;
    padding: 5px;
    width: 110%;
    background: goldenrod;
`;

export const TBody = styled.tbody`

`;

export const TR = styled.tr`
    border: 3px solid black;
`;

export const TH = styled.th`
    font-weight: 900;
    font-size: large;
`;

export const TD = styled.td`
    border: 3px solid black;
    text-align: center;
    font-size: medium;
    font-weight: 700;
    border-radius: 3px;
    background: linear-gradient(to top, orange 0%, #ffde17 100%);
    padding: 3px;
`;

export const DeleteButton = styled.button`
    border: none;
    background: linear-gradient(to top, orange 0%, #ffde17 100%);
    cursor: pointer;
    background-image: url(${deleteLogo});
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 30px;
    height: 30px;
`;  

export const DeleteLogo = styled.img`
    width: 30px;
    height: 30px;
`;