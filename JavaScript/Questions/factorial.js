function fact (n) {
    let fact =1;
    if( n == 1 || n == 0) {
       console.log(1);
    }else {
        for(let i =n; i > 0; i--) {
            fact = fact *i;
        }
    
        console.log(fact);
    }

    
}


fact(5);