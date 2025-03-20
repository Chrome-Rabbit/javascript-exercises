const leapYears = function(yearGiven) {

    let condition1 = (yearGiven % 4 === 0);
    let condition2 = (yearGiven % 100 === 0);
    let condition3 = (yearGiven % 400 === 0);

    if(condition1 && !condition2 || condition3){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
