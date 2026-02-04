/// what is promiswe ///
// promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// it is a placeholder for a value that is not yet known but will be known in the future
// a promise can be in one of three states:
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.
// a promise is created using the Promise constructor which takes a function as an argument
// this function is called the executor function and it takes two arguments: resolve and reject
// resolve is a function that is called when the promise is fulfilled
// reject is a function that is called when the promise is rejected
// once a promise is created it can be consumed using the "then" and catch "methods"
// then method is called when the promise is fulfilled and it takes a function as an argument
//////////code////////
function f1_promise (argument) { // define f1_promise with parameter argument
  let promise1 = new Promise(function (resolve, reject) { // return a new promise
    setTimeout(function () { // simulate async operation with setTimeout
      let a = argument; // assign argument to a
      console.log('f1_promise'); // log 'f1_promise' and the value of a
      if(a%2===0) 
      {
        console.log("f1_promise fullfiled 3 second delay");
      resolve(a); // call resolve with a to fulfill the promise
      } else {
        console.log("f1_promise rejected 3 second delay");
      reject(a); //resolve or reject return in variable promise
      }
    }, 3000);
  })
  return promise1; // return the promise, ye f1_promise ka return hai iski call mai value return ker re ga
} 

/*let p = f1_promise(Math.floor(Math.random()*10)); 
p.then(function (result) { //then ka pahala code tab chlega jb promise resolve hoga ye a ki value lega
    console.log('p: '+result); 
}, function (error) { // ye dusra function tab chlega jb promise reject hoga
    console.log(error + " odd number not allowed");
});*/

/////////////////// more then 1 promises//////////////
function f2_promise (argument) { // define f2_promise with parameter argument
  let promise2 = new Promise(function (resolve, reject) { // return a new promise
    setTimeout(function () { // simulate async operation with setTimeout
      let b = argument * argument; // assign argument square to b
      console.log('f2_promise'); // log 'f2_promise' and the value of b
      if(b<50)
      {
        console.log("f2_promise fulfilled 1 second delay");
      resolve(b); // call resolve with b to fulfill the promise
      } else {
        console.log("f2_promise rejected 1 second delay");
      reject(b);
      } //resolve or reject return in variable promise
    }, 1000);
  })
    return promise2; // return the promise, ye f2_promise ka return hai iski call mai value return ker re ga
}
let p1 = f1_promise(Math.floor(Math.random()*10)); 
p1
    .then(function (result) 
    { //then ka pahala code tab chlega jb promise resolve hoga ye a ki value lega
        console.log('p: '+result); 
        return f2_promise(result); // return f2_promise with result of f1_promise
    }, function (error) 
    { // ye dusra function tab chlega jb promise reject hoga
        console.log(error + " odd number not allowed");
    })
        .then(function (result2) //JB P REJECT HOGA JB BHI P.THEN() HOGA EK PROMISE HI BS USKE PASS 
        //RETURN PROMISE F2 WALI LINE NHI CHALI HOGI ISLIYE WO F2 KA PROMISE NHI HAI 
        //JS USSE SETTELED PROMISE MAN KE AGLA THEN CHALA GE GA
        { //ye than f2_promise ka jo f1_promise ke then ke return se call hoga
          if(result2!==undefined)
            {console.log('p1: '+result2);}
          else{console.log("no futher promise will be executed as p fails");}
        },  function (error2) 
        { // ye dusra function tab chlega jb promise reject hoga f2 ka
            console.log(error2 + " value too large");
        });
        /// THIS IS CHAINING OF PROMISES ///
        /*p1().then().then().then()...
        p1 is a promise jo f1_promise ka return hai
        p1.then is a fromise jo f1_promise ke resolve hone pe chlega and jo f2promise return karega
        p1.then.then is a fromise jo f2_promise ke resolve hone pe chlega and on nedd isme reutn seke f3 ka promise le ske 
        and so on"*/