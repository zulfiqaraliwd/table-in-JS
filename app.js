var number = prompt("Enter a number:");
var table = "";

for (var i = 1; i <= 10; i++) {
    table += number + " x " + i + " = " + (number * i) + "\n";
}

console.log(table);
ss