 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 let flen = fruits.length;

 let text = "<ul>";
 for(let i =0; i <flen; i++) {
   console.log(text += "<li>" + fruits[i] + "</li>") 
 }
 text += "</ul>";