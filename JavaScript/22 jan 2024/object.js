let obj1 = {
    1: "sahil",
    2: "kumar",
    3: 21
}

let obj2 = {
    3: "a",
    4: "k",
    5: 52
}
console.log(obj1);
console.log(obj2)
let targetObj = Object.assign(obj1, obj2)
console.log(targetObj);

console.log(targetObj === obj1);

for(let x in obj1) {
    console.log(x, obj1[x]);
}

let keys = Object.keys(obj1)
console.log(keys);

let values = Object.values(obj1);
console.log(values);

let entries = Object.entries(obj1);

console.log(entries);