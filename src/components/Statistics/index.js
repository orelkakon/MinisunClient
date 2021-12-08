import React, { useState } from 'react';
import { FullStatistics, ColumnFlex, Label, Option, Select, SendButton } from './style'
import { ShowAverageBulbsData } from './../../api/requests'

const Statistics = (props) => {
    const [year, setYear] = useState(new Date().getFullYear())
    const [result, setResult] = useState(null)
    const handleSubmit = async () => {
        const response = await ShowAverageBulbsData(props.branch, props.machine, year)
        setResult(response)
    }
    return (
        <>
            <FullStatistics>
                <ColumnFlex>
                    <Label>Enter Year</Label>
                    <Select onChange={(event) => { setYear(event.target.value); setResult(null) }} defaultValue={new Date().getFullYear()} id="Year">
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
            </FullStatistics>
            {
                result !== null && (result === 0 ?
                    <h1 style={{ textAlign: "center" }}>{`The machine was not active in ${year}`}</h1> :
                    <>
                        <h2 style={{ textAlign: "center", textDecoration:"underline" }}>{`Average Usage Time - ${year}`}</h2>
                        <p style={{ textAlign: "center", fontSize:"x-large", direction:"ltr" }}>{`${Math.round(result * 100) / 100} hours per month`}</p>
                    </>
                )
            }
        </>
    );
};

export default Statistics;