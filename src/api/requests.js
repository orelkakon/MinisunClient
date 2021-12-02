import axios from "axios"
import config from "./../config.json"

const {protocol, host, port, urls} = config
const {insertNewBulbsData, showAverageBulbsData, updateNewSwitchBulbs, showBulbsData} = urls

export const insertNewBulbsData = async (branch, machine, year, month, clockCounter) => {
    const prevDate = calculatePrevDate(year, month)
    const prevClockCounter = await getSpecificRow()
    axios({
        method: 'get',
        url: `${protocol}://${host}:${port}/${insertNewBulbsData}`,
        data: {
            branch,
            machine,
            year,
            month,
            clockCounter
        }
    })
}

export const updateNewSwitchBulbs = (branch, machine, year, month) => {
    axios({
        method: 'get',
        url: `${protocol}://${host}:${port}/${updateNewSwitchBulbs}`,
        data: {
            branch,
            machine,
            year,
            month,
            clockCounter
        }
    })
}

export const showBulbsData = (branch, machine, year) => {
   axios({
        method: 'get',
        url: `${protocol}://${host}:${port}/${showBulbsData}`,
        data: {
            branch,
            machine,
            year,
            month,
            clockCounter
        }
    })
}

export const showAverageBulbsData = (branch, machine, year) => {
   axios({
        method: 'get',
        url: `${protocol}://${host}:${port}/${showAverageBulbsData}`,
        data: {
            branch,
            machine,
            year,
            month,
            clockCounter
        }
    })
}

export const getSpecificRow = async (branch, machine, year, month) => {
    axios({
        method: 'get',
        url: `${protocol}://${host}:${port}/${getSpecificClockCounter}`,
        data: {
            branch,
            machine,
            year,
            month,
            clockCounter
        }
    })
}

