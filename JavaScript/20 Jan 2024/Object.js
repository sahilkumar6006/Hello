const Student = [
    {
        name: "sahil",
        Class: "Btech It",
        Age: 22,

    },
    {
        name: "Ankush",
        class:"Btech Cse",
        Age: 24,
    },
    {
        name: "Sanju",
        class:"Btech Ece",
        Age: 24,
    },
    {
        name: "Anurag",
        class:"Btech civil",
        Age: 24,
    },{
        name: "Nikhil",
        class:"Btech Cse",
        Age: 24,
    },
    {
        name: "Ankush",
        class:"Btech Cse",
        Age: 25,
    }
]

// {"Name": "MohitSir", "Teaches": "REact-native" , "Experience": "3yr"}

// Student.push({"Name": "MohitSir", "Teaches": "REact-native" , "Experience": "3yr"})
// let entries = Object.entries(Student);
// console.log(entries);


// let findValue = Student.map((v,i) => {
//     if(v.name == "Nikhil") {
        
//         v.class= "BTech It"
    
//     }
//     return v;
// });
// console.log(findValue); 



// for(let i =0; i < Student.length; i++ ){
   
//     if(Student[i].name == "Ankush") {
//         console.log(Student[i]);
//         Student[i].class = "Btech Mechanical";
//         console.log("Person found AT" + i );
//         console.log(Student[i]);
//     }
// }


// let arr = Student.find( (v => v.name == "Ankush"));  find will search only for one Value
// console.log(arr);

// let arrMap = Student.find( v => v.name == "Ankush");
// console.log(arrMap);

let arrFilter = Student.filter((v => v.name == "Ankush"));
console.log(arrFilter);
let arrMap = Student.map((v => v.name == "Ankush"));
console.log(arrMap);