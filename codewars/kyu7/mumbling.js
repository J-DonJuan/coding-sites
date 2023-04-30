/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

let testStr1 = "abcd";
let testStr2 = "RqaEzty";
let testStr3 = "cwAt";


const accum = str => {
    let counter = 1;
    let newString = "";

    for (char of str){
        for (i = 0; i < counter; i++){
            if (i === 0){
                newString += char.toUpperCase();
            } else {
            newString += char.toLowerCase();
            }
        }
        newString += "-";
        counter++;
    }
    newString = newString.slice(0,-1);
    return newString;
}

let result = accum(testStr2);
console.log(result);
console.log(typeof(result));