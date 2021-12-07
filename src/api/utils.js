export const calculatePrevDate = (year, month) => {
    if (month !== 'January') {
        const respMonth = getPrevMonth(month);
        const respYear = year
        return { respYear, respMonth }
    } else {
        const respYear = getPrevYear(year)
        const respMonth = 'December'
        return { respYear, respMonth }
    }
}

const getPrevMonth = (month) => {
    switch (month) {
        case 'February':
            return 'January'
        case 'March':
            return 'February'
        case 'April':
            return 'March'
        case 'May':
            return 'April'
        case 'June':
            return 'May'
        case 'July':
            return 'June'
        case 'August':
            return 'July'
        case 'September':
            return 'August'
        case 'October':
            return 'September'
        case 'November':
            return 'October'
        case 'December':
            return 'November'
        default: 
            return null
    }
}

const getPrevYear = (year) => {
    const newYear = Number(year)
    const prevYear = newYear - 1;
    return String(prevYear)
}