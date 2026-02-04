////// complexity.js ka solution promise se////////
function searching (item) 
{
/* let p1= new Promise(function(reject,resolve) ye allowed nhi hai
hm rakh re nam reject or resovle abcd bhi rakh ske MAIN YE DHIYAN RAKH NA BS KI
1-ARGUMENT ALWYS FULFILED KA
2- ALWAYS REJECTED KA NAM KUCH DE KAM AAISE HI HONA*/
let p1= new Promise(function(resolve,reject)
 {
    setTimeout(function ()
    { // simulate async operation with setTimeout
    
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
} // clean coding with indentation
function selecting (item) // define selecting with parameters item and cb
{
    let p2 = new Promise((resolve, reject) => 
    {
        setTimeout(function () 
            { // simulate async operation with setTimeout
                if(item)
                    {console.log('selecting complete for '+item);
                        resolve(item);
                    } // log selecting complete for item
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


    
    //// consumer code////
   let pro= searching("laptop")
   console.log(pro);
   pro
        .then(
            (item)=>{console.log("p1-full-filled");console.log(item);return selecting(item) },
            ()=>{console.log("p1 failed"); }
        ).then( 
            (item)=>{
                if(item!==undefined)
                {
                console.log("p2-full-filled");console.log(item); return  generating_order_id(item) }
                else{"p1 fails no further execution"}
            },
            ()=>{ console.log("p2 failed");
            }
        ).then( 
            (data)=>{
                if(data.id!==undefined && data.item !==undefined)
                {console.log("p3-full-filled");console.log(data.item); return payment_status (data.id,data.item) }
                else{"p2 fails no further execution"}
            },
            ()=>{ console.log("p3 failed");
            }
        ).then( 
            (item)=>{ item!==undefined?console.log("p4-full-filled"):()=>{};  },
            ()=>{ console.log("p4 failed");   }
        )