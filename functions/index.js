function convertYears(humanYear) {
    if (!humanYear || typeof humanYear === 'string') {
        // console.log(humanYear)
        console.error('Year cannot be string or empty!')
    } else {
        let convertedYears = humanYear * 7;
        console.log(`${humanYear} human year converted to dog year is ${convertedYears} `)
    }
}

convertYears(null)

function getBookReadGoal(bookCount) {
    if (typeof bookCount === 'string' || !bookCount) {
        console.error('This function doesn\'t accept wrong parameters')
    } else {
        let readTime = 365 / bookCount;
        console.log(`To read ${bookCount} books in one year you will have ${Math.round(readTime)} days to read one book`)
    }
}

getBookReadGoal(20)

function convertDaysToWeeks(dayCount) {
    let dayRemains = dayCount % 7;
    let dayConverter = (dayCount - dayRemains) / 7;
    console.log(`${dayCount} days is ${dayConverter} weeks`)
}

convertDaysToWeeks(35)

function convertDaysToYears(dayCount) {
    let daysRemain = dayCount % 365;
    let yearConverter = (dayCount - daysRemain) / 365;
    console.log(`${dayCount} days is ${yearConverter} years`)
}

convertDaysToYears(2024)

function convertYearsToHours(yearCount) {
    let hourCounter = (yearCount * 365) * 24;
    console.log(`${yearCount} years has ${hourCounter} hours`)
}

convertYearsToHours(2)

function convertMonthsToHours(monthCount) {
    let hourCounter = (monthCount * 30) * 24;
    console.log(`${monthCount} months has ${hourCounter} hours`)
}

convertMonthsToHours(3)

function convertMonthsToMinutes(monthCount) {
    let hourCounter = (monthCount * 30) * 24;
    let minuteCounter = hourCounter * 60;

    console.log(`${monthCount} months has ${minuteCounter} minutes`)
}

convertMonthsToMinutes(2)

function convertDaysToSelected(dayCount, convertType) {

    switch (convertType) {
        case "0":
            let convertToMinutes = (dayCount * 24) * 60;
            console.log(`${convertToMinutes} minutes`)
            break;
        case "1":
            let convertToHours = dayCount * 24;
            console.log(`${convertToHours} hours`)
            break;
        case "2":
            let daysRemainToWeek = dayCount % 7;
            let convertToWeeks = (daysCount - daysRemainToWeek) / 7;
            console.log(`${convertToWeeks} weeks`)
            break;
        case "3":
            let daysRemainToMonth = dayCount % 30;
            let convertToMonths = (dayCount - daysRemainToMonth) / 30;
            console.log(`${convertToMonths} months`)
            break;
        case "4":
            let daysRemainToYear = dayCount % 365;
            let convertToYears = (dayCount - daysRemainToYear) / 365;
            console.log(`${convertToYears}`)
            break;
        default:
            console.log(`${dayCount * 24} hours`)
    }
}
convertDaysToSelected(10,1)