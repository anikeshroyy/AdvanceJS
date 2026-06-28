// Employee Management System
// Features:
// 1. Add Employee
// 2. Search Employee
// 3. Filter Employee by Department
// 4. Delete All Employees
// 5. Reset Form
// 6. Delete Specific Employee using filter()


// ------------------------- Global Variables -------------------------

// Stores all employee objects
let employeeArr = [];

// Used to generate unique employee IDs
let employeeId = 1;


// ------------------------- Add Employee -------------------------

document.getElementById("addEmployeeBtn").onclick = () => {

    // Get employee name from input
    const empName = document.getElementById("employeeName").value.trim();

    // Get selected department from dropdown
    const empDepartment = document.getElementById("employeeDepartment").value;

    // Convert salary into Number
    const empSalary = Number(document.getElementById("employeeSalary").value);

    // Employe check (exist or not)
    const employeeExist = employeeArr.some((employee => {
        return employee.name.toLowerCase() === empName.toLowerCase();
    }))

    if (employeeExist) {
        errMsg("Employee Already Added in DB")
        return
    }

    // Create Employee Object
    const employee = {
        id: employeeId++,          // Auto Increment Employee ID
        name: empName,
        department: empDepartment,
        salary: empSalary,
    };

    // Store employee inside array
    employeeArr.push(employee);


    // Clear all input fields
    clearUi();

    // Display updated employee list
    displayEmployee();
};


// ------------------------- Reset Form -------------------------

// Clears all input fields

document.getElementById("resetInputBtn").onclick = () => {

    clearUi();


};


// ------------------------- Delete All Employees -------------------------

document.getElementById("deletAllEmployee").onclick = () => {

    // Empty employee array
    employeeArr = [];

    // Refresh UI
    displayEmployee();

    // Show message
    errMsg("All Employees are deleted");

    // Reset employee ID counter
    employeeId = 1;
};


// ------------------------- Search Employee -------------------------

document.getElementById("srchBtn").onclick = () => {

    // Get employee name entered by user
    let searchedEmployee = document.getElementById("srchemp").value.trim();

    // Clear previous employee list
    document.getElementById("employeeData").innerHTML = "";

    // Search employee using find()
    // find() returns the FIRST matching object
    const foundEmployee = employeeArr.find((employee) => {

        return employee.name === searchedEmployee;

    });

    // If employee exists display it
    if (foundEmployee) {

        employeeList(foundEmployee);

    }

    // Otherwise show error message
    else {

        errMsg("Employee Not Found");

    }

    // Clear search box
    clearUi();

};


// ------------------------- Filter Employee by Department-------------------------

document.getElementById("filterBtn").onclick = () => {

    // Get selected department
    const filterChoice = document.getElementById("filterEmp").value;

    // Clear previous displayed data
    document.getElementById("employeeData").innerHTML = "";

    // If user selects "All", display every employee
    if (filterChoice === "All") {

        displayEmployee();

        return;

    }

    // filter() returns ALL employees
    // belonging to selected department
    const filteredEmployees = employeeArr.filter(employee =>

        employee.department === filterChoice

    );

    // If at least one employee is found
    if (filteredEmployees.length > 0) {

        // Loop through filtered employees
        filteredEmployees.forEach(employee =>

            employeeList(employee)

        );

    }

    // No employee found
    else {

        errMsg("No Employee Found");

    }

};

// ------------------------- Sort Employee by Salary-------------------------
document.getElementById("salarySortBtn").onclick = () => {
    let sortSalary = document.getElementById("sortEmpBySalary").value;
    document.getElementById("employeeData").innerHTML = "";
    if (sortSalary === "hTl") {
        const sortedSalary = employeeArr.sort((a, b) => {
            return b.salary - a.salary;
        })
        displayEmployee()
    }
    else {
        const sortedSalary = employeeArr.sort((a, b) => {
            return a.salary - b.salary;
        })
        displayEmployee()
    }

}

// ------------------------- Sort Employee by Name-------------------------
document.getElementById("nameSortBtn").onclick = () => {
    let nameSort = document.getElementById("sortEmpByName").value;
    document.getElementById("employeeData").innerHTML = "";
    if (nameSort === "zTa") {
        const sortedName = employeeArr.sort((a, b) => {
            return b.name.localeCompare(a.name);
        })
        displayEmployee()
    }
    else {
        const sortedName = employeeArr.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
        displayEmployee()
    }

}

