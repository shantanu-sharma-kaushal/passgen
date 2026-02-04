function searching (item,cb1) // define searching with parameters query and cb 
{
  setTimeout(function () { // simulate async operation with setTimeout
    console.log('searching  for '+item); // log searching complete for query
    cb1(item); // call cb with result
  }, 1000);
}
// now we will see how callback hell looks like
searching('laptop', function (search_result) 
{
    (function selecting (item,cb2)  //immediately invoked function expression (IIFE)
{
  setTimeout(function () { 
    console.log('selecting complete for '+item); 
    cb2(item,function payment_status (order_id,item,) // define payment_status with parameters order_id, item and cb
{
    setTimeout(function () { // simulate async operation with setTimeout
        console.log('payment status:complete your order :-> \n id '+order_id+'\n item '+item); // log payment status complete for order id and item
        console.log(` thank you for purchasing ${item} \n order id ${order_id}`); // call cb with result
    }, 1000);}); 
  }, 1000);})(search_result,function generating_order_id (item,cb3) // define generating_order_id with parameters item and cb
{
  setTimeout(function () { 
    console.log('generating order id  for '+item); 
    let order_id = Math.floor(Math.random()*10000); 
    cb3(order_id,item); 
  }, 1000);}); 
});
//code cpoy mai smja rakha ek sath note or code dekh ke smj jada complex hai

// as we can see the code is getting more and more nested and hard to read
// this is callback hell
// to avoid callback hell we can use promises
// we will see how to convert the above code to use promises in the next file promise.js
