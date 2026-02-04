function searching (item) 
{
let p1= new Promise(function(resolve,reject)
 {
    setTimeout(function ()
    { 
        if(item)
        {
            console.log('searching  for '+item);
            resolve(item);
        }else
        {
            console.log("nothing to search");
            reject(item);
        }
    }, 1000);
 })
 return p1;
} 
function selecting (item) 
{
    let p2 = new Promise((resolve, reject) => 
    {
        setTimeout(function () 
            { 
                if(item)
                    {console.log('selecting complete for '+item);
                        resolve(item);
                    } 
                else{
                    console.log("out of stock");
                    reject(item);
                }
            }, 1000);
    });
    return p2
}
function generating_order_id (item) // define generating_order_id with parameters item and cb
{
    let p3 = new Promise((resolve, reject) => {
        setTimeout(function ()
            {
                if(item)
                {   
                    console.log('generating order id  for '+item);
                    let order_id = Math.floor(Math.random()*10000);
                    resolve({ ///resolve mai ek hi ARGUMENT DE SKO////
                       id: order_id,
                       item: item}); // generate random order id
                }
                else{console.log(`Generating order id for ${item} fails please try again after some time`);
                    reject()
                }
            }, 1000);});
    return p3;
}
  
function payment_status (order_id,item) // define payment_status with parameters order_id, item and cb
{
    let p4= new Promise((resolve, reject) =>
        { 
            setTimeout(function () 
            { 
                if(order_id)
                {console.log('payment status:complete your order :-> \n id '+order_id+'\n item '+item);
                 resolve(item);
                }
                 else
                    {console.log("payment failed");
                        reject();
                 }
       
            }, 1000);
        })
    return p4;
}

//consumer//
async function f1() 
{
 let a=   await searching("laptop"); //searching () function se return mai promise aaya
 // await promise ko wrap ker dega or sirf uski value lega wo hm a mai assing ker re
 console.log(a); //ye prove ker ra a promise nhi hai resolve ya reject mai pass hui value hai
  let b=await selecting(a); // iski res. ya rej. ki value b  mai lele ge
  console.log(b);
  let obj =await generating_order_id (b);//ye fuction boject return ker ra
  console.log(obj);
  let c= payment_status (obj.id,obj.item)
  console.log(c);
}
let p1 =f1();