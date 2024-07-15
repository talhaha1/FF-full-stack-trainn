function checkPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}

function checkPalindromeInput() {
    let userInput = document.getElementById("userInput").value;
    let result = checkPalindrome(userInput);
    let resultElement = document.getElementById("result");
    if (result) {
        resultElement.textContent = "The string is a palindrome";
    } else {
        resultElement.textContent = "The string is not a palindrome";
    }
}
