let a=5
let b=!a; // logical NOT (negation, a is truthy, so b is false)
console.log(b);
a= null && undefined; // logical AND
console.log(a);
a=0&&5; // logical AND  (if first is falsy, returns first)
console.log(a);
a= 7 && 3; // logical AND (if first is truthy, returns second)
console.log(a);
a= 'hello'||1 ; // logical OR (if first is truthy, returns first)
console.log(a);
a= b || 4; // logical OR (if first is falsy, returns second)
console.log(a);