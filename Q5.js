//Sort an array of numbers in ascending order.



let arr = [5, 2, 9, 1, 5, 6];

//numbers.sort((a, b) => a - b); this is built -in function , i am douing it using bubble sort 


for(let i=0; i<arr.length;i++)
{
    for(let j=0; j<arr.length-i-1;j++)
    {
        if(arr[j]>arr[j+1])
        {
           let temp =arr[j];
           arr[j]=arr[j+1];
           arr[j+1]=temp;
        }
    }
}

console.log("Sorted numbers in ascending order:", arr);
