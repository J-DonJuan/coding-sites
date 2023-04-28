/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */



const rot13 = message => {
    // Create an alphabet array
    const alphabet = [];
    for (let i = 97; i <= 122; i++) {
        alphabet.push(String.fromCharCode(i));
    };

    let resultArray = [];

    for (char of message){
        if (char === char.toLowerCase()){
            let index = alphabet.indexOf(char);
            index += 13;
            index %= 26;
            resultArray.push(alphabet[index]);
        } else {
            let index = alphabet.indexOf(char.toLowerCase());
            index += 13;
            index %= 26;
            resultArray.push(alphabet[index].toUpperCase());
        }

    }
    return resultArray.join('');
}



str = "abcdz";
console.log(rot13(str));


