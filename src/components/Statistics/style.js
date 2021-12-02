import styled from 'styled-components'

export const FullStatistics = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border: black 4px double;
    margin-top: 10px;
    background: linear-gradient(to top, orange 0%, #ffde17 100%);
    width: 250px;
    padding: 5px;
    box-shadow: black 5px 3px;
`;

export const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Label = styled.label`
    font-size: x-large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 5px ;
`;

export const Option = styled.option`
`;

export const Select = styled.select`
    width: 110px;
    height: 27px;
    font-size: large;
    border: black 2px solid;
`;

export const SendButton = styled.button`
        width: 100px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: large;
        border: black 2px solid;
        background: white;
        border-radius: 5px;
        height: 50px;
        cursor: pointer;
        :hover {
            background: linear-gradient(to top, orange 0%, #ffde17 0%);
            color: black;
            transition: 1s;
        }
`;