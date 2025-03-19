const reverseString = function(string) {

    let makeArray = string.split("")
    makeArray.reverse();

    let result = makeArray.join("");
    return result;

};

// Do not edit below this line
module.exports = reverseString;
