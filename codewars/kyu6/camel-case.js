/*Complete the method/function so that it converts dash delimited words into camel casing. The first word within the output should 
be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

 */

function toCamelCase(str){
    // Separate words into an array of strings, separated by the dash
    const strArray = str.split('-');

    // Create separate arrays, one for the first word & another for all the remaining words
    

    // Capitalize the first character of each string of an array. Return an array with capitalized strings
    const newStr = strArray.map(
        (str) => {
        const firstChar = str.charAt(0);
        return firstChar.toUpperCase() + str.slice(1);
    }
    );

    // Ensure the first word retains its capitalization

    return newStr.join('');
};


console.log(toCamelCase("the-stealth-warrior"));


