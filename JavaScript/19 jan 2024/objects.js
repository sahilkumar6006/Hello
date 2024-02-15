let object = {
    firstname: "sahil",
    lastname: "Kumar",
    age: 21,
    class: "BTECH IT"

}


// console.log(object.firstname);
// console.log(object.lastname);
// console.log(object.age);
// console.log(object.class)


// let keys = Object.keys(object);
// console.log(keys);

// let value = Object.values(object);
// console.log(value);

// let entries = Object.entries(object);
// console.log(entries);



//looping in the object 
for(let x in object) {
    console.log(x + object[x]);
}