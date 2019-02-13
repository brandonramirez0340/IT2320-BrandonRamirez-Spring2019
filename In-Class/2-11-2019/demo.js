// break

for(var i = 0; i < 10; i++)
{
    console.log(i);
    if (i==5)
        break;
}

// parseInt and parseFloat

var x = 100.34332;
var y = "1232.222";

console.log(x);
console.log(parseInt(x));
console.log(parseFloat(x));

console.log(y);
console.log(parseInt(y));
console.log(parseFloat(y));

// prompt

var input = prompt("Enter a number");
console.log(input);

var inputNum = parseInt(input);
console.log(inputNum);

var inputNum = parseFloat(input);
console.log(inputNum);

var strInput = prompt("Enter a string");
console.log(strInput);
for(var i = 1; i <= strInput.length; i++)
{
    console.log(strInput.substr(0,i));
}

// arrays
// index 0 to length-1

var num = [0,2,4,6,8]; // one variable with multiple values
var str = ["zero", "two", "four", "six", "eight"];

console.log(num);
console.log(str[4]);

var arrsum = 0;
for (var i = 0; i < num.length; i++)
{
    arrsum = arrsum + num[i];
}
console.log(arrsum);

var arravg = arrsum / num.length;
console.log(arravg);

var fruits = ["apple", "banana", "orange", "grape", "watermelon"];
console.log("Original: " + fruits);

fruits.pop(); // removes last value
console.log("Pop: " + fruits)

fruits.push("kiwi"); // adds value to end
console.log("Push: " + fruits);

fruits.shift(); // removes first value
console.log("Shift: " + fruits)

fruits.unshift("blueberry"); // adds value to front
console.log("Unshift: " + fruits)

fruits.sort(); // sorts alphabetically or min to max
console.log("Sort: " + fruits);

writeToConsole();

/* ------------------------ */
/* | IN-CLASS  ACTIVITIES | */
/* ------------------------ */

console.log("IN-CLASS ACTIVITIES:");
console.log("----------");

// Display "hello" in console
console.log("hello");
console.log("----------");

// Add 1 through 5
var sum = 0;
for (var i = 1; i <= 5; i++)
{
    sum+=i;
}
console.log(sum);
console.log("----------");

// Display 100 to 1 by 10s
for (var i = 100; i >= 1; i-=10)
{
    console.log(i);
}
console.log("----------");

// Spell hello using substr()
var str = "hello";
for(var i = 1; i <= str.length; i++)
{
    console.log(str.substr(0,i));
}
console.log("----------"); 