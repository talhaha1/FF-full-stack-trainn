//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively.


// Synchronous function with delays
function fetchDataSync() {
    try {
        // API 1 with delay 10000ms (10 seconds)
        fetchDataFromAPI1().then(data1 => {
            console.log("Data from API 1:", data1);

            // API 2 with delay 5000ms (5 seconds)
            return fetchDataFromAPI2();
        }).then(data2 => {
            console.log("Data from API 2:", data2);

            // API 3 with delay 7000ms (7 seconds)
            return fetchDataFromAPI3();
        }).then(data3 => {
            console.log("Data from API 3:", data3);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Simulated API functions (same as in asynchronous example)
function fetchDataFromAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from API 1");
        }, 10000);
    });
}

function fetchDataFromAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from API 2");
        }, 5000);
    });
}

function fetchDataFromAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from API 3");
        }, 7000);
    });
}


console.log("Synchronous Function")
fetchDataSync();

