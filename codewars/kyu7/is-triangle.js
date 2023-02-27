
/* Implement a function that accepts 3 integer values a, b, c. 
The function should return true if a triangle can be built with the 
sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted). */

let a1 = Number(process.argv[2]);
let b1 = Number(process.argv[3]);
let c1 = Number(process.argv[4]);

const isTriangle = (a,b,c) => {
    if (a + b > c && a + c > b && b + c > a){
        return true;
    } else {
        return false;
    }
}

console.log(isTriangle(a1,b1,c1));