let args = process.argv;
let n = parseInt(args[2]);
console.log(n);
let flag = true;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        flag = false;
        console.log( i + " the number is divided by i");
        break;
    }
}

if (flag == true) {
    console.log(n + "the number is prime");
} else {
    console.log(n + "the no is not prime");
}