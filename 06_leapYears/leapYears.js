const leapYears = function(year) {
    // leap:
    //      %4 = 0      &&
    //     (%100 != 0   ||  %400 == 0)
    return (
        (year % 4 == 0) &&
        (year % 100 != 0 || year % 400 == 0)
    )
};

// Do not edit below this line
module.exports = leapYears;
