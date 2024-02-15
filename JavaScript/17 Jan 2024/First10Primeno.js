let arr = [];
for(let i =1; i < 100; i++) {
   let val =checkPrime(i);
   console.log(val);
   if(val !== undefined){
    arr.push(val);

   }
  
   
}

let first10 = [];
for(let i =1; i <= 10; i++) {
    first10.push(arr[i]);
}
console.log(first10);

function checkPrime(n) {
   
    let isPrime = true;
    for(let i =2; i < n/2; i++) {
        if(n % i == 0) {
            isPrime = false;
        }
    }
   if(isPrime == true) {
    return n;
   }
 
}

