//Redeclaratin is not possible
// const x = 10;
// const x = 20;
// const x = x + 30;

//when to use const
//an array
// an object
// a new function
// regExp


//const Arrays
// const cars = ["saab", "Volvo", "c"];
// console.log(cars);
// cars[0] = "a";
// console.log(cars);
// cars.push("b");
// console.log(cars);

//const is block Scope
const x = 10;

{
    const x = 20;
    console.log(x);
}

console.log(x);

console.log("sahil " + 12);