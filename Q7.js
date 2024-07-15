//Write a function to find the factorial of a number?

function Factorial(n)
{
    if(n<0)
    {
        return -1;
    }
    else if(n<=1)
    {
        return 1;
    }
    else{
        return n*Factorial(n-1);
    }
}
let n=3;
let fact=Factorial(n);
console.log(`factorial is ${fact}`);