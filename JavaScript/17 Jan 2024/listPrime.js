let arr = [2, 7, 9, 13, 16, 20, 23, 27, 37, 49];

let list = [];

for (let i = 0; i < arr.length; i++) {
    const num =  isPrime(arr[i]);
    if(num !== undefined) {
        list.push(isPrime(num));
    }
   
 
}

console.log(list);
function isPrime(n) {
    let flag = true;
    for (let i = 2; i < n/2; i++) {
        if (n % i == 0) {
            flag = false;
        }
    }
    if(flag == true) {
        return n;
        
    }

}