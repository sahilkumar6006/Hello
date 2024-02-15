const array2 = [7, 2, 5, 4, 2, 1, 6, 9, 5, 6, 8, 91, 10, 5, 14];
// const array1 = [45, 75, 6, 8, 9, 10, 5, 14];
// find and count duplicate  number 
//example
// 1:5 
//2:3



let obj={
Number:0 ,
count: 0,
};
for (let i = 0; i < array2.length; i++) {
    let count = 0;
    for (let j = i + 1; j < array2.length - 1; j++) {
     
        if (array2[i] === array2[j]) {
            count++;
         
            
            continue;
        }
       
    }

obj.Number=array2[i];
obj.count = array2[count];
 
    
}
console.log(obj);











