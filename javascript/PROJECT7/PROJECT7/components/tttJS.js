const Grid = document.getElementById("grid");
Grid.addEventListener("click", () => {

});
let flag=0;
// const cells = document.querySelectorAll(".cell");
// console.log(cells);
// cells.forEach((cell) => {
//     cell.addEventListener("click", () => {
//       text = cell.innerText;
//       if (text === ""&&flag===0) {
//         cell.innerText = "X";
//         flag=1;
//         console.log(cell.id);
//       }
//       else if(text === ""&&flag===1){
//         cell.innerText = "O";
//         flag=0;
//         console.log(cell.id);
//       }
//     }); //querySelectorAll se sare cells mil gaye(node list mai) list pe event listen nhi lagte..click event listener laga ne ke liye tag chiye ... for each se sare tag ek ek ker ke cell mai liye our event lsitener ko call mardiya ab yr iteration khatam agla khatam ye loop khatam per c-1 se c-9 sare event listener continue listen ker re ge, jab bhi kisi cell pe click hoga to uska id console pe print hoga
// }); 
console.log(Grid);
Grid.addEventListener("click", (e) => {
 
  console.log(e.target);                
 let cell = e.target;  // ye hame wo element dega jispe click hua hai,cell varible m click hua element store kr liya
  if (cell.classList.contains("cell")) {  
   let text = cell.innerText; //ye hame cell ke andar ka text dega, initially empty hoga  
    if (text === ""&&flag===0) {
      cell.innerText = "X";
      flag=1;
     
      let K =checkWin(); //ye function har click pe win check karega
     
      show_popup(K);
      
    }
    else if (text !== "") {
        alert("Cell already occupied! Please choose another cell.");  
          console.log("Cell already occupied! Please choose another cell.");
      }
      else
      if(text === ""&&flag===1){
      cell.innerText = "O";
      flag=0;
    
      let M =checkWin(); //ye function har click pe win check karega
    
      show_popup(M);
    }
}});
 

const Rbtn =document.createElement("button");
Rbtn.className="btn";
Rbtn.innerText="Reset";
Rbtn.id="reset-btn";
Rbtn.addEventListener("click",()=>{
  resetgame();
   
});
document.body.appendChild(Rbtn);
const winingCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const checkWin=()=>{
    const cells = document.querySelectorAll(".cell");
   
    for( let combination of winingCombinations){  //(for of loop) ye combination variable m winingCombinations ke sare sub array ek ek ker ke dega ye hi isliye kyuki for each break nhi hota ye bich mai ruk ske 
      const [a,b,c]=combination; //ye combination array ke andar ke 3 elements ko a,b,c variable m store kr dega
     // isse destructuring bolte hai
      if(cells[a].innerText&&cells[a].innerText===cells[b].innerText&&cells[a].innerText===cells[c].innerText){
        setTimeout(() => {
            alert(`${cells[a].innerText} wins!`);
        }, 100); //100 ms delay pe alert dikhayega
        console.log(`${cells[a].innerText} wins!`);
       setTimeout(() => {
            resetgame();
        }, 1000); //1 second ke baad game reset ho jayega
          
        return cells[a].innerText; //ye return karega ki kaun jeeta X ya O

      } 
    }
  setTimeout(() => {
    checkDraw();
  }, 100);};
    const checkDraw=()=>{
        let i=0;
        const cells = document.querySelectorAll(".cell");
        while(i<=8){
          let a=cells[i];
          if(a.innerText=="") {
            console.log("controled!"); //agar koi bhi cell empty hai to draw nhi hoga
            return false;//agar koi bhi cell empty hai to draw nhi hoga
          }
            i++;
        }
          console.log("draw!"); 
          show_popup("no one");
          setTimeout(() => {
            resetgame();
          }, 1000); //1 second ke baad game reset ho jayega
        }
        
    resetgame=()=>{
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.innerText = "";
              const winbox=document.getElementById("winbox");
      winbox.style.zIndex="-999"
      winbox.style.opacity=0;
      winbox.style.background="transparent";
      winbox.innerText="";
        });
        flag = 0;
    };
    const show_popup =(k)=>{
        if (k==="X"||k==="O"||k==="no one"){
      const winbox=document.getElementById("winbox");
      winbox.style.zIndex="999"; //ye winbox ko front pe le aayega
      winbox.style.opacity=1; //ye winbox ko visible karega
      winbox.style.background= "rgba(6, 1, 1, 1)"; //ye winbox ka background thoda transparent karega
      winbox.innerText=`${k} wins!`;
  }
    };
    
