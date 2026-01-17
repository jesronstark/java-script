










 
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello from promise');
//     }, 2000);
// });

// promise.then((data) => {
//     console.log(data);
// });

// async function fetchData() {

//   const response = await fetch('https://api.example.com/data'); // Wait for the fetch call to complete

//   const data = await response.json(); // Wait for the response to be parsed as JSON

//   console.log(data);

// }



// fetchData(); // Call the async function
  



isplaysattionsthere = true;
function playstations() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isplaysattionsthere) {
                resolve("playstation is there buy and go");
            }
            else {
                reject("no playstation available");
            }
        }, 2000);
    });
}

function buyplaystation() { 
    playstations().then((meassage) => {
        console.log(meassage);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("when got get  home");
    });
}


buyplaystation();
