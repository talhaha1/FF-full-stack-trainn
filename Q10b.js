
// Asynchronous function with delays
async function fetchDataAsync() {
    try {
        const [data1, data2, data3] = await Promise.all([
            fetchDataFromAPI1(),
            fetchDataFromAPI2(),
            fetchDataFromAPI3()
        ]);

        console.log("Data from API 1:", data1);
        console.log("Data from API 2:", data2);
        console.log("Data from API 3:", data3);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Simulated API functions (same as in synchronous example)
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


console.log("Asynchronous Function")
fetchDataAsync();
