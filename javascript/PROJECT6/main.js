var key=0;
let addbtn=document.getElementById("add")
addbtn.addEventListener('click',()=>{
    console.log("clicked");
    let text=document.getElementById('text').value
    key++;
    store(text)
    dishplay(key)
})

function store(text){
    console.log(text);
localStorage.setItem(`${key}`,`${text}`)
}

let clearbtn=document.getElementById("clear")
clearbtn.addEventListener('click',()=>{
    console.log("clear");
    localStorage.clear();
    key=0;
   let todo=document.getElementById("todo")
   todo.innerHTML=` <h2>list....</h2>
    <button id="RBK">Remove by key</button>
     <input type="number" placeholder="key" id="key">`
})
function dishplay(key){
   let div= document.createElement("div")
    div.id="task"
    div.innerHTML=`<h3>${key}:${localStorage.getItem(`${key}`)}</h3>`
    let todo=document.getElementById("todo")
    todo.append(div)
}
let removebtn=document.getElementById("remove")
removebtn.addEventListener('click',()=>{
    localStorage.removeItem(`${key}`)
    key--;
     let todo=document.getElementById("todo")
   todo.innerHTML=` <h2>list....
   </h2>
    <button id="RBK">Remove by key</button>
     <input type="number" placeholder="key" id="key">`
   for(i=1;i<=key;i++){
     let div= document.createElement("div")
    div.id="task"
    div.innerHTML=`<h3>${i}:${localStorage.getItem(`${i}`)}</h3>`
    let todo=document.getElementById("todo")
    todo.append(div)
   }

}
)

let remove_by_key = document.getElementById('RBK');
remove_by_key.addEventListener('click', () => {
  console.log("removing");

  let k = Number(document.getElementById("key").value);
  let lastKey = localStorage.length;

  if (k < 1 || k > lastKey) {
    alert("Invalid key");
    return;
  }

  while (k < lastKey) {
    localStorage.setItem(k, localStorage.getItem(k + 1));
    k++;
  }

  localStorage.removeItem(lastKey);

  console.log("done");
});
