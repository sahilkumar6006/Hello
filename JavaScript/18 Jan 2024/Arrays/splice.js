const arr = [10, 20, 30, 40, 50, 70, 80];

 TobeSpliced(arr, 2, 3, [90, 50,100]);


 function TobeSpliced(arr, index, noOfItemToBeRemoved, newValArray) {
    console.log("arr.length - noOfItemToBeRemoved + newValArray.length",arr.length, noOfItemToBeRemoved, newValArray.length);
     let newLength = arr.length - noOfItemToBeRemoved + newValArray.length
     console.log("newLength",newLength);
     let newArr = new Array(newLength)
     
     for (let i = 0; i < newArr.length; i++) {
         if (i < index) {
             newArr[i] = arr[i]

         } else if( i < index + newValArray.length) {
         
            newArr[i] = newValArray[i - index ];
          
            

         
           console.log("the value of newArr is" + newArr);
        
       }

         else {
            console.log("in the outermost else" +i );
             newArr[i] = arr[ i+noOfItemToBeRemoved -newValArray.length ]

        }


  }
    console.log("newarr after iteration", newArr);

 console.log(newArr);



}