console.log("hello");

DoSomething();

var x = 100;
ChangeMyVariable(100);
console.log("Outside ChangeMyVariable: " + x);

var y = ReturnABoolean(x);
console.log("Returned value from ReturnABoolean: " + y)

var x = "X";
var y = 732;
Display(x, y, false);

var x = 20;
var y = 10;
var add = AddNumbers(x, y);
var sub = SubtractNumbers(x, y);
var mul = MultiplyNumbers(x, y);
console.log("X = " + x + ", Y = " + y)
console.log("Add X and Y: " + add);
console.log("Subtract X and Y: " + sub);
console.log("Multiply X and Y: " + mul);

console.log(Calculate(20, 10, "+"));
console.log(Calculate(20, 10, "-"));
console.log(Calculate(20, 10, "*"));
console.log(Calculate(20, 10, "/"));


/* ------------- */
/* | FUNCTIONS | */
/* ------------- */

function DoSomething()
{
    console.log("DoSomething function did something");
}

function ChangeMyVariable(x)
{
    x = "I changed the variable";
    console.log("Inside ChangeMyVariable function: " + x);
}

function ReturnABoolean(x)
{
    if (x == 0)
        return false;
    else
        return true;
}

function Display(a, b, c)
{
    console.log("Inside Display function: " + a + ", " + b + ", " + c);
}

function AddNumbers(x, y)
{
    var sum = x + y;
    return sum;
}

function SubtractNumbers(x, y)
{
    var dif = x - y;
    return dif;
}

function MultiplyNumbers(x, y)
{
    var pro = x * y;
    return pro;
}

function Calculate(a, b, c)
{
    if(c == "+")
        output = a + b;
    else if(c == "-")
        output = a - b;
    else if(c == "*")
        output = a * b;
    else if(c == "/")
        output = a / b;
    else
        output =  "An error has occurred"; 
        
    console.log(output);
    return output;
}

function Hover()
{
    console.log("You hovered over this button");
}

function ChangeStyle(x) 
{
    x.innerHTML = "Clicked";
    x.style.backgroundColor = "green";
    x.style.color = "white";
    x.style.width = "100px";
    //x.style.padding = "10px";
    //x.style.margin = "10px";
}