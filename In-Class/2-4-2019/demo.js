//alert("Hello World!");
console.log("Hello World!");

var x;
console.log(x);

x = 10;
console.log(x);

x = "Ramirez";
console.log(x);

var a = 5;
var b = 10;
console.log(a + b);

var sum = a + b;
console.log(sum);

var product = a * b;
console.log(product);

var quotient = a / b;
var remainder = a % b;
console.log(quotient + " " + remainder);

var x = 10;
console.log(x + 1);
console.log(x++);
console.log(x--);
x+=1 // equal to x = x + 1;
console.log(x);

var fname = "Brandon";
var lname = "Ramirez";
var fullname = lname + ", " + fname;
console.log(fullname);
console.log(fullname.length);
console.log(fullname.substr(2, 3)); // substr(start position, length)
console.log(fullname.slice(5, 10)); // slice(start position, end position)

console.log(x > 10);
console.log(x == 10); // == used for comparison
console.log(x < 10);

var flag = x > 2;
console.log(flag);

if (x == 10)
{
    console.log("x is equal to 10");
    flag = "x is 10"
}
else
    console.log("x is not equal to 10");

x = 5;

while (x > 10)
{
    console.log("x > 10");
}

do 
{
    console.log("do while loop");
}
while(x > 10);

for (var i=0; i < 10; i++) //loops from 0-9
{
    console.log(i);
}

/* ------------------------ */
/* | IN-CLASS  ACTIVITIES | */
/* ------------------------ */

console.log("IN-CLASS ACTIVITIES:");
console.log("----------");

//Sum of all odd numbers 1-20
var sumodd = 0;
for(var i = 1; i <= 20; i += 2)
{
    sumodd+=i;
}
console.log("Sum of all odd numbers 1-20: " + sumodd);
console.log("----------");

//Sum of all even numbers 1-20
var sumeven = 0;
for(var i = 2; i <= 20; i += 2)
{
    sumeven+=i;
}
console.log("Sum of all even numbers 1-20: " + sumeven);
console.log("----------");

//Count number of words in a sentence
var str = "This is an example sentence.";
var wordcount = 1;
for(var i = 0; i <= str.length; i++)
{
    if (str == "")
        wordcount = 0;
    else if (str.substr(i,1) == " ")
        wordcount++;
}
console.log("Sentence: " + str)
console.log("Number of words: " +  wordcount);
console.log("----------");

//Reverse a sentence
var str = "This is an example sentence.";
var rchar = "";
var rstrp = "";
var rstr = "";
for(var i = str.length; i >= 0; i--)
{
    rchar = str.substr(i,1);
    rstr = rstrp + rchar;
    rstrp = rstr;
}
console.log("Sentence: " + str)
console.log("Reversed sentence: " + rstr);
console.log("----------");