let arr = [1,2,3,4,5];
document.write(arr);

let remove = document.getElementById("remove");
remove.addEventListener('click' , removeElement)

 function removeElement() {
        
       arr.pop();
       document.write(arr);
       

 }


    
   
 