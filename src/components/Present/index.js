import React, { useState } from 'react';
import { FullPresent, ColumnFlex, Label, Option, Select, SendButton } from './style'

const Present = () => {
    const [year, setYear] = useState("")
    const handleSubmit = () => { 
        
    }
    return (
        <FullPresent>
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
            <SendButton onClick={() => handleSubmit()}>Submit</SendButton>
        </FullPresent>
    );
};

export default Present;