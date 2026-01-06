//while
let i=0;
while(i<5){
    console.log("while loop i:",i);
    i++;
}
//do-while
i=0;
do{
    console.log("do-while loop i:",i);
    i++;
}while(i<5); // executes at least once
//for
for(let j=0;j<5;j++){
    console.log("for loop j:",j);
} //same as c-style for loop
//for-in (used to iterate over object properties)
let obj={a:1,b:2,c:3};//key-value pairs
for(let key in obj){
    console.log("for-in loop key:",key,"value:",obj[key]);
} //dont use member of operator to access values of keys
// obj.key will look for key property in obj not the value of key variable
// so use obj[key] to access value of key variable
//for-of (used to iterate over iterable objects like arrays, strings, maps, sets)
let arr=[10,20,30,40,50];  
for(let value of arr){
    console.log("for-of loop value:",value);
} //iterates over values directly
//break and continue
for(let k=0;k<10;k++){
    if(k===5){
        continue; // skips the rest of the loop when k is 5
    }
    if(k===8){
        break; // exits the loop when k is 8
    }
    console.log("for loop k:",k);
}
//nested loops
for(let m=1;m<=3;m++){
    for(let n=1;n<=2;n++){
        console.log("nested loop m:",m,"n:",n);
    }
}
//labeled loops
outerLoop: //label for outer for loop
for(let x=1;x<=3;x++)
    {
    innerLoop: //label for inner for loop
    for(let y=1;y<=3;y++)
        {
        if(x===2 && y===2){
            break outerLoop; // breaks out of the outer loop
        } //we can break innerLoop or outerLoop based on label
        console.log("labeled loop x:",x,"y:",y);
    }
}//use of labelled loops to break out of nested loops