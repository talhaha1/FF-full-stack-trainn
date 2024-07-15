// Write a function to reverse a string?
function ReverseString(str)
{
    let arr = str.split('');
    let i=0,j=arr.length-1;

    while(i<j)
    {
        let temp =arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
   return arr.join('');
 
}

let strings="ahmad";
let reversed =ReverseString(strings);
console.log(reversed);