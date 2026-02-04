let lbtn= document.getElementById("localbtn")
lbtn.addEventListener('click',()=>
    {
    console.log("local");
    localStorage.setItem('localkey','value_local') ;
})
//CLEAR LOCAL
let CL= document.getElementById("clearlocal")
CL.addEventListener('click',()=>
    {
    console.log("local clear");
    localStorage.clear();
})
// ADD in sessional
let sbtn= document.getElementById("sesionalbtn")
sbtn.addEventListener('click',()=>
    {
     console.log("sesional");
      sessionStorage.setItem("s_key","value_s")
})
//CLEAR sessionStorage
let CS= document.getElementById("clearsesional")
CS.addEventListener('click',()=>
    {
        console.log("sesional_clear");
        sessionStorage.clear();
    })
    // SHOW LOCAL
let SL = document.getElementById("showlocal")
SL.addEventListener('click',()=>{
    let data=localStorage.getItem('localkey')
    console.log(data);
    let h1l=document.getElementById('localstr');
    h1l.innerHTML=`${data}`
})
//SHOW sessionStorage
let SS = document.getElementById("showsesional")
SS.addEventListener('click',()=>{
    let data=sessionStorage.getItem('s_key')
    console.log(data);
    let h1l=document.getElementById('sesionalstr');
    h1l.innerHTML=`${data}`
})
//remove
let RL = document.getElementById("rem.loc.")
RL.addEventListener('click',()=>{
    let k= document.getElementById("key").value
    console.log(k);
    localStorage.removeItem("localkey")
})
