const min = 1;
const max = 6;

let rollerBtn = document.getElementById("roller").onclick = function () {
    let randomNum = Math.floor(Math.random() * max) + min;
    document.getElementById("diceResult").textContent = randomNum;
    console.log(randomNum);
};