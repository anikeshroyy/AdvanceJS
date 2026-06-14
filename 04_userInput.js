let userName;

document.getElementById("mySubmit").onclick = function () {
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${userName}`;
    console.log(userName);
};

// let userName2;
// userName2 = window.prompt("Enter Your UserName");
// console.log(userName2);