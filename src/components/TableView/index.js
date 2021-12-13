import React, { useEffect } from 'react';
import { TableDiv, Table, TBody, TR, TH, TD, DeleteButton, DeleteLogo } from './style'
import { deleteSpecificRow } from './../../api/requests'
import { notifyError, notifySuccess } from './../../App'


const TableView = (props) => {
    const handleDelete = async (branch, machine, year, month) => {
        const result = await deleteSpecificRow(branch, machine, year, month)
        props.setChangeHours(!props.changeHours)
        props.setChangeData(!props.changeData)
        result ? notifySuccess(`Deleted Successful - ${month} ${year}`) : notifyError("Failed to delete")
    }
    useEffect(() => {
        
    },[props.year])
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
                                    <TD><DeleteButton onClick={() => handleDelete(props.branch, props.machine, props.year, monthElement.month)}></DeleteButton></TD>
                                </TR>
                            )
                        })
                    }
                </TBody>
            </Table>
        </TableDiv >
    );
};

export default TableView;