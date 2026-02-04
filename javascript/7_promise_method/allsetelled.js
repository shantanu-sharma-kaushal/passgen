
let a= new Promise(function(res,rej)
{
    setTimeout(function(){
        a=40;
        a=a--;
        res(a)
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
let x=Promise.allSettled([a,b,f1()]); //use large bracket
x.then((data)=>console.log(data),()=>{})

let o= new Promise(function(res,rej)
{
    setTimeout(function(){
        a=40;
        a=a--;
        res(a)
    },1000)
})
let p= new Promise(function(res,rej)
{
    setTimeout(function(){
        b="hello ji"
        res(b)
    },4000)
})
function f2()
{
    return new Promise(function(res,rej)
    {
        setTimeout(function(){
        rej("balle balle"); // reject mai hm reason dege yha kyu huva reject
    },3000)
    })
}
let y=Promise.allSettled([a,b,f1()]); //use large bracket
y.then((data)=>console.log(data),(data)=>{console.log(data);})
// ye aaray return ker rega jisme her promise ka status and value ya reason bta rakha hoga//