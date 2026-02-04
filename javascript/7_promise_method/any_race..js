/*let a= new Promise(function(res,rej)
{
    setTimeout(function(){
        a=40;
        a=a--;
        rej(a) ///ISSE REJECT KER DIYA SBSE PAHALE CHAL RA YO
    },1000)
})
let b= new Promise(function(res,rej)
{
    setTimeout(function(){
        b="hello ji"
        res(b)
    },4000)
})
function f1()
{
    return new Promise(function(res,rej)
    {
        setTimeout(function(){
        res("balle balle");
    },3000)
    })
}
let x=Promise.any([a,b,f1()]); //use large bracket
x.then((data)=>console.log(data),()=>{})
// koi bhi ek pahala fulfiled promise return ker re ga
//OUT PUT BALLE BALLE AAVE GA KYUKI WO 3 SEC MAI RESOLVE HOGYA 
// AB PROMISE.RACE */
let a= new Promise(function(res,rej)
{
    setTimeout(function(){
        a=40;
        a=a--;
        rej(a)
    },1000)
})
let b= new Promise(function(res,rej)
{
    setTimeout(function(){
        b="hello ji"
        res(b)
    },4000)
})
function f1()
{
    return new Promise(function(res,rej)
    {
        setTimeout(function(){
        res("balle balle");
    },3000)
    })
}
let x=Promise.race([a,b,f1()]); //use large bracket
x.then((data)=>console.log(data),(data)=>console.log(data))
//// jo pahale hoja ga wo data chalega chahe res ho ra reject res hoga then ka resolve chale ga reject huva to reject//