let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector(".box");
function perform(){
    let r1 = Math.ceil(Math.random()*256);
    let g1 = Math.ceil(Math.random()*256);
    let b1 = Math.ceil(Math.random()*256);
    h1.innerText = `rgb(${r1},${g1},${b1})`;
    h1.style.color = `rgb(${r1},${g1},${b1})`
    div.style.backgroundColor = `rgb(${r1},${g1},${b1})`
}
btn.addEventListener("click",perform);