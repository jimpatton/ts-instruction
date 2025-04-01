import { Friend } from "./friend.class";

console.log("Welcome to the Friend app");

let friends: Friend[] = [
    new Friend("Ann", 27, "ann@gmail.com", true),
    new Friend("Bill", 31, "bill@gmail.com", false),
    new Friend("Tony", 48, "tony@gmail.com", true),
    new Friend("Rich", 52, "rich@gmail.com", true),
    new Friend("Todd", 53, "todd@gmail.com", false),
];

//display header
console.log("Name\tAge\tEmail\t\tBFF");

//loop through array to display properties
for (let friend of friends) {
    console.log(`${friend.name}\t${friend.age}\t${friend.email}\t${friend.bff}`)
}

