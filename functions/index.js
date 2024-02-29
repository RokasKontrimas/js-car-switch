function convertYears(humanYear) {
    if (typeof humanYear === 'string' || !humanYear) {
        // console.log(humanYear)
        console.error('Year cannot be string or empty!')
    } else {
        let convertedYears = humanYear * 7;
        console.log(`${humanYear} human year converted to dog year is ${convertedYears} `)
    }
}

convertYears(12)

function getBookReadGoal(bookCount) {
    let readTime = 365 / bookCount;
    if (typeof bookCount === 'string' || !bookCount) {
        console.error('This function doesn\'t accept wrong parameters')
    } else {
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