/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */



function high(x){
    // Split the string into an array of individual words
    let arrOfWords = x.split(' ');

    // Initialize leading word & high score
    let leadingWord;
    let highestScore = 0;


    for (const word of arrOfWords){
        // Split the each word into an array of chars
        let arrOfChars = word.split('');

        // Reset current word score before iterating over new word
        let currentWordScore = 0;

        // Iterate over each char in word & tally score
        for (const char of arrOfChars){
            currentWordScore += char.charCodeAt(0) - 96;
        }

        // check if the words score beats the current highest, if so replace leadingWord with new leading word & score
        if (currentWordScore > highestScore){
            leadingWord = word;
            highestScore = currentWordScore;
        }
    }
    return leadingWord;
}




// Split each word by a space so each word is its own index in an array

// Iterate over the array
    // Separate each word into an array of it's characters 
    // Iterate over new array of chars
        // Use Ascii values to determine the actual value of each letter

            // Subtract 96 from each ascii value of each char to determine it's value & store the tally

            // Store the index of the current highest scoring word + it's score

            // Compare each new words score to the current highest scoring word's score

// Return the highest scoring word


