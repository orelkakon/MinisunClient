import React from 'react';
import { FullInsert, RowFlex } from './style'

const Insert = () => {
    return (
        <FullInsert>
            <RowFlex>
                <labal>Enter Year</labal>
                <select id="Year">
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </RowFlex>
            <RowFlex>
                <label>Enter Month</label>
                <select id="Month">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </RowFlex>
            <RowFlex>
                <label>Enter Clock Counter</label>
                <input type="number"></input>
            </RowFlex>
            <br />
            <button>Send</button>
        </FullInsert>
    );
};

export default Insert;