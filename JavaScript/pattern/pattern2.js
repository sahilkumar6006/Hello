let n = 5;
for(let i =1; i <= n; i++) {
    let str ='';
    for(let j =1; j <=  i; j++) {
    str = str + "*";
    }
    
    for(let j = n-1; j > 0; j--) {
        str.splice(1,1,j);
    }
    console.log(str);
}