function writeToConsole() // definition

{
    console.log("I am demofunction.js");
}

var x = writeToConsole; //alias
console.log(x); // incorrect
console.log(x()); // correct

writeToConsole(); // call