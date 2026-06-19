// Student Management System
// Features:
// 1. Add Student
// 2. Add Student at First Position
// 3. Remove First Student
// 4. Remove Last Student
// 5. Search Student
// 6. Sort Students
// 7. Reverse Students
// 8. Prevent Empty Inputs
// 9. Prevent Duplicate Students
// 10. Display Total Students


// ------------------------------------------ Global Variables ------------------------------------------

let studentArr = [];

let studentName = document.getElementById("studentName");
let addStudentBtn = document.getElementById("addStudentBtn");


// ------------------------------------------ Render Student List ---------------------------------------
// Clears the current list and displays all students from the array.

function renderStudent() {
    studentList.innerHTML = "";

    for (let i = 0; i < studentArr.length; i++) {
        let li = document.createElement("li");
        li.textContent = studentArr[i];
        document.getElementById("studentList").append(li);
    }
}


// ------------------------------------------ Total Student Counter -------------------------------------
// Updates the total number of students on the UI.

function numberOfStudent() {
    let totalStudentInArr = studentArr.length;

    document.getElementById("totalStudent").textContent =
        `Total Student: ${totalStudentInArr}`;
}


// ------------------------------------------ Update UI -----------------------------------------------
// Refreshes all UI components that depend on the array.

function updateUi() {
    renderStudent();
    numberOfStudent();
}


// ------------------------------------------ Add Student ----------------------------------------------
// Adds a new student to the end of the array.
// Prevents empty names and duplicate entries.

addStudentBtn.onclick = () => {

    let name = studentName.value.trim();

    if (name == "") {
        document.getElementById("errMsg").textContent =
            "Add Valid Name";
        return;
    }

    else if (studentArr.includes(name)) {
        document.getElementById("errMsg").textContent =
            "Student Already Exists";
    }

    else {
        studentArr.push(name);

        updateUi();

        studentName.value = "";
        document.getElementById("errMsg").textContent = "";
    }
};


// ------------------------------------------ Remove Last Student --------------------------------------
// Removes the last student from the array.

document.getElementById("removeLastStudentBtn").onclick = () => {
    studentArr.pop();
    updateUi();
};


// ------------------------------------------ Remove First Student -------------------------------------
// Removes the first student from the array.

document.getElementById("removeFirstStudentBtn").onclick = () => {
    studentArr.shift();
    updateUi();
};


// ------------------------------------------ Add Student at First -------------------------------------
// Adds a student at the beginning of the array.

document.getElementById("addFirstStudentBtn").onclick = () => {

    let firstStudent = document.getElementById("addStudentAtFirt").value.trim();

    if (firstStudent == "") {
        document.getElementById("errMsg").textContent =
            "Add Valid Name";
        return;
    }

    else if (studentArr.includes(firstStudent)) {
        document.getElementById("errMsg").textContent =
            "Student Already Exists";
    }

    else {
        studentArr.unshift(firstStudent);

        updateUi();

        addStudentAtFirt.value = "";
        document.getElementById("errMsg").textContent = "";
    }
};


// ------------------------------------------ Display Search Result ------------------------------------
// Shows search status message on the page.

function dispSearchResult(message) {

    let para = document.getElementById("dispResult");

    para.style.display = "block";
    para.textContent = message;
}


// ------------------------------------------ Search Student -------------------------------------------
// Checks whether a student exists in the array.

document.getElementById("searchStudentBtn").onclick = () => {

    let srch = document.getElementById("searchStudent").value.trim();

    let srchResult = studentArr.includes(srch);

    if (srchResult) {
        dispSearchResult("Student Found");
    }

    else {
        dispSearchResult("Student Not Found");
    }

    searchStudent.value = "";
};


// ------------------------------------------ Sort Students --------------------------------------------
// Sorts students alphabetically (A-Z).

document.getElementById("sortStudentBtn").onclick = () => {
    studentArr.sort();
    updateUi();
};


// ------------------------------------------ Reverse Students -----------------------------------------
// Reverses the current order of students.

document.getElementById("revStudentBtn").onclick = () => {
    studentArr.reverse();
    updateUi();
};