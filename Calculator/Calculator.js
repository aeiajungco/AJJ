var x = parseInt(prompt("Please choose any number from the options below:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide"));
var num1 = parseInt(prompt("Please enter 1st number"));
var num2 = parseInt(prompt("Please enter 2nd number"));

switch (x) {
    case 1: alert (num1 + " + " + num2 + " = " + (num1 + num2)); break;
    case 2: alert (num1 + " - " + num2 + " = " + (num1 - num2)); break;
    case 3: alert (num1 + " * " + num2 + " = " + (num1 * num2)); break;
    case 4: alert (num1 + " / " + num2 + " = " + (num1 / num2)); break;

}