// ------------------------- Total Employee -------------------------
function employeeCount() {
    const totalEmploye = employeeArr.length;
    document.getElementById("totalEmploye").textContent = `Total Employe : ${totalEmploye}`
}

// ------------------------- Total Salary -------------------------
const employeeSalary = () => {
    let totalEmployeeSalary = 0;
    employeeArr.forEach((employee) => {
        totalEmployeeSalary += employee.salary;
    })

    document.getElementById("totalSalary").textContent = `Total Salary : ${totalEmployeeSalary}`
    return totalEmployeeSalary;
}

// ------------------------- Highest Salary -------------------------
function highestSalary() {
    if (employeeArr.length == 0) {
        document.getElementById("highestSalary").textContent = `Highest Salary : 0`
        return;
    }

    let employeHighestSalary = employeeArr[0].salary;

    employeeArr.forEach((employe) => {
        if (employeHighestSalary < employe.salary) {
            employeHighestSalary = employe.salary;
        }
    })
    document.getElementById("highestSalary").textContent = `Highest Salary : ${employeHighestSalary}`

}
// ------------------------- Lowest Salary -------------------------
function lowestSalary() {
    if (employeeArr.length == 0) {
        document.getElementById("lowestSalary").textContent = `Lowest Salary : 0`
        return;
    }

    let employeLowestSalary = employeeArr[0].salary;

    employeeArr.forEach((employe) => {
        if (employeLowestSalary > employe.salary) {
            employeLowestSalary = employe.salary;
        }
    })
    document.getElementById("lowestSalary").textContent = `Lowest Salary : ${employeLowestSalary}`

}

// ------------------------- Lowest Salary -------------------------
function avgSalary() {
    if (employeeArr.length == 0) {
        document.getElementById("averageSalary").textContent = `Average Salary : 0`
        return;
    }

    let totalSal = employeeSalary();
    let avgSal = totalSal / employeeArr.length;
    document.getElementById("averageSalary").textContent = `Average Salary : ${avgSal}`
}

// ------------------------- Delete Specific Employe  -------------------------
function deleteEmployee(id) {
    employeeArr = employeeArr.filter((emp) => {
        return emp.id !== id
    })

    displayEmployee();
}


// ------------------------- Clear Input Fields -------------------------

function clearUi() {

    employeeName.value = "";

    employeeDepartment.value = "";

    employeeSalary.value = "";

    srchemp.value = "";

}


// ------------------------- Display All Employees -------------------------

// Loops through employee array
// and displays every employee

function displayEmployee() {

    // Remove previous list
    document.getElementById("employeeData").innerHTML = "";

    // Display every employee
    employeeArr.forEach((employeeDetails) => {

        employeeList(employeeDetails);
        updateSalary()
    });

}

// ------------------------- Salary Ui Update -------------------------
function updateSalary() {
    employeeCount()
    employeeSalary()
    highestSalary()
    lowestSalary()
    avgSalary()
}

// ------------------------- Display Single Employee -------------------------

// Receives one employee object
// Creates card and appends it to UI

function employeeList(emp) {

    let li = document.createElement("li");

    li.innerHTML = `
        <div class="employee-card">

            <p><strong>Employee ID:</strong> ${emp.id}</p>

            <p><strong>Name:</strong> ${emp.name}</p>

            <p><strong>Department:</strong> ${emp.department}</p>

            <p><strong>Salary:</strong> ₹${emp.salary}</p>

            <button class="dltEmployeeBtn" onclick="deleteEmployee(${emp.id})">
                Delete Employee
            </button>

        </div>
    `;

    document.getElementById("employeeData").append(li);

}


// ------------------------- Error Message -------------------------

// Displays any custom message
// Example:
// Employee Not Found
// No Employee Found
// All Employees Deleted

function errMsg(msg) {

    document.getElementById("employeeData").innerHTML = "";

    let li = document.createElement("li");

    li.textContent = msg;

    document.getElementById("employeeData").append(li);

}