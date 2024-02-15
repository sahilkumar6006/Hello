// const arr = [10,20,30,40,50];

// console.log(arr.length);
// console.log(arr.toString()); //to string in array convert the array by comma separated
// console.log(arr.join(""));


// At Method
// const arr = ["a" , "b", "c" , "d", "e" ,"f"];

// console.log(arr.at(4));


//join method is same as the toString() method in this case we can specify the  , *

// const arr = ["sahil", "ankush", "sunil", "ashok", "anurag"];

// console.log(arr.join("."));


// const arr = [10,20,30,40,50,60];
// arr.shift();
// console.log(arr);

// arr.unshift(40);
// console.log(arr);
// delete arr[0];
// console.log(arr);   //Never use the delete method instead use the push and pop method


// const arr2 = [70,80,90,100]
// let c = arr.concat(arr2); // concate return the new array after concating we need to join
// console.log(c);


// const arr5 = [ 10,20,[30,40,50], 60, 70, [80,90,20,[30,50,30,[30,50]]]];

// // const arr6 = arr5.flat(Infinity);
// // const arr6 = arr5.flat(1);
// const arr6 = arr5.flat(2);

// console.log(arr6);

//Splice Method


// const arrayMethod = ["a", "b", "c" , "d"];
// arrayMethod.splice(2,1,"e","f", "g" );
// console.log(arrayMethod);

// Using splice() to Remove Elements
// const arrayMethod = ["a", "b", "c" , "d"];
// arrayMethod.splice(2,1);
// console.log(arrayMethod);

// //ToSpliced Method
// const months = ["Jan", "Feb", "Mar", "Apr"];
// let array2 =months.toSpliced(2,1);
// console.log(months);
// console.log(array2);


//Slice method
// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.
// const months = ["Jan", "Feb", "Mar", "Apr"];
// // The method then selects elements from the start argument, and up to (but not including) the end argument.
// let slicedArray = months.slice(0,3);
// console.log(slicedArray);



//Splice Method Pratice

// const arr4 = ["sahil", "ankush", "anurag", "sunil", "k"];
// arr4.splice(3,2, "k", "l")
// console.log(arr4);

// const arr4 = ["sahil", "ankush", "anurag", "sunil", "k"];
// // arr4.splice(3,1)
// console.log(arr4);

// arr4.splice(-2,1 , "a")

// console.log(arr4);

// const arr5 = arr4.slice(2,4);
// console.log(arr5);


