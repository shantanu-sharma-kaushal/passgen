///// why we need promises /////
// lets mimic a callback hell situation using setTimeout for searching selecting generating order id and payment status
// first we will see how callback hell looks like
//we had just studied callback hell in problem.js file that we need to pass a function as an argument to another function
//  to get the result after async operation is complete
//lets start with a simple example of callback hell

function searching (item,cb1) // define searching with parameters query and cb 
{
  setTimeout(function () { // simulate async operation with setTimeout
    console.log('searching  for '+item); // log searching complete for query
    cb1(item); // call cb with result
  }, 1000);

}
function selecting (item,cb2) // define selecting with parameters item and cb
{
  setTimeout(function () { // simulate async operation with setTimeout
    console.log('selecting complete for '+item); // log selecting complete for item
    cb2(item); // call cb with result
  }, 1000);}
function generating_order_id (item,cb3) // define generating_order_id with parameters item and cb
{
  setTimeout(function () { // simulate async operation with setTimeout
    console.log('generating order id  for '+item); // log generating order id complete for item
    let order_id = Math.floor(Math.random()*10000); // generate random order id
    cb3(order_id,item); // call cb with result
  }, 1000);}
function payment_status (order_id,item,cb4) // define payment_status with parameters order_id, item and cb
{
    setTimeout(function () { // simulate async operation with setTimeout
        console.log('payment status:complete your order :-> \n id '+order_id+'\n item '+item); // log payment status complete for order id and item
        cb4(` thank you for purchasing ${item} \n order id ${order_id}`); // call cb with result
    }, 1000);}
// now we will see how callback hell looks like
searching('laptop', function (search_result) //fuction wil be recived as argument cb1
{
  selecting(search_result, function (select_result) //fuction wil be recived as argument cb2
  {
    generating_order_id(select_result, function (order_id,item) //fuction wil be recived as argument cb3
    {
      payment_status(order_id,item, function (payment_result) //fuction wil be recived as argument cb4
      {
        console.log(payment_result);
      }); // end of payment_status fuction call
    });// end of generating_order_id fuction call
  }); // end of selecting fuction call
});// end of searching fuction call
  //******************** MUST READ********************* */

// this pyramid type structure of nested functions is called callback hell or pyramid of doom
// IT also leads to inversion of control ,,
//  ye char function mai code ke nhi hai main code searching ki call se start hai or 
// bar bar control shift hora kisi ek bhi function mai logical error hui to result kharab 
// yha ek file mai hai normaly to khi bhi ho ske or kitne bhi ye bta pta kaise lga ga exaclty 
// konse mai error hai
// isliye promises ka use hota hai jisse hum asynchronus code ko synchronus ki tarah likh ske

/* as we can see each function need reasult of its previous function to execute
    so we had to nest the function calls inside each other and as function are asynchronous
    we have to pass a callback function to each function to get the result
    this leads to callback hell where the code is hard to read and maintain
    to avoid callback hell we can use promises
    we will see how to convert the above code to use promises in the next file promise.js
*/

// as we can see the code is getting more and more nested and hard to read
// this is callback hell
// to avoid callback hell we can use promises
// we will see how to convert the above code to use promises in the next file promise.js



///////////////IT can be  more complex if we give  defination of function inside the call itself ////////////

