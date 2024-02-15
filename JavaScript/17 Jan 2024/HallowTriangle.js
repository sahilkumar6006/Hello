let n =5;
for(let i =0; i <= n; i++) {
    let str =""
    for(let j =0; j <= i; j++) {
       if( j == 0 || j  == i || i == n) {
        str = str + "*\t"
       }else {
        str = str + " \t";
       }
       
        
       

    }
    console.log(str);
}