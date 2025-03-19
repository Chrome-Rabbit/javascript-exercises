// Defines a function that takes an array and any number of values
const removeFromArray = function(array, ...valuesToRemove) {
    // Creates a new array "result" by filtering out elements that match any value in "valuesToRemove"
    // "item" represents each element in the array; "!valuesToRemove.includes(item)" keeps items not in the list
    let result = array.filter(item => !valuesToRemove.includes(item));
    // Checks if result is empty then returns an empty array if so
    if (result.length === 0){
        return [];
    }
    // Returns the filtered array if any item remains
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
