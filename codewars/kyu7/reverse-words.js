/* Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained. */

function reverseString(str) {
    let newStr = [];
    str = str.split('');
    let nextChar = str.length - 1;
    for (i = 0; i < str.length; i++){
        newStr.push(str[nextChar]);
        nextChar -= 1;
    }
    return newStr.join('');
}

function reverseWords(words){

}

let testString = "Test string is here!";
reverseString(testString);


// console.log(testString);
// // Initiate empty array to build new string
// let newArrayStr = [];

// // Make string into array
// let arrayString = testString.split('');
// console.log(arrayString);

// // Initiate a "last char" variable with the length of the array minus 1
// let nextChar = arrayString.length - 1;

// Iterate through array adding the "last char" indexed char to new string array, 
// decrementing last index each time
// for (i = 0; i < arrayString.length; i++){
//     newArrayStr.push(arrayString[nextChar]);
//     nextChar -= 1;
// }

// console.log('newArrayStr', newArrayStr);
// console.log(newArrayStr.join(''));
