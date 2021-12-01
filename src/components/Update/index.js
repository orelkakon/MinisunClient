import React, { useState } from 'react';
import { FullUpdate, ColumnFlex, Label, Option, Select, SendButton } from './style'

const Update = () => {
    const [year, setYear] = useState("")
    const [month, setMonth] = useState("")
    const handleSubmit = () => { 
        
    }
    return (
        <FullUpdate>
            <ColumnFlex>
                <Label>Enter Year</Label>
                <Select onChange={(event) => setYear(event.target.value)} defaultValue={new Date().getFullYear()} id="Year">
                    <Option value="2016">2016</Option>
                    <Option value="2017">2017</Option>
                    <Option value="2018">2018</Option>
                    <Option value="2019">2019</Option>
                    <Option value="2020">2020</Option>
                    <Option value="2021">2021</Option>
                    <Option value="2022">2022</Option>
                    <Option value="2023">2023</Option>
                    <Option value="2024">2024</Option>
                    <Option value="2025">2025</Option>
                </Select>
            </ColumnFlex>
            <br />
            <ColumnFlex>
                <Label>Enter Month</Label>
                <Select onChange={(event) => setMonth(event.target.value)} defaultValue={new Date().toLocaleString('en-US', {month: 'long'})} id="Month">
                    <Option value="January">January</Option>
                    <Option value="February">February</Option>
                    <Option value="March">March</Option>
                    <Option value="April">April</Option>
                    <Option value="May">May</Option>
                    <Option value="June">June</Option>
                    <Option value="July">July</Option>
                    <Option value="August">August</Option>
                    <Option value="September">September</Option>
                    <Option value="October">October</Option>
                    <Option value="November">November</Option>
                    <Option value="December">December</Option>
                </Select>
            </ColumnFlex>
            <br />
            <SendButton onClick={() => handleSubmit()}>Submit</SendButton>
        </FullUpdate>
    );
};

export default Update;