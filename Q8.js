// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.

const SumofEven=(arr) => {
    let sum=0;
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            sum+=arr[i];
        }
    }
    return sum;
};


let arr=[1,2,3,4,5,6,7,8,9,10];
let sum=SumofEven(arr);
console.log(`sum of even numbers in array is ${sum}`);