// Salespeople; sp
var Brad = [1500, 10000, 8000];
var Nila = [15000, 25000, 7500];
var Joseph = [30000, 20000, 45000];
var Kesh = [12000, 14000, 10000];
var Lydia = [45000, 30000, 38000];
var Devon = [25000, 16000, 22000];
var Miller = [8000, 30000, 15000];


// -----------
// |    A    |
// -----------
// Logs monthly commission for each salesperson

/*
console.log("MONTHLY COMMISSION PER SALESPERSON:");
console.log("Brad: " + commissionCalc(Brad));
console.log("Nila: " + commissionCalc(Nila));
console.log("Joseph: " + commissionCalc(Joseph));
console.log("Kesh: " + commissionCalc(Kesh));
console.log("Lydia: " + commissionCalc(Lydia));
console.log("Devon: " + commissionCalc(Devon));
console.log("Miller: " + commissionCalc(Miller));
*/

// -----------
// |    B    |
// -----------
// Logs average commission for each salesperson

/*
console.log("AVERAGE COMMISSION PER SALESPERSON:");
console.log("Brad: $" + avgCommissionCalc(Brad));
console.log("Nila: $" + avgCommissionCalc(Nila));
console.log("Joseph: $" + avgCommissionCalc(Joseph));
console.log("Kesh: $" + avgCommissionCalc(Kesh));
console.log("Lydia: $" + avgCommissionCalc(Lydia));
console.log("Devon: $" + avgCommissionCalc(Devon));
console.log("Miller: $" + avgCommissionCalc(Miller));
*/

// -----------
// |    C    |
// -----------
// Salesperson with top commission and display

console.log("------------------------------------------");
console.log("Salesperson | Commission | Avg. Commission");
console.log("------------------------------------------");
console.log("Brad | $" + totalCommissionCalc(Brad) + " | $" + avgCommissionCalc(Brad));
console.log("Nila | $" + totalCommissionCalc(Nila) + " | $" + avgCommissionCalc(Nila));
console.log("Joseph | $" + totalCommissionCalc(Joseph) + " | $" + avgCommissionCalc(Joseph));
console.log("Kesh | $" + totalCommissionCalc(Kesh) + " | $" + avgCommissionCalc(Kesh));
console.log("Lydia | $" + totalCommissionCalc(Lydia) + " | $" + avgCommissionCalc(Lydia));
console.log("Devon | $" + totalCommissionCalc(Devon) + " | $" + avgCommissionCalc(Devon));
console.log("Miller | $" + totalCommissionCalc(Miller) + " | $" + avgCommissionCalc(Miller));
console.log("------------------------------------------");
console.log("Top salesperson: " + topSalesperson());
console.log("------------------------------------------");