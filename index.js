const destinationURL = "http://localhost:3000/users";



const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    }),
};

function submitData () {
    fetch(destinationURL, configObject)
.then(function(response) {
    return response.json();
})
.then(function (obj) {
    console.log(obj.id);
    document.appendChild(obj.id)

    

})
.catch(function (error) {
    alert("Uh Oh! Try again");
    console.log(error.message);
})
}


// const userInfo ={
//     name: "",
//     email: ""
// }


// function submitData(userInfo) {
// const handleData = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(userInfo),
// };
// fetch("http://localhost:3000/users", handleData)
// .then(function (response) {
//     return response.json();
// })
// .then(function(info) {
//     console.log(info);
// })
// .catch(function (error) {
//     alert("Oh no! Try again");
//     console.log(error.message);
// });
// }



// const captureData = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(submitData),
// };
// fetch("http://localhost:3000/users", captureData)
// .then(function (response) {
//     return response.json();
// })
// .then(function(info) {
//     console.log(info);
// })
// .catch(function (error) {
//     alert("Oh no! Try again");
//     console.log(error.message);
// });