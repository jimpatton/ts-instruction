// import { Die } from "./die.class";
import { Dice } from "./dice.class";

let readline = require('readline-sync');
console.log("Dice roller app")

// let die1: Die = new Die();
// die1.roll();
let choice: string = readline.question("Roll the Dice? (y/n) ");

while (choice == "y") {
    console.log("");
    let dice: Dice = new Dice();
    dice.roll();
    dice.printRoll();
    console.log("");

    choice = readline.question("Roll Again? (y/n) ");
}