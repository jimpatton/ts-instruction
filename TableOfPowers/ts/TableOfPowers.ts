console.log("Welcome to the Squares and Cubes table");
let readl = require('readline-sync');
let choice1 = 'y';
while (choice1 == "y") {
    let nbr1: number = readl.questionInt("Enter an integer: ");
    console.log("");
    console.log("Number\tSquared\tCubed")
    console.log("======\t=======\t=====")
    // square = nbr * nbr
    // cube = nbr *nbr * nbr
    for (let i = 1; i <= nbr1; i++)
        console.log(i + "\t\t" + i * i + "\t\t" + i * i * i)

    choice1 = readl.question('Continue? (y/n)').toLowerCase();

}