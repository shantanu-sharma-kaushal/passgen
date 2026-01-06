//code for index,html slecting all the elements
console.log("hello");
const Length=document.getElementById("Length");
const Uppercase=document.getElementById("uppercase");
const Lowercase=document.getElementById("lowercase");
const Numbers=document.getElementById("numbers");
const Symbols=document.getElementById("symbols");
const GenerateBtn=document.getElementById("generate");
const PassgenDisplay=document.getElementById("passworddisplay");
const lensize=document.getElementById("lensiz");
//ek button banaya copy krne k liye html mI BHUL GY tha
const copyBtn=document.createElement("button");
copyBtn.innerText="Copy";
copyBtn.id="copyBtn";
//logic for generating password
let Finalpassword="";
lensize.innerText=Length.value;
Length.addEventListener("input",()=>{
    lensize.innerText=Length.value;

}); //slider k sath length change krne k liye or ispe click nhi input likha ja taki slide pe change hove

GenerateBtn.addEventListener("click",()=>{
    //All character sets
    let uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChars="abcdefghijklmnopqrstuvwxyz";
let numberChars="0123456789";
let symbolChars="!@#$%^&*()_+~`|}{[]:;?><,./-=";
let finalstring="";
Finalpassword="";
//conditions for checkboxes
if(Uppercase.checked){
    finalstring+=uppercaseChars;
   
}
if(Lowercase.checked){
    finalstring+=lowercaseChars;
     
}
if(Numbers.checked){
    finalstring+=numberChars;
    
}
if(Symbols.checked){
    finalstring+=symbolChars;
   
}
if(finalstring){
    for(let i=0;i<Length.value;i++){
        let randomIndex=Math.floor(Math.random()*finalstring.length);
        //ye to har bar final password m ek character add krta rhega
        //math.floor isliye kiya taki decimal na aaye math.random se 0 se 1 ke beech m decimal aata hai * finalstring.length se taki pura length cover ho jaye
        Finalpassword+=finalstring.charAt(randomIndex);
        //ek character add krne k liye charAt use kiya
       // console.log(Finalpassword);
      // console.log(i);
    }
PassgenDisplay.innerText=Finalpassword;//ye html  ka element m password display krne k liye
console.log(Finalpassword);

}
else{
    Finalpassword="select at least one \n checkbox";
    PassgenDisplay.innerText=Finalpassword;
}

console.log(Finalpassword);

});
//copy to clipboard logic
copyBtn.addEventListener("click",()=>{ //jab copy button pe click hoga to ye function chalega
    if(Finalpassword&&Finalpassword!=="select at least one \n checkbox"){
        navigator.clipboard.writeText(Finalpassword).then(()=>{ //ye promise return krta hai,, then ya to aprove hoga ya reject 
            // window.navigator.clipboard.writeText(Finalpassword); ye clipboard m text copy krne k liye jo as an argument pass kr rhe hai
            alert("Password copied to clipboard");
        }).catch((err)=>{
            console.error("Failed to copy password: ",err);
        });
    }
    else{
        alert("No password to copy");
    }
});
document.getElementById("Pass").appendChild(copyBtn); //ye button body ke ander pass id wala ji duv hau usme  add krne k liye