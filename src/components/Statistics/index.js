import React, { useState } from 'react';
import { FullStatistics, ColumnFlex, Label, Option, Select, SendButton } from './style'
import { ShowAverageBulbsData, ShowBulbsYearData } from './../../api/requests'

const Statistics = (props) => {
    const [year, setYear] = useState(new Date().getFullYear())
    const [average, setAverage] = useState(null)
    const [total, setTotal] = useState(null)
    const handleSubmit = async () => {
        const responseAvg = await ShowAverageBulbsData(props.branch, props.machine, year)
        const data = await ShowBulbsYearData(props.branch, props.machine, year)
        if(data){
            let responseTotal = 0
            data?.forEach(month => {
                responseTotal += Number(month.used_time);
            })
            setAverage(responseAvg)
            setTotal(responseTotal)
        }
    }
    return (
        <>
            <FullStatistics>
                <ColumnFlex>
                    <Label>Enter Year</Label>
                    <Select onChange={(event) => { setYear(event.target.value); setAverage(null) }} defaultValue={new Date().getFullYear()} id="Year">
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
                average !== null && (average === 0 ?
                    <h1 style={{ textAlign: "center" }}>{`The machine was not active in ${year}`}</h1> :
                    <>
                        <h2 style={{ textAlign: "center", textDecoration:"underline" }}>{`Total Usage Time - ${year}`}</h2>
                        <p style={{ textAlign: "center", fontSize:"large", direction:"ltr" }}>{`${total} hours`}</p>
                        <h2 style={{ textAlign: "center", textDecoration:"underline" }}>{`Average Usage Time - ${year}`}</h2>
                        <p style={{ textAlign: "center", fontSize:"large", direction:"ltr" }}>{`${Math.round(average * 100) / 100} hours per month`}</p>
                    </>
                )
            }
        </>
    );
};

export default Statistics;