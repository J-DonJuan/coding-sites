const findOdd = arr => {
    for (let i = 0; i < arr.length; i++){
        let counter = 0;
        for (let j = 0; j < arr.length; j++){
            if (arr[i] === arr[j]){
                counter++;
            }
        }
        if (counter % 2 != 0){
            return arr[i];
        }
    }
}

const testArray = [0,1,0,1,0];
const answer = findOdd(testArray);
console.log(answer);



