function f1 (callback) {   // define f1 with parameter callback
  setTimeout(function () { // simulate async operation with setTimeout
    let a =callback; // assign callback to a
    console.log('f1\n'+a); // log 'f1' and the value of a
    return a; // return a but it won't be used  it is supposed to return value to function who had called it 
    // since setTimeout is async the return value is not captured
    //also the fact f1 is already completed when setTimeout callback is executed
  }, 1000);
}

let c = f1("argument for f1");// call f1 with argument
console.log('c: '+c); // log c which will be undefined because f1 does not return anything
// since f1 is async the value of c is not set when f1 is called
// it will be set after 1 second when setTimeout callback is executed
// but by then the console.log('c: '+c) has already executed

///// solution using callback /////
function f1_with_callback (callback, cb) { // define f1_with_callback with parameters callback and cb
  setTimeout(function () { // simulate async operation with setTimeout
    let a = callback; // assign callback to a
    console.log('f1_with_callback\n'+a); // log 'f1_with_callback' and the value of a
    cb(a); // iss fuction mai ek dusra fuction call ker diya jo define ker rakha f1 ke arguement mai
    // recive kiya tha cb mai isliye cb(a) call kiya jaha a is the result we want to return
  }, 1000);
}

let k = f1_with_callback("argument for f1", function (result) {
  console.log('k: '+result); // log k which will be the result of f1_with_callback
}); // call f1_with_callback with argument and a callback function to handle the result
/// pure logic///
// f1  ek take something or return something wala fuction hai 
//ye do arguments lera ek text or ek dusra fuction jo iski call mai define hoga
//call huva f1 _with_callback 1 second baad execute hoga
//1 second baad setTimeout ka callback execute hoga jaha pe a mai text assign hoga or cb wala fuction call hoga
//f1 ab execute ho chuka hai per uski call mai diya wa function hamne cb mai rakh liya tha 
//or ab wo call ho raha hai jaha pe result mai a ka value pass ho rahi hai
//or wo function execute hoga jaha pe console.log('k: '+result); likha hai
//or result mai a ka value pass ho rahi hai to wo log ho jayega