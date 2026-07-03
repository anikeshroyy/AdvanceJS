const student = {
    name: "Anikesh",
    age: 23,
    department: "Cse",
    college: "Gec Jamui",
    cgpa: 7.89,
    course: {
        technicalCourse: {
            sub1: "DBMS",
            sub2: "Os",
        },

        nonTechnicalCOurse: {
            sub1: "Soft Skill",
            sub2: "Indian History",
            sub3: "Analog Electronincs",
        },
    },

    fee: annualFee(),
    semesterCompleted: ["first", "second", "third", "fourth"],
}

function annualFee() {
    return 2000;
}

console.log("----------------OBJ-------------------")

console.log("This is", typeof (student));
console.log(student);

console.log("-----------------JSON------------------")

const newStudent = JSON.stringify(student);
console.log("This is", typeof (newStudent));
console.log(newStudent);

console.log("-----------------OBJ------------------")

const newStudentObj = JSON.parse(newStudent);
console.log("This is", typeof (newStudentObj));
console.log(newStudentObj);