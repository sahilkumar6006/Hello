// for(let i =0; i <= 5; i++) {
//     let arr= '*****'
//     for(let j =5; j=> i; j++) {
//     arr = arr+"*\t"
//     }
//     console.log(arr);
// }

//pattern 2

// let arr = '';
// let n = 5;
// let nsp = n-1;
// for(let i =1;  i <= n; i++) {
//     for(j =nsp; j >= 1; j-- ) {
//         arr = arr + " ";

//     }

//     for(k = 0; k <=i; k++) {
//         arr = arr+"*";
//     }
//     console.log(arr);
// }


//pattern 3


// for(let i = 1; i>= 5; i++) {
//     let arr = '';
//     for(let j = 5; j >= i; j++) {
//         arr = arr + "*\t";0
//     }
//     console.log(arr);
// }

// let n = 5;

  
// for(let i = 1; i <= n; i++) {
//     let str = '';
    
//     for(let j = n; j >= i; j--) {
//         str = str+ "*\t";
//     }

    
//     console.log(str);

// }


let n =5;

for(let i = 1; i <=n; i++) {
    let str ='';
  for(let j = n-1; j >= i; j--) {
    str = str + "-";

  }

  for(let k = 1; k <= i; k++) {
    str = str + "*"
  }
  console.log(str);

}