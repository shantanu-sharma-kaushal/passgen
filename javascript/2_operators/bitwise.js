let a =10; // (00000000 00000000 00000000 00001010 in binary)
let b=4; //   (00000000 00000000 00000000 00000100 in binary)
c= a & b; //  (00000000 00000000 00000000 00000000 ,1 for each bit position, if both bits are 1, result is 1 else 0 ,bitwise AND)
console.log(c);
c= a | b; //  (00000000 00000000 00000000 00001110 ,1 for each bit position, if either bit is 1, result is 1 else 0 ,bitwise OR)
console.log(c);
c= a ^ b; //  (00000000 00000000 00000000 00001110 ,1 for each bit position, if bits are different, result is 1 else 0 , bitwise XOR)
console.log(c);
c= ~a; // bitwise NOT , in 2's complement representation -(a+1)
console.log(c);
c=32; // (00000000 00000000 00000000 00100000 in binary)
c= c << 2; // left shift, shifts bits to left, fills 0 from right can be interpreted as multiplying by 2 for each shift
console.log(c);
c= c >> 3; // right shift, shifts bits to right, fills 0 from left can be interpreted as dividing by 2 for each shift
console.log(c);  