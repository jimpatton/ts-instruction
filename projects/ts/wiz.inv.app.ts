export { }
import { Item } from "./items.class"
let readline = require('readline-sync');
console.log("The Wizard Inventory Game")
let items: Item[] = [
    new Item(1, "wooden staff"),
    new Item(2, "wizard hat"),
    new Item(3, "cloth shoes"),
];
let command: string = "";
while (command != "exit") {
    displayMenu();
    command = readline.question("Command: ")
    switch (command) {
        case "show":
            showItems();
            break;
        case "grab":
            grabItem();
            break;
        case "edit":
            editItem();
            break;
        case "drop":
            dropItem();
            break;
        case "exit":
            break;

    }
}

function dropItem() {
    console.log("Drop an item: ");
    let id: number = readline.questionInt("Item id to drop: ");
    // let idx: number = 0;
    // let name: string = '';
    // items.forEach((item, index) => {
    //     if (item.id == id) {
    //         idx = index;
    //         name = item.name;
    //     }

    // });
    let item: Item = findItem(id);


    let idx: number = items.indexOf(item);
    items.splice(idx, 1);
    console.log(`${item.name} was removed.`);


}

function editItem() {
    console.log("Edit an item: ");
    let id = readline.questionInt("Item # to edit: ")
    let item: Item = findItem(id);
    let newName: string = readline.question("New name: ");
    item.name = newName;
    console.log(`Item ${id} was updated`);
}







function grabItem() {
    if (items.length == 4) {
        console.log("You can't carry any more items, please drop");
    } else {
        let id: number = readline.questionInt("ID? ");
        let name: string = readline.question("Name? ");
        let item: Item = new Item(id, name);
        items.push(item);
        console.log(`${name} was added.`);

    }
}

function showItems() {
    console.log("\nShow Items");
    for (let item of items) {
        console.log(`${item.id}: ${item.name}`)
    }
    console.log("");

}



function displayMenu(): void {
    console.log("COMMAND MENU")
    console.log("Show - Show all items");
    console.log("Grab - Grab an item");
    console.log("Edit - Edit an item");
    console.log("Drop - Drop an item");
    console.log("Exit - Exit program");
    console.log("");
}

function findItem(id: number): Item {
    let item: Item = new Item()
    for (let i of items) {
        if (i.id == id) {
            item = i;
            break;
        }
    }
    return item;
}