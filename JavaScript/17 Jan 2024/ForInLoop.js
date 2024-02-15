// The JavaScript for in statement loops through the properties of an Object:

// for(key in object) {
//     //code block to be executed
// }

// const person = {
//     firstName : "sahil",
//     lastName: "Kumar",
//     age: 20,
// }

// let str = "";
// for(let x in person) {
//     str += person[x];
// }
// console.log(str);



// let array = [10,20,30,40,50];

// let str ="";
// for(let x in array) {
//     str += array[x];

// }
// let value =str.split();
// console.log(value);


//forEach
//for Each function takes a callback and retrun a value
const arr = [10, 20 , 30 , 40, 50, 60];
let str =""
arr.forEach(hello);

function hello(value, index, arr) {
str += value;
}
console.log(str);