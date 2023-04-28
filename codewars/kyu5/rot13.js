/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */

const generateAlphabet = () => {
    const alphabetArray = [];
    for (let i = 97; i <= 122; i++) {
        alphabetArray.push(String.fromCharCode(i));
    };
    return alphabetArray;
}

// Generate global alphabet array
let alphabet = generateAlphabet();

const reIndex = char => {
    let index = alphabet.indexOf(char.toLowerCase());
    index += 13;
    index %= 26;
    return index;
}

const rot13 = message => {
    let resultArray = [];

    for (char of message){
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
            resultArray.push(alphabet[reIndex(char)]);
        } else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
            resultArray.push(alphabet[reIndex(char)].toUpperCase());
        } else {
            resultArray.push(char);
        }
    }
    return resultArray.join('');
}



str = "aB Cdz!!";
console.log(rot13(str));


