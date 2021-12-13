import React, { useState, useEffect } from 'react';
import TableView from './../TableView/index'
import { FullPresent, ColumnFlex, Label, Option, Select, SendButton } from './style'
import { ShowBulbsYearData } from './../../api/requests'
import { sortByMonth } from './../../api/utils'

const Present = (props) => {
    const [year, setYear] = useState(new Date().getFullYear())
    const [data, setData] = useState(null)
    const [table, setTable] = useState(false)
    const [changeData, setChangeData] = useState(false)
    const handleSubmit = () => {
        const getYearData = async () => {
            const response = await ShowBulbsYearData(props.branch, props.machine, year)
            const sortedData = sortByMonth(response)
            setData(sortedData)
        }
        getYearData()
        setTable(true)
    }
    useEffect(() => {
        handleSubmit()
    },[changeData])
    return (
        <>
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
            <br />
            {
                table && <TableView data={data} branch={props.branch} machine={props.machine} year={year} changeHours={props.changeHours} setChangeHours={props.setChangeHours} changeData={changeData} setChangeData={setChangeData}/>
            }
        </>
    );
};

export default Present;