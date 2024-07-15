// Create an array of strings and print the longest string.


const str=['Pakistan','America', 'India', 'canada','China']

let longest=str[0];

for(let i=1; i<str.length;i++)
{
    if(str[i].length>longest.length)
    {
        longest=str[i];
    }
}
console.log(`Longest string in array of strings is: ${longest}`);