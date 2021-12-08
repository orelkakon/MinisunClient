import React from 'react';
import { TableDiv, Table, TBody, TR, TH, TD } from './style'

const TableView = (props) => {
    return (
        <TableDiv>
            <Table>
                <TBody>
                    <TR>
                        <TH>Month</TH>
                        <TH>Clcok Conter</TH>
                        <TH>Used Time</TH>
                    </TR>
                    {
                        props.data?.map((monthElement, index) => {
                            return (
                                <TR key={index}>
                                    <TD>{`${monthElement.month}`}</TD>
                                    <TD>{`${monthElement.counter_time} h`}</TD>
                                    <TD>{`${monthElement.used_time} h`}</TD>
                                </TR>
                            )
                        })
                    }
                </TBody>
            </Table>
        </TableDiv>
    );
};

export default TableView;