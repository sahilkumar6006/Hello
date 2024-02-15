function employee (name, age ,dob){
    this.name = name;
    this.age = age;
    this.dob = dob;

    function method() {
        console.log(`"my nam is ${name} + "and my age is" + ${age} + "the dob is "+ ${dob}`);
    }
}

employee.prototype.salary = "200";

const fred =new  employee("sahil",21, 1997)

console.log(fred.method);
console.log(fred.age);