const n = Number(process.argv[2]);

// Hard code 1 & 0 for now
if (n === 1){
    return "1.00";
};

if (n === 0){
    return "0.00";
};

// Instantiate the divisor of 4
let divisor = 4;
let total = 1;

// For loop to run n times
for (i = 1; i < n; i++){
    total += 1 / divisor;
    divisor += 3;
}

// Round answer to 2 decimal places & convert to string
return total.toFixed(2);


