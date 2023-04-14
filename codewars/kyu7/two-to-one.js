/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
the longest possible, containing distinct letters - 
each taken only once - coming from s1 or s2. 

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

const longest = (s1, s2) => {
    let resultArray = [];
    resultArray = addUniqueChars(s1, resultArray);
    resultArray = addUniqueChars(s2, resultArray);
    resultArray = sortAndJoin(resultArray);
    return resultArray;
}


// Make string A into an array
const convertStrToArray = str => str.split('');

// Sort and join array
const sortAndJoin = finalArray => finalArray.sort().join('');

// Add unique chars from string to array
const addUniqueChars = (string, existingArray) => {
    let charArray = convertStrToArray(string);
    charArray.forEach(char => {
        if (existingArray.includes(char) === false){
            existingArray.push(char);
        }
    })
        return existingArray;
}







