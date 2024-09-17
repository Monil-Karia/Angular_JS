//Array Manipulation
let fruits = ["apple", "banana", "orange", "grape"];
fruits.push("watermelon");
fruits.shift();
fruits.splice(1, 0, "kiwi");
fruits.forEach(fruit => {
    console.log(fruit);
});

//Array Transformation
let numbers = [3, 6, 9, 12, 15];
let doubledNumbers = numbers.map(num => num * 2);
let evenNumbers = doubledNumbers.filter(num => num % 2 === 0);
let sum = evenNumbers.reduce((acc, num) => acc + num, 0);
console.log(doubledNumbers); 
console.log(evenNumbers);   
console.log(sum);     


//Array Searching and Sorting
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let includesCharlie = names.includes("Charlie");
console.log(includesCharlie); 
let indexOfDavid = names.indexOf("David");
console.log(indexOfDavid);
names.sort();
console.log(names); 
let longNames = names.filter(name => name.length > 4);
console.log(longNames);

