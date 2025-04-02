console.log("Welcome to the Factorial Calculator");
let rline = require('readline-sync');
let choice2 = "y";

while (choice2 == "y") {
    let nbr2: number = rline.questionInt("Enter an integer that's greater than 0 and less than 10: ");
    let factorial = 1
    for (let i = 1; i <= nbr2; i++)
        factorial *= i

    console.log("The factorial of " + nbr2 + " is " + factorial);

    choice2 = rline.question('Continue? (y/n)').toLowerCase();
}
