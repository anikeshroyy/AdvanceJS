// This is simple login system to go dive and deep in promises.

console.log("This is loging sysytem")

let dbUserName = "anikesh@27";
let userEnteredUserName = "anikesh@27";
let userEnteredPass = "aniPass"
let dbUserPass = "aniPass"

function checkCredential() {
    console.log("Checking UserName from DB");
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


function checkPass() {
    console.log("Checking Password from DB");

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (userEnteredPass === dbUserPass) {
                resolve("Password is correct");
            }
            else {
                reject("Password is wrong")
            }
        }, 2000)
    })
}


function fetchGithub() {
    console.log("Fetching user data from Github")
    const gitApi = "https://api.github.com/users/anikeshroyy";
    return fetch(gitApi);
}


checkCredential()
    .then(function (message) {
        console.log(message)

        return checkPass();
    })
    .then((message) => {
        console.log(message)
        console.log("Login Success")

        return fetchGithub();
    })
    .then(function (response) {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        console.log("Github UserName -", data.name);
        console.log("Github Flowers -", data.followers);
        console.log("Github Repo -", data.public_repos);
        console.log("Github Bio -", data.bio);
    })
    .catch(function (error) {
        console.log(error)
    })




// Promises: promises means it is a container that store result of eventually completed, pending or rejected async js operation.

// Working of PROMISES

// 1. checkCredential() is called.

// 2. It immediately returns a Promise object.
//    At this moment the Promise is in the "Pending" state.

// 3. Inside the Promise, setTimeout() starts a timer for 2 seconds.
//    JavaScript does not wait here; it continues executing the remaining code.

// 4. After 2 seconds, the callback inside setTimeout() is executed.

// 5. The entered username is compared with the database username.

// 6. If both usernames match,
//    resolve("Username is correct, you can login now") is called.
//    This changes the Promise state from Pending → Fulfilled (Resolved).

// 7. If they don't match,
//    reject("Username is incorrect, you can't login") is called.
//    This changes the Promise state from Pending → Rejected.

// 8. If the Promise is resolved,
//    the attached .then() callback is executed and receives the resolved value.

// 9. If the Promise is rejected,
//    the attached .catch() callback is executed and receives the rejection reason.