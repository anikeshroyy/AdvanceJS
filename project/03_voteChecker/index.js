let age;

document.getElementById("checkBtn").onclick = function () {
    age = Number(document.getElementById("ageInput").value);
    if (isNaN(age)) {
        document.getElementById("dispResult").textContent =
            "Please enter a valid age!";
    }
    else if (age >= 18) {
        document.getElementById("dispResult").textContent = `Yes, you can vote!`;
        document.getElementById("dispResult").style.color = "green";
    }

    else if (age <= 0) {
        document.getElementById("dispResult").textContent = `Your age can't below 0!`;
        document.getElementById("dispResult").style.color = "orange";
    }

    else {
        document.getElementById("dispResult").textContent = `No, you can't vote!`;
        document.getElementById("dispResult").style.color = "red";
    }
};