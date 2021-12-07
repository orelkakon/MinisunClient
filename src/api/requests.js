import axios from "axios"
import config from "./../config.json"
import { calculatePrevDate } from './utils'

const { protocol, host, port, urls } = config
const { insertBulbsDetails, deleteSpecificClockCounter, deleteSwitchBulbs, showAverageBulbsData, updateNewSwitchBulbs, showBulbsData, getSpecificClockCounter } = urls

export const InsertNewBulbsData = async (branch, machine, year, month, clockCounter) => {
    const prevDate = calculatePrevDate(year, month)
    const { respYear, respMonth } = prevDate
    const prevMonthData = await getSpecificRow(branch, machine, respYear, respMonth)
    const usedMonthCounter = Number(clockCounter) - Number(prevMonthData)
    if (usedMonthCounter > 0) {
        const response = await axios({
            method: 'post',
            url: `${protocol}://${host}:${port}/${insertBulbsDetails}`,
            data: {
                branch,
                machine,
                year,
                month,
                clockCounter,
                usedMonthCounter
            }
        })
        return response.data;
    }
    return false
}

export const UpdateNewSwitchBulbs = async (branch, machine, year, month) => {
    return await axios({
        method: 'post',
        url: `${protocol}://${host}:${port}/${updateNewSwitchBulbs}`,
        data: {
            branch,
            machine,
            year,
            month,
        }
    })
}

export const ShowBulbsData = async (branch, machine, year) => {
    const response = await axios({
        method: 'post',
        url: `${protocol}://${host}:${port}/${showBulbsData}`,
        data: {
            branch,
            machine,
            year
        }
    })
    return response.data;
}

export const ShowAverageBulbsData = async (branch, machine, year) => {
    const response = await axios({
        method: 'post',
        url: `${protocol}://${host}:${port}/${showAverageBulbsData}`,
        data: {
            branch,
            machine,
            year
        }
    })
    return response.data.usedAvg;
}

const getSpecificRow = async (branch, machine, year, month) => {
    const response = await axios({
        method: 'post',
        url: `${protocol}://${host}:${port}/${getSpecificClockCounter}`,
        data: {
            branch,
            machine,
            year,
            month
        }
    })
    return response.data.counter_time
}

export const deleteSpecificRow = async (branch, machine, year, month) => {
    const response = await axios({
        method: 'post',
        url: `${protocol}://${host}:${port}/${deleteSpecificClockCounter}`,
        data: {
            branch,
            machine,
            year,
            month
        }
    })
    return response.data
}


export const deleteSwitchTimeBulbs = async (branch, machine, year, month) => {
    const response = await axios({
        method: 'post',
        url: `${protocol}://${host}:${port}/${deleteSwitchBulbs}`,
        data: {
            branch,
            machine,
            year,
            month
        }
    })
    return response.data
}