
const arr = [10, 20, 30, 40, 50, 70, 80];

//TobeSpliced(arr, index, numberoftoberemoved, add values ka array)
TobeSpliced(arr, 2, 3, [90, 50,]);


function TobeSpliced(arr, index, noOfItemToBeRemoved, newValArray) {
    let newLength = arr.length - noOfItemToBeRemoved + newValArray.length
    console.log(newLength);
    let newArr = new Array(newLength)
    let isAdded = false
    for (let i = 0; i < newArr.length; i++) {
        if (i < index) {
            newArr[i] = arr[i]

        } else if ( i < index + newValArray.length ) {
            console.log(index + newValArray.length)
             newArr[i] = newValArray[i - (index )];
                // newArr = newArr.concat(newValArray);
     console.log("the value of newArr is" + newArr);
        }
        else   {

            newArr[i] = arr[i + noOfItemToBeRemoved]
            console.log( newArr[i] = arr[i + noOfItemToBeRemoved] )

        }


    }
    console.log("newarr after iteration", newArr);

    // console.log(newVAlarr);



}

// const arr = [10, 20, 30, 40, 50, 70, 80];

// //TobeSpliced(arr, index, numberoftoberemoved, add values ka array)
// TobeSpliced(arr, 2, 3, [90, 50,]);


// function TobeSpliced(arr, index, noOfItemToBeRemoved, newValArray) {
//     let newLength = arr.length - noOfItemToBeRemoved + newValArray.length
//     console.log(newLength);
//     let newArr = new Array(newLength)
//     let isAdded = false
//     for (let i = 0; i < newArr.length; i++) {
//         if (i < index) {
//             newArr[i] = arr[i]

//         } else if ( i == index && newValArray.length > 0 && isAdded == false) {
          
//             // newArr = newArr.concat(newValArray);

//             isAdded = true;
           
//             console.log("the value of newArr is" + newArr);
//         }

//         else {

//             newArr[i] = arr[i + noOfItemToBeRemoved]

//         }


//     }
//     console.log("newarr after iteration", newArr);

//     // console.log(newVAlarr);



// }