// /*( ye // hta diye line 1 or line 16 ke to /**/ active hoja ga sirf niche ka code cahale ga
function someWork1()
{ setTimeout(()=>{console.log("work done")},2000)} 
function someWork2 ()
{ setTimeout(()=>{console.log("work 2 done")},1000)}

async function f1() //asyn ,// ye hamesha ek promise object return ker re ga khud se
{ someWork1();
  someWork2();} 
let p1= f1();

async function galat_method() //asyn key word
{ await  someWork1(); //wrong use of await
  await someWork2(); } 
let p2 = galat_method();
console.log(p2);  //*/
/// ye code mai awat likho na likho same baar hai awat promise ka wait ker re setimeout 
//// promise nhi hai function hai await usks wait nhiu kerne ga
// /* ye "//" hta diye line 19 or 44 ke sirf upper ka code chale ga 
function someWork3() {
  return new Promise(resolve => {  //arrow function mai ek hi argument lia bs resolve hi
    setTimeout(() => {            //kyuki code ka flow or logic smj na bs koi kalaripiyattu 
      console.log("work 3 done");   // ni kerni ,ek ke liye () nhi lga te arrow fuction mai
      resolve();
    }, 2000);
  });
}

function someWork4() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("work 4 done");
      resolve();
    }, 1000);
  });
}

async function f2() {
  await someWork3(); // waits 2 sec
  await someWork4(); // waits AFTER work1 finishes
}

let p3 = f2();
// */