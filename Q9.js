// Write a function to check if a number is even or odd.

const isEvenOrOdd = (num) =>{

    if(num%2===0)
        return `${num} is even `;
    else{
        return`${num} is odd `;
    }
};


console.log(isEvenOrOdd(5)); 
console.log(isEvenOrOdd(10)); 
console.log(isEvenOrOdd(-7)); 
