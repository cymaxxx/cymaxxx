const word = document.getElementById("word");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
let count = 0;

increment.addEventListener("click", incrementing);
decrement.addEventListener("click", decrementing);
reset.addEventListener("click", reseting);

function incrementing() {
    count++;
    word.textContent = count;
    }

function decrementing() {
    if (count !== 0) {
        count--;
        word.textContent = count;
    }
}

function reseting() {
    count = 0;
    word.textContent = count;
}

