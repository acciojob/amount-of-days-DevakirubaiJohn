//your JS code here. If required.
function daysOfAYear(year) {
    // check if year is divisible by 4
    if (year % 4 === 0) {
        // check if year is divisible by 100
        if (year % 100 === 0) {
            // check if year is divisible by 400
            if (year % 400 === 0) {
                // it's a leap year
                return 366;
            } else {
                // it's not a leap year
                return 365;
            }
        } else {
            // it's a leap year
            return 366;
        }
    } else {
        // it's not a leap year
        return 365;
    }
}