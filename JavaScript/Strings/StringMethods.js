// let text = "abcdefghijklmnopqrstwxyz";
// let length = text.length;
// console.log(length);

// const a = "this is my name ";
// let c = a.split("");


// let text = "abcde";
// let char = text.charAt(3);
// let char1 = text.charAt(0);
// console.log(char);
// console.log(char1);


//split method is used to convert string into the array

// let text = "My name is ,sahil ";
// let spltingText = text.split(" "); //on spaces 
// let spltingText2 = text.split(","); //on comma
// let spltingText3 = text.split("|");// on  pipe

// console.log(spltingText);


//Extrating String Parts 
// slice(start, end)
//substring(start,end)
//substr(start,length)

//Slice Method
// in slice method end is not included

// let text = "Apple";
// let length = text.length;
// console.log(length);
// let modifiedText = text.slice(-4,-2);
// console.log(modifiedText);

// let text = "Apple";
// let modifiedText = text.substring(1,3);
// console.log(modifiedText);

//ToUpperCase
// let text = "helloworld";
// let uppetext = text.toUpperCase();
// console.log(uppetext);


// let uppetext2 = text.toLocaleLowerCase();
// console.log(uppetext2);


//concat
// let text1 ="Hello";
// let text2 ="world";

// let newText =text1.concat(" ", text2);
// console.log(newText);



// let text1 = "    HelloWorld    ";
// let textTi = text1.trimEnd();
// console.log(textTi);

//Searching Methods

// let text = "please locate where 'locate' occurs"

// let index = text.indexOf("locate");
// let lastIndex = text.lastIndexOf("locate");
// console.log(index);
// console.log(lastIndex);

let text = "please locate where 'locate' occurs";
let searchinh = text.search("locate");
console.log(searchinh);
