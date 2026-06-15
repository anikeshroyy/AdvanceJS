const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let count = 0;

resetBtn.onclick = function () {
    count = 0;
    document.getElementById("dispNumber").textContent = count;
}

increaseBtn.onclick = function () {
    count++;
    document.getElementById("dispNumber").textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    document.getElementById("dispNumber").textContent = count;
}