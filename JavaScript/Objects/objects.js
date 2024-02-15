let obj ={
    firstName: "sahil",
    lastName: "kumar",
    age : 20,
    greet: function() {
        return this.firstName + this.lastName;
    }
}

obj.firstName = 'abc';

console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.age);
console.log(obj.greet());
console.log(obj.age);