function MyClass () {
    this.val = 42;

    setTimeout(function () {
        console.log("This is the values" , this.val);
    },1000)
}