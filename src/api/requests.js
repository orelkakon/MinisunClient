import axios from "axios"
import config from "./../config.json"
import { calculatePrevDate } from './utils'

const { protocol, host, port, urls, use_time } = config
const { getHours, insertBulbsDetails, deleteSpecificClockCounter, getMaxCounter, deleteSwitchBulbs, showAverageBulbsData, updateSwitchBulbs, showBulbsData, getSpecificClockCounter } = urls

export const InsertNewBulbsData = async (branch, machine, year, month, clockCounter) => {
    const prevDate = calculatePrevDate(year, month)
    const { respYear, respMonth } = prevDate
    const prevMonthData = await getSpecificRow(branch, machine, respYear, respMonth)
    let usedMonthCounter
    if(!prevMonthData){
        usedMonthCounter = clockCounter
        const response = await axios({
            method: 'post',
            url: `${protocol}://${host}:${port}/${insertBulbsDetails}`,
            data: {
                branch,
                machine,
                year,
                month,
                clockCounter,
                usedMonthCounter // to fix to most closet from below....
            }
        })
        return response.data;
    }
    usedMonthCounter = Number(clockCounter) - Number(prevMonthData)
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
        url: `${protocol}://${host}:${port}/${updateSwitchBulbs}`,
        data: {
            branch,
            machine,
            year,
            month,
        }
    })
}

export const ShowBulbsYearData = async (branch, machine, year) => {
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


export const deleteSwitchTimeBulbs = async (branch, machine) => {
    const response = await axios({
        method: 'post',
        url: `${protocol}://${host}:${port}/${deleteSwitchBulbs}`,
        data: {
            branch,
            machine
        }
    })
    return response.data
}

export const getSwitchTimeHours = async (branch, machine) => {
    const response = await axios({
        method: 'post',
        url: `${protocol}://${host}:${port}/${getHours}`,
        data: {
            branch,
            machine
        }
    })
    if (response.data) {
        const { year, month } = response.data
        let startSwitchTimeCounetr = await getSpecificRow(branch, machine, year, month)
        if(!Number(startSwitchTimeCounetr))
            startSwitchTimeCounetr = 0
        const maxCounterTime = await getMaxCounterTime(branch, machine)
        return use_time - Number(maxCounterTime.counter_time) + Number(startSwitchTimeCounetr)
    }
    return 0
}


export const getMaxCounterTime = async (branch, machine) => {
    const response = await axios({
        method: 'post',
        url: `${protocol}://${host}:${port}/${getMaxCounter}`,
        data:{
            branch,
            machine
        }
    })
    return response.data
}
