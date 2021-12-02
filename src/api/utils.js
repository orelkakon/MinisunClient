export const calculatePrevDate = (year, month) => {
    if (month !== 'January') {
        const prevMonth = getPrevMonth(month);
        return { year, prevMonth }
    } else {
        const prevYear = getPrevYear(year)
        const oldMonth = 'December'
        return {prevYear, oldMonth}
    }
}

export const getPrevMonth = (month) => {
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
    }
}

export const getPrevYear = (year) => {
    const year = Number(year)
    const prevYear = year - 1;
    return String(prevYear)
}