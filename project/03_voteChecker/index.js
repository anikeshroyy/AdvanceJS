let age;

document.getElementById("checkBtn").onclick = function () {
    age = document.getElementById("ageInput").value;
    if (age >= 18) {
        document.getElementById("dispResult").textContent = `Yes, you can vote!`;
        document.getElementById("dispResult").style.color = "green";
    }

    else {
        document.getElementById("dispResult").textContent = `No, you can't vote!`;
        document.getElementById("dispResult").style.color = "red";
    }
};