const myChckBox = document.getElementById("myChckBox");
const visaBtn = document.getElementById("visaBtn");
const creditCardBtn = document.getElementById("creditCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subBtn = document.getElementById("subBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

subBtn.onclick = function () {
    if (myChckBox.checked) {
        subResult.textContent = "You are subscribed our newsletter";
    }
    else {
        subResult.textContent = "You haven't subscribed yet!"
    };

    if (visaBtn.checked) {
        paymentResult.textContent = "You are using Visa for subscription"
    }
    else if (creditCardBtn.checked) {
        paymentResult.textContent = "You are using Credit Card for subscription"
    }
    else if (payPalBtn.checked) {
        paymentResult.textContent = "You are using Pay Pal for subscription"
    }
    else {
        paymentResult.textContent = "Plz select a payment method"
    };
}
