/* Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number. */

// Test IP address
let ipAddress = "192.168.1.32";



// Split up 4 octets into separate variables & convert to a number
let octetArray = ipAddress.split('.');
let octet1 = Number(octetArray[0]);
let octet2 = Number(octetArray[1]);
let octet3 = Number(octetArray[2]);
let octet4 = Number(octetArray[3]);

// Convert each octet into a binary representation


// Convert each octet to binary




// Convert 32 bit binary address to a 32 bit number representation



