str = process.argv[2];
console.log(str);

function xo(str) {
    str = str.toLowerCase();
    let xCounter = 0;
    let oCounter = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == "x"){
            xCounter += 1;
        }
        if (str[i] == "o"){
            oCounter += 1;
        }
    }
    return xCounter === oCounter;

};

console.log(xo(str));