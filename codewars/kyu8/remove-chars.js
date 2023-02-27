str = process.argv[2];

function removeChar(str){
    return str.slice(1,-1);
};

console.log(removeChar(str));