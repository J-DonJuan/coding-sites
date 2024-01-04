/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.
*/

const isPangram = str => {

    // Convert string to all lowercase 
    str = str.toLowerCase();
    console.log(str);

    // Iterate over the lowercase alphabet using ASCII values
    for (var i = 97; i <= 122; i++) {
        if (str.includes(String.fromCharCode(i))){
            continue;
        } else {
            // This character of the alphabet wasn't in the string, so it is NOT a Pangram
            return false;
        }
    }
    // All characters of the alphabet were in the strong, so it IS a Pangram
    return true;
}


// Iterate through string




const testString = "Henlo Frien";
const testStrPangram = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(testString));
console.log(isPangram(testStrPangram));