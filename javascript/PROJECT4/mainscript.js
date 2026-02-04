console.log("connected");
let Sbtn = document.getElementById('search_btn') ;// search_btn id wale button ko select kiya

 // given https://github.com/user is api , user ye baad user name daldo 
//ager uska account huva git hub json mai dede ga
async function apifetch(username) {
    console.log("runing");
    let response = await fetch(`https://api.github.com/users/${username}`)
    let result = await response.json();
    console.log(result);
    let data = document.getElementById('data') // pura  html code tag ke data ander ka copy paste kero yha or data dynamic bna do
    // inner,html mai html ki coding de ske wo ju ka tu html ka DOM change ker re ga 
    // hamne wha bna rakha tha setup static ab usse yha pura wapis dege ye usse overrite 
    // ker re ga and isne ham jo result mai object aaya uski values use ker re ge 
    // github ne hame sb kuch diya hoga name avtar ka link bio sb bs hame use ker na key value format mai hoga
    let {
        avatar_url,
        name,
        bio,
        followers,
        following,
        public_repos,
        html_url
    } = result;// result object ki key ko variables bna de ga bar bar result.avatar_url ,result.name etc nhi likhna 
    if( avatar_url){
     data.innerHTML=`
        <div id="left">     
            <div id="image">
                <img src="${avatar_url}" alt="soon">
            </div>
            <div id="info">
                <div id="name"><h3>${name ?? "No Name"}</h3></div>
                <div id="specialisation"><b>${bio ?? "No Bio Available"}</b></div> 
            </div>
        </div>

        <div id="right">
            <div id="details">
                <div id="follower">
                    <h3>Followers</h3>
                    <h4>${followers}</h4>
                </div>
                <div id="following">
                    <h3>Following</h3>
                    <h4>${following}</h4>
                </div>
                <div id="reporisaroty">
                    <h3>Repos</h3>
                    <h4>${public_repos}</h4>
                </div>
            </div>
            <div id="btn"> 
                <a href="${html_url}" target="_blank">
                    <button id="view_profile_btn">View Profile</button>
                </a>
            </div>
        </div>
    `;
}else{
     data.innerHTML = `
  <h1 style="width:100%;display:flex; justify-content:center; align-items:center;">
    User not found
  </h1>
`;

}}
Sbtn.addEventListener('click', () => {
    let username = document.querySelector('#username input').value  
//     // CSS jaisa selector use hua:
//     // # = id
//     // . = class
//     // #username ke andar jo input hai uski value li
    console.log(username)
    apifetch(username);
   
})
