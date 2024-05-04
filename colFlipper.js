const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", 
                "Yellow ","Gray ", "beige", "Aqua", "Cyan", " Chocolate", "DarkRed", "Plum"];
const btn = document.getElementById("btn");
const body = document.querySelector("body");
const color = document.getElementById("color");

btn.addEventListener("click", colMe);
body.style.backgroundColor = "cyan";

function colMe() {

    let allar = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[allar];
    color.textContent = colors[allar];
}

//====================================================================================================
/*const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", 
                "Yellow ","Gray ", "beige", "Aqua", "Cyan", " Chocolate", "DarkRed", "Plum"];

const btn = document.getElementById("btn");


//let array = [...colors];
let allar = Math.floor(Math.random()*14);
let arr = colors[allar];

btn.addEventListener("click", () => {document.body.style.backgroundColor = arr});

//console.log(array);
console.log(arr);
=====================================================================================================
const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", 
                "Yellow ","Gray ", "beige", "Aqua", "Cyan", " Chocolate", "DarkRed", "Plum"];
const btn = document.getElementById("btn");
const body = document.querySelector("body");

btn.addEventListener("click", colMe);
//body.style.backgroundColor = "cyan";

function colMe() {

    let allar = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[allar];

}*/




