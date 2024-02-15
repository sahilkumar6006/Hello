let flag = true;

const isPrime = (number) => {
    const div =2;
 for(let i =0; div * div <=number; i++){
    if(div % i == 0) 
    flag =false;
    break;
 }

    if(flag == true) {
        console.log("the number is prime");
    }
    else {
        console.log("the number is not prime");
    }


}

// const isEven = (number) => {
//     if (number % 2 == 0) console.log("the number is  EVEN");
//     else console.log("the number is not EVEN");
// }

// isEven(7);

isPrime(25);