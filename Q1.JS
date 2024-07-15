// Create an array of objects and print the object with the highest value.

const objects = [
    { Fname: 'Abu Bakar', Lname : 'Saddique', value: 10 },
    { Fname: 'Ali', Lname : 'Raza', value: 15 },
    { Fname: 'Usman', Lname : 'Umer', value: 5 }
    ];

let maxobj =objects[0];

// console.log(maxobj);

for(key in objects)
{
    if (objects[key].value>maxobj.value)
    {
        maxobj=objects[key];
    }
}
console.log(maxobj);