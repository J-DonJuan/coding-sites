/* Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number. */

const ipToInt32 = ip => {
    return convertToTotal(convertToBinaryString(ip));
}

// Convert single octet into a binary representation
const convertToBinary = sampleNum => {
    let digitRepresentation = 128;
    let newString = [];
    for (i = 0; i < 8; i++){
        if (sampleNum >= digitRepresentation) {
            newString.push("1");
            sampleNum -= digitRepresentation;
        } else {
            newString.push("0")
        }
        digitRepresentation = digitRepresentation / 2;
    }
    return newString.join('');
}

// Convert entire ip address to single binary string
const convertToBinaryString = ipAddress => {
    let octetArray = ipAddress.split('.');
    return convertToBinary(Number(octetArray[0])) + convertToBinary(Number(octetArray[1]))
    + convertToBinary(Number(octetArray[2])) + convertToBinary(Number(octetArray[3]));
}

// Convert binary string to total number representation
const convertToTotal = binaryString => {
    let total = 0;
    let bIndex = 31;
    for (const char of binaryString){
        if (char === "1"){
            total += 2 ** bIndex;
        }
        bIndex -= 1;
    }
    return total;
}