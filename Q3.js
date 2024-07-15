// Write a function to check if a string is a palindrome


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            return 0;
        }
    }
    return 1;
}

// let strings=mdam;
rl.question('Enter the string you want to check for a palindrome: ', (strings) => {
    if (checkPalindrome(strings)) {
        console.log('The string is a palindrome');
    } else {
        console.log('The string is not a palindrome');
    }
    rl.close();
});
