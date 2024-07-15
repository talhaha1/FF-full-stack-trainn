// Find the index of an element in an array.


let arr = [5, 2, 9, 1, 5, 6];
let elementToFind = 5;
let idx = [];// use to store indexes where 5 occurs

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementToFind) {
        idx.push(i);
    }
}

if (idx.length > 0) {
    console.log(`Indices of ${elementToFind} in the array: ${idx}`);
} else {
    console.log(`${elementToFind} is not found in the array.`);
}
