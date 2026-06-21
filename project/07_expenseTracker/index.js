// ------------------------------------------ DOM Elements ------------------------------------------
// Get references to all required HTML elements.

let userIncome = document.getElementById("userIncome");
let userExpense = document.getElementById("userExpense");
let incomeBtn = document.getElementById("incomeBtn");
let expenseBtn = document.getElementById("expenseBtn");


// ------------------------------------------ Data Storage ------------------------------------------
// Arrays store all income and expense transactions.

let incomeArr = [];
let expenseArr = [];


// ------------------------------------------ Totals -----------------------------------------------
// Variables used to keep track of total income and total expense.

let totalIncome = 0;
let totalExpense = 0;


// ------------------------------------------ Add Income -------------------------------------------
// Validates input, updates total income, stores transaction,
// and refreshes the UI.

incomeBtn.onclick = function addIncome() {

    let income = (userIncome.value.trim());
    if (income == "") {
        document.getElementById("incomeErrMsg").textContent = `Add valid Amount`;
    }

    else if (isNaN(income)) {
        document.getElementById("incomeErrMsg").textContent = `Add valid Amount`;
    }

    else {
        let iAmount = Number(income);
        totalIncome += iAmount;
        userIncome.value = "";
        incomeList(income);
        console.log(`Total Income : ${totalIncome}`);
        availableAmount();
    }
}


// ------------------------------------------ Income Transaction List ------------------------------
// Stores income in array and displays all income transactions.

let incomeList = (uIncome) => {
    incomeArr.push(uIncome);
    console.log(`Income Arr : ${incomeArr}`);
    displayList(incomeArr, "incomeItem");
}


// ------------------------------------------ Add Expense ------------------------------------------
// Validates input, updates total expense, stores transaction,
// and refreshes the UI.

expenseBtn.onclick = function addExpense() {

    let expenses = (userExpense.value.trim());
    if (expenses == "") {
        document.getElementById("expenseErrMsg").textContent = `Add valid Amount`;
    }

    else if (isNaN(expenses)) {
        document.getElementById("expenseErrMsg").textContent = `Add valid Amount`;
    }

    else {
        let eAmount = Number(expenses);
        totalExpense += eAmount;
        userExpense.value = "";
        console.log(totalExpense);
        availableAmount();
        expenseList(expenses);
    }
}


// ------------------------------------------ Expense Transaction List -----------------------------
// Stores expense in array and displays all expense transactions.

let expenseList = (uExpense) => {
    expenseArr.push(uExpense);
    console.log(`Expense Arr : ${expenseArr}`);
    displayList(expenseArr, "expenseItem");
}


// ------------------------------------------ Update Dashboard -------------------------------------
// Calculates remaining balance and updates dashboard values.

function availableAmount() {

    let remainingAmount = totalIncome - totalExpense;
    console.log(remainingAmount);
    document.getElementById("avlblAmount").textContent = `Available Fund : ${remainingAmount}`;
    document.getElementById("tIncome").textContent = `Total Income : ${totalIncome}`;
    document.getElementById("tExpenses").textContent = `Total Expense : ${totalExpense}`;
}


// ------------------------------------------ Display Transactions ---------------------------------
// Reusable function that renders any array into any list element.

function displayList(arr, listId) {

    document.getElementById(listId).innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let list = document.createElement("li");
        list.textContent = arr[i];
        document.getElementById(listId).append(list);
    }
}