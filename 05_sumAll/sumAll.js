const sumAll = function(int1, int2) {

    let finalSum = 0;

    let min = Math.min(int1, int2);
    let max = Math.max(int1, int2);

    if(typeof int1 !== "number" || typeof int2 !== "number" || int1 < 0 || int2 < 0 || Number.isInteger(int1) === false || Number.isInteger(int2) === false ){
        return "ERROR"
    }

    for(let i = min; i <= max; i++){
        finalSum += i;
    }


    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
