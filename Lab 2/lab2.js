console.log("----------");
console.log("|   #1   |");
console.log("----------");

// Return first 20 numbers: 1, 6, 11, 16, 21,...
var n = 1;
for(var i = 1; i <= 20; i++)
{
    console.log(i + ": " + n);
    n+=5;
}
console.log("----------");
console.log("|   #2   |");
console.log("----------");

// Return first 10 numbers: 1, 3, 9, 27, 81,...
var n = 1;
for(var i = 1; i <= 10; i++)
{
    console.log(i + ": " + n);
    n*=3;
}
console.log("----------");
console.log("|   #3   |");
console.log("----------");

// List each vowel count in a sentence
var str = "The quick brown fox jumps over the lazy dog.";
var acount = 0;
var ecount = 0;
var icount = 0;
var ocount = 0;
var ucount = 0;
for(var i = 0; i <= str.length; i++)
{
    if (str.substr(i,1) == "a")
        acount++;
    if (str.substr(i,1) == "e")
        ecount++;
    if (str.substr(i,1) == "i")
        icount++;
    if (str.substr(i,1) == "o")
        ocount++;
    if (str.substr(i,1) == "u")
        ucount++;
}
console.log("Sentence: " + str);
console.log("A: " + acount);
console.log("E: " + ecount);
console.log("I: " + icount);
console.log("O: " + ocount);
console.log("U: " + ucount);