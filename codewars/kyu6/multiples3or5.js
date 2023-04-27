/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once. */

const solution = number => {
    number -= 1;
    let multiplesArray = [];
    if (number < 0){
        return 0;
    };

    for (number; number > 0; number--){
        if (number % 3 == 0){
            multiplesArray.push(number)
        }
        if (number % 5 == 0){
            if (multiplesArray.includes(number)){
                continue;
            } else {
                multiplesArray.push(number);
            }
        }
    };

    if (multiplesArray.length === 0){
        return 0;
    } else {
        return multiplesArray.reduce( (acc, num) => acc + num);
    }
}

// Testing function
console.log(solution(80));
console.log(solution(10));
console.log(solution(1));
console.log(solution(2));
console.log(solution(-38));
