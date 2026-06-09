let a=5;
a +=3; // a = a + 3
console.log(a);
a -=2; // a = a - 2
console.log(a);
a *=4; // a = a * 4
console.log(a);
a /=2; // a = a / 2
console.log(a);
a %=5;  // a = a % 5
console.log(a);
a **=3; // a = a ** 3
console.log(a);
let b=2;
b <<=1; // b = b << 1 right shift
console.log(b);
b >>=1; // b = b >> 1 left shift
console.log(b);
b &=1; // b = b & 1 and operation
console.log(b);
b |=2; // b = b | 2 or operation
console.log(b);
b ^=3; // b = b ^ 3 xor operation
console.log(b);
b=4;
a=7;
a+=b++; // a = a + b, then (b=b+1) post-increment
console.log(a);
b=4;
a=7;
a+=++b; // a = a + (b=b+1) pre-increment
console.log(a);