/*let Sbtn=document.getElementById("search-btn")
Sbtn.addEventListener('click',()=>{
    let Uinput=document.getElementById("user-input").value
    console.log(Uinput);
    api(Uinput);
})
let KEY="oHEpXI4ubqfMjelAU6o-yXrqNG3PT4sDKK4pTVzHEwA"
async function api(uinput){
    let data = await fetch(`https://api.unsplash.com/search/photos?query=${uinput}&client_id=${KEY}`)
    let result = await data.json()
    console.log(result);
    dishplay(result);
}
function dishplay(result){
    let container=document.getElementById("cards-container")
    container.innerHTML=`<article class="user-card">

      <div class="pics">
        <!-- small user image -->
        <img
          class="user-image"
          src="https://via.placeholder.com/150"
          alt="User profile image"
        >

        <!-- main product image -->
        <img
          class="product-image"
          src="https://via.placeholder.com/400x300"
          alt="Main product image"
        >
      </div>

      <div class="text">
        <h3 class="user-name">YE CHAL RA</h3>
        <p class="user-desc">
          This is a short user description. Main focus product image par hai.
        </p>
      </div>

    </article>

    <!-- Card -->
    <article class="user-card">
      <div class="pics">
        <img class="user-image" src="https://via.placeholder.com/150" alt="User profile image">
        <img class="product-image" src="https://via.placeholder.com/400x300" alt="Main product image">
      </div>
      <div class="text">
        <h3 class="user-name">BALEE BALLE</h3>
        <p class="user-desc">This is a short user description.</p>
      </div>
    </article>

    <!-- Card -->
    <article class="user-card">
      <div class="pics">
        <img class="user-image" src="https://via.placeholder.com/150" alt="User profile image">
        <img class="product-image" src="https://via.placeholder.com/400x300" alt="Main product image">
      </div>
      <div class="text">
        <h3 class="user-name">SHAVA SHANTANU</h3>
        <p class="user-desc">This is a short user description.</p>
      </div>
    </article>`
}*/
let Sbtn = document.getElementById("search-btn");
let container = document.getElementById("cards-container");

let KEY = "oHEpXI4ubqfMjelAU6o-yXrqNG3PT4sDKK4pTVzHEwA";

Sbtn.addEventListener("click", () => {
  let Uinput = document.getElementById("user-input").value.trim();
  if (!Uinput) return;

  resetCards();        // 👈 purane cards hatao
  api(Uinput);
  console.log(Uinput);
});

async function api(uinput) {
  try {
    let data = await fetch(
      `https://api.unsplash.com/search/photos?query=${uinput}&per_page=6&client_id=${KEY}`
    );

    let result = await data.json();
    display(result.results);
    console.log(result);
  } catch (err) {
    console.log("Error:", err);
  }
}

function display(results) {
  results.forEach((img, index) => {
    let card = document.createElement("article");
    card.classList.add("user-card");
    console.log("chalra ye bhi");

    card.innerHTML = `
      <div class="pics">
        <img class="user-image" src="${img.user.profile_image.small}" alt="user">
        <img class="product-image" src="${img.urls.regular}" alt="product">
      </div>
      <div class="text">
        <h3 class="user-name">NAME:  ${img.user.name}</h3>
        <p class="user-desc">${img.alt_description}</p>
      </div>
    `;

    container.appendChild(card);   // 👈 append
  });
}

function resetCards() {
  container.style.opacity = "0";
  setTimeout(() => {
    container.innerHTML = "";
    container.style.opacity = "1";
  }, 0);
}
