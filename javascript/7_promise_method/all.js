// promise.all use//
// KOI PROMISE KABHI PURA HUVA HO SB KE SB JB PURE HOJA GE TO UNKA RES MAI DIYA GYA PARAMETRE
// EK AARAY BN KE RETURM HOGA JHA PROMISEALL CALL KIYA HOGA HERE "X"
//AGER REJECT HUVA EK BHI KO PHIR YE KAM NI KER RE USKA REJ KA MESS DEGA BS...
//SARE RESOLVE HUVE TO HI YE SHI CHALE GA

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
let x=Promise.all([a,b,f1()]); //use large bracket
x.then((data)=>console.log(data),()=>{})// X MAI SABKA RES WALA PARAMETER AAGYA


let O= new Promise(function(res,rej)
{
    setTimeout(function(){
        let a=40;
        a=a--;
        res(a)
    },1000)
})
let P= new Promise(function(res,rej)
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
        rej("balle balle");
    },3000)
    })
}
let Y=Promise.all([O,P,f2()]); //use large bracket
Y.then((data)=>console.log(data),(data)=>{console.log(data);})
//sirf bale bale likha aave ga data mai kyu ki wo reject huva to ye usse hi mane ka.. or iske then ka bhi rejected code hi chale ga 