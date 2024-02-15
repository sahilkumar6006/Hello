let arr = [1,2,3,4];

const Subarray = (arr) => {
    let arr1 = [];

    for(let i =0; i < arr.lenght; i++) {
        let subbarry = [];
        for(let j =i; j < arr.lenght; j++) {
            subbarry.push(arr.splice(i,j+1));
        }

      arr1.push(subbarry);
    }
    return arr1;

}

let arr2 = Subarray(arr);
console.log(arr2);