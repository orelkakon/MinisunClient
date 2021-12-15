import styled from 'styled-components'

export const FullUpdate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
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

export const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Label = styled.label`
    font-size: x-large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Option = styled.option`
`;

export const Select = styled.select`
    width: 140px;
    height: 27px;
    font-size: large;
    border: black 2px solid;
`;

export const Input = styled.input`
    width: 210px;
    height: 27px;
    border: black 2px solid;
`;

export const SendButton = styled.button`
        width: 100px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: large;
        border: black 2px solid;
        background-color: white;
        border-radius: 5px;
        height: 50px;
        margin-right: 50px;
        cursor: pointer;
        :hover {
            background: linear-gradient(to top, orange 0%, #ffde17 0%);
            color: black;
            transition: 1s;
        }
`;

export const ResetButton = styled.button`
        width: 100px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: large;
        border: black 2px solid;
        background-color: white;
        border-radius: 5px;
        height: 50px;
        cursor: pointer;
        :hover {
            background: linear-gradient(to top, orange 0%, #ffde17 0%);
            color: black;
            transition: 1s;
        }
`;