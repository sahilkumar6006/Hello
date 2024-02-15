let arr = [10,20,30,40,50];
let mapArr = arr.map(v => v % 2 == 0);
console.log(mapArr);


let reduceArr = arr.reduce(v => v %2 == 0) 
console.log(reduceArr);


let fiterarr = arr.filter(v => v% 2 === 0) 
console.log(fiterarr);