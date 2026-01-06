let divHead=document.createElement('div'); //create a div element
divHead.id="greeting"; //set id attribute
divHead.innerHTML="Hello, World!"; //set inner HTML ,we can also use textContent
//  property and innerText property,but innerHTML is preferred because it parses 
// content as HTML such as tags(<U> , <B> etc)
divHead.style.color="blue"; //set CSS style color property
divHead.style.backgroundColor="violet";
divHead.style.display="flex";
divHead.style.alignItems = "center";      
divHead.style.justifyContent = "center";  
document.body.appendChild(divHead); //append the div element to body
console.log("Hello, World!"); //log to console
let divDesc=document.createElement('div'); //create another div element
divDesc.id="description"; //set id attribute
divDesc.innerHTML="This is my first JavaScript program ."; //   set inner HTML
divDesc.style.color="blue"; //set CSS style color property
divHead.appendChild(divDesc); //append the div element to previous div
console.log("This is my first JavaScript program .");
//now i will show you to how to handle events by adding a button
let button=document.createElement('button'); //create button element
button.id="darkMode"; //set id attribute
button.innerHTML="Dark Mode"; //set inner HTML
button.style.marginTop="20px"; //set CSS style margin-top property
button.style.padding="10px 20px"; //set CSS style padding property
button.style.fontSize="16px"; //set CSS style font-size property
divHead.appendChild(button); //append button to previous div
//add event listener to button for click event
button.addEventListener("click", f1);
function f1(){
     //anonymous function as event handler
    document.body.style.backgroundColor="#121212"; //change body background color
    divHead.style.color="white"; //change text color to white
    divDesc.style.color="white"; //change description text color to white
    button.innerText="Light Mode"; //change button text
}
console.log("Dark Mode Activated"); //log to console
button.addEventListener("dblclick", f2); //add event listener to button for double click event
function f2(){
    //anonymous function as event handler   
    document.body.style.backgroundColor="white"; //change body background color
    divHead.style.color="blue"; //change text color to blue
    divDesc.style.color="blue"; //change description text color to blue
    button.innerText="Dark Mode"; //change button text
}