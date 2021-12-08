import styled from 'styled-components'

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