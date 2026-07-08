// This is simple login system to go dive and deep in promises.

// Promises: promises means it is a container that store result of eventually completed, pending or rejected async js operation. 

console.log("This is loging sysytem")

let dbUserName = "anikesh@27";
let userEnteredUserName = "anikesh@27";

function checkCredential() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            if (userEnteredUserName === dbUserName) {
                resolve("Username is correct, u can login now");
            }
            else {
                reject("Username is incorrect, u can't login");
            }
        }, 2000)
    })

}

checkCredential()
    .then(function (message) {
        console.log(message)
        console.log("Login Success")
    })
    .catch(function (error) {
        console.log(error)
    })