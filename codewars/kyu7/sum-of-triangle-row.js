n = process.argv[2]

function rowSumOddNumbers(n) {
  
  // Find the first number in the row
  let startingNumber = n * (n -1) + 1;
  let sum = 0;
  
  
  for (i = 0; i < n; i++){
    sum += startingNumber;
    startingNumber += 2;
  }
  return sum;
}

console.log(rowSumOddNumbers(n));


