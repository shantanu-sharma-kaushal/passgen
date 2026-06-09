const boxes = document.getElementById("boxes");
let k=9;
for(let i=100;i>0;i--){
   
    const box =document.createElement("div")
    box.className="box"
    box.style.backgroundColor=`rgb(
    ${Math.floor(Math.random()*128+100)},${Math.floor(Math.random()*128+100)},${Math.floor(Math.random()*128+100)})`;
    if(0<i%20 && i%20<=10){
        box.innerHTML=`<p> ${i-k}<p>`
         box.id=`${i-k}`
        k=k-2;
        boxes.appendChild(box) 
    }else{
        box.innerHTML=`<p>${i}<p>`
        boxes.appendChild(box)
        box.id=`${i}`
    }
         if(i%20==0){
       k=9;
    }
}
let saap = [99, 73, 56, 47, 87, 93];

saap.forEach((s) => {

    const box = document.getElementById(`${s}`);
    box.innerText=""
    box.innerHTML += `
        <img src="photos/${s}.png"
             class="s-img">
    `;

});
let sidi = [4, 13, 33, 42, 50, 62,21];

sidi.forEach((l) => {

    const box = document.getElementById(`${l}`);
    box.innerText=""
    box.innerHTML += `
        <img src="photos/ladder.png"
             class="s-img">
    `;

});

// let firstTurn = true;
let currentPos = 1;
let firstTurn=true
//snake and ladder
const snakes = {
    99: 10,
    73: 3,
    56: 24,
    47: 16,
    87: 45,
    93: 52
};
const ladders = {
    4: 25,
    13: 46,
    33: 49,
    42: 63,
    50: 69,
    62: 81,
    21: 97
};
function randomColor() {
    return `rgb(
        ${Math.floor(Math.random() * 128 + 100)},
        ${Math.floor(Math.random() * 128 + 100)},
        ${Math.floor(Math.random() * 128 + 100)}
    )`;
}

function setPlayer() {
    const startBox = document.getElementById(`${currentPos}`);
    startBox.style.backgroundColor = "rgb(0,0,0)";
}

const dice = document.getElementById("dice");
const roll = document.getElementById("roll");

roll.addEventListener("click", () => {

    const diceValue = Math.floor(Math.random() * 6) + 1;

    dice.innerHTML = `<p>${diceValue}</p>`;

    // First roll: player board par show hoga
    if (firstTurn) {
        setPlayer();
        firstTurn = false;
        return;
    }

    move(diceValue);
});

function move(diceValue) {

    console.log("Current Position:", currentPos);
    console.log("Dice:", diceValue);

    // Purani position ka color normal karo
    const oldBox = document.getElementById(`${currentPos}`);
    oldBox.style.backgroundColor = randomColor();

    // Position update
    currentPos += diceValue;

    // 100 se aage na jaaye
    if (currentPos > 100) {
        console.log("no win");
        currentPos -=diceValue
    }else if(currentPos===100){
        console.log("WIN");
       setTimeout(() => {
        alert("win")
       },200); 
        reset ();
    }
    if(snakes[currentPos]){
        console.log("snake");
    currentPos = snakes[currentPos];
}

    if(ladders[currentPos]){
        console.log("ladder");
    currentPos = ladders[currentPos];
}

    console.log("New Position:", currentPos);

    // Nayi position par player dikhayo
    const newBox = document.getElementById(`${currentPos}`);
    newBox.style.backgroundColor = "rgb(0,0,0)";
}
function reset(){
    currentPos=1;
}


