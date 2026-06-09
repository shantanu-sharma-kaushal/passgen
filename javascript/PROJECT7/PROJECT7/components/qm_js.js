const cards = document.querySelectorAll(".card");
const p = document.getElementsByTagName("p");
 let m =()=>{ setTimeout(()=>{ 
   [...p].forEach(T=>{
    T.style.opacity="0";
   })
 },2000);}
 m();
 function shuffleCards(){
  console.log("controled");
   let values = [...document.querySelectorAll("p")].map(p => p.innerText);

   values.sort(() => Math.random() - 0.5);

   document.querySelectorAll("p").forEach((p,index)=>{
      p.innerText = values[index];
   });
}
let i = 1;
let score =0;
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    showcard(e.target)
    let text = card.innerText;
    console.log(text);
    sessionStorage.setItem(i,JSON.stringify({
    text: text,
    id: card.id
  })); //object dalna to aaise dal sko
    i++;
    matchcheck(e);
  });
});
 let tags=[];
const matchcheck = (e) => {
  let k=i-2;
  tags= [...tags ,e.target]
  if(i%2==1 && i>2){
   let data1 = JSON.parse(sessionStorage.getItem(k));
let data2 = JSON.parse(sessionStorage.getItem(k+1));

let text1 = data1.text;
let id1 = data1.id;

let text2 = data2.text;
let id2 = data2.id;
    if(text1===text2&& id1!==id2){
      score++;
      checkwin();
      console.log(`score is ${score}`);
    }else if(text1===text2&&id1===id2){
      alert("select diffrent card")
       hidecard(tags);
       return
    }
    else{
      console.log("not mached");
      hidecard(tags)
    }
 }

};
function showcard (s){
console.log(s);
s.style.opacity="1"
}
function hidecard(h){
  console.log("control hide");
  setTimeout(() => {
    if(h.length >= 2){
      h.at(-1).style.opacity = "0";
      h.at(-2).style.opacity = "0";
    }
  }, 500);
}
let clear=document.getElementById("clear")
clear.addEventListener("click",()=>{
  console.log("sesionstorage cleared");
  sessionStorage.clear();
})

function checkwin (){
  if(score==4){
  alert("you win click ok to paly again")
  console.log("control");
  m()
  score=0;
  sessionStorage.clear();
  i=1
  tags=[];
  shuffleCards();
  }
}

