// Example of if-else-if statement in JavaScript
let i=1
if(i===0){
    console.log("i is zero");
}
else if(i===1){
    console.log("i is one");
}
// conditinal operators can also be used to achieve similar functionality
i===0 ? console.log("i is zero") :
i===1 ? console.log("i is one") :
console.log("i is neither zero nor one");
//switch case can also be used for similar functionality
switch(i){
    case 0: //In jS switch cases, strict comparison (===) is used
        console.log("i is zero");
        break; // break is used to exit the switch case
    case 1://cases can be string variables and floats as well
    // case '1.0',case "one" ,case x>0 etc are valid
        console.log("i is one");
        break;
    default:
        console.log("i is neither zero nor one");
}