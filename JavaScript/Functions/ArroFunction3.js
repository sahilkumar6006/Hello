// function regularExpression() {
//     if(true){
//         var x = 20;
//         let y = 30;
    
//     }
//     console.log(x); //This is working we are having the global Scope
//     //console.log(y) // this is not working  because we are having the block scope




const arroExpression = () => {

    let a =10
    let b =11
    let c =13
    let d =14
     firstFunction(a,c,b, d)
    if(true) {
        var x = 30;
        let y = 20;
    }

    console.log(x);
}

const firstFunction =(a,c,d,b) =>{
    console.log("value of a is",w);
    console.log("value of b is",x);
    console.log("value of c is",y);
    console.log("value of d is",z);
}


// regularExpression();
console.log(arroExpression());