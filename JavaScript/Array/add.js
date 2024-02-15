let add = document.getElementById("add");
add.addEventListener('click', addItems);

const arr = [1,2,3,4,5];
document.write(arr);

function addItems() {
   
    arr.push(5 , 6,7,8, 9, 10, 11, 12, 13, 14);
    for(let i =0; i < arr.length; i++) {
        document.write(arr[i]);
    }

}


