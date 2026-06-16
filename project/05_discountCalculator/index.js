let purchaseAmount = document.getElementById("productAmount");
let discountAmount = document.getElementById("discountAmount");
let calcBtn = document.getElementById("calcBtn");
let dispResult = document.getElementById("result");

calcBtn.onclick = function () {
    price = Number(purchaseAmount.value);
    discount = Number(discountAmount.value);

    let finalPrice = price - price * (discount / 100);
    dispResult.textContent = `Final Price: ₹${finalPrice}`;
}