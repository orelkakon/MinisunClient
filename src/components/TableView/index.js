import React, { useEffect } from 'react';
import { TableDiv, Table, TBody, TR, TH, TD, DeleteButton, ExcelButton } from './style'
import { deleteSpecificRow } from './../../api/requests'
import { notifyError, notifySuccess } from './../../App'
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const TableView = (props) => {

    const handleDelete = async (branch, machine, year, month) => {
        const result = await deleteSpecificRow(branch, machine, year, month)
        props.setChangeHours(!props.changeHours)
        props.setChangeData(!props.changeData)
        result ? notifySuccess(`Deleted Successful - ${month} ${year}`) : notifyError("Failed to delete")
    }

    const dataSet = [
        {
            columns: [
                { title: "Month", style: { font: { sz: "18", bold: true } }, width: { wpx: 135 } },
                { title: "Clock Counter", style: { font: { sz: "18", bold: true } }, width: { wpx: 135 } },
                { title: "Used Time", style: { font: { sz: "18", bold: true } }, width: { wpx: 135 } }
            ],
            data: props.data?.map((monthElement) => [
                { value: monthElement.month, style: { font: { sz: "12" } } },
                { value: Number(monthElement.counter_time), style: { font: { sz: "12" } } },
                { value: Number(monthElement.used_time), style: { font: { sz: "12" } } }
            ])
        }
    ]
    
    useEffect(() => {

    }, [props.year])
    return (
        <TableDiv>
            <Table>
                <TBody>
                    <TR>
                        <TH>Month</TH>
                        <TH>Clcok Conter</TH>
                        <TH>Used Time</TH>
                        {
                            props.data?.length > 0 &&
                            <TH>
                                <ExcelFile
                                    type="button"
                                    filename={`${props.branch.replace(" ", "")}_${props.machine.replace(" ", "")}_${props.year}`}
                                    element={<ExcelButton></ExcelButton>}
                                >
                                    <ExcelSheet
                                        dataSet={dataSet}
                                        name={`${props.branch} - ${props.machine} - ${props.year}`}
                                    >
                                    </ExcelSheet>
                                </ExcelFile>
                            </TH>
                        }
                    </TR>
                    {
                        props.data?.map((monthElement, index) => {
                            return (
                                <TR key={index}>
                                    <TD>{`${monthElement.month}`}</TD>
                                    <TD>{`${monthElement.counter_time} h`}</TD>
                                    <TD>{`${monthElement.used_time} h`}</TD>
                                    <TD icon={true}><DeleteButton onClick={() => handleDelete(props.branch, props.machine, props.year, monthElement.month)}></DeleteButton></TD>
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