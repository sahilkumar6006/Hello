let args = process.argv;
let n = parseInt(args[2]);
console.log(n);
let arr = []
for(let i =0; i < n; i++) {
    let newNum = 0;

    if(i == 0) {
        arr.push(0)   
    }else if(i == 1) {
        arr.push(1)
    }
    else {
        newNum = arr[i-2] + arr[i-1]
        arr.push(newNum)
    }
    console.log("result of series ",arr);

}