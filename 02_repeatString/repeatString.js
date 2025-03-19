const repeatString = function(string, num) {
    

let counter = 0;
let result = "";

/* let originalString = string; */
/* Attempt at a for loop
for (let i = 0; i < num -1; i++){
    string += originalString;
}

if (num <= -1){
    return "ERROR"
}

if (num === 0){
    return ""
}

    return string;
*/

while (true){

    if(num < 0){
        let result = "ERROR";
        return result;
    }

    if(num === 0){
        return result;
    }

    if(counter < num){
        result += string;
        counter++;
    }
    else{
        return result;
    }

}


};

// Do not edit below this line
module.exports = repeatString;
