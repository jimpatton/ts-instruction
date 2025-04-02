//while loop  - choice = 'y'
let rl = require('readline-sync');
let choice: string = 'y';

while (choice == 'y') {
    //indexed for loop
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);

    }




    let names: string[] = ['Jim', 'Andy', 'Nick', 'Adrian', 'Celina', 'Heath', 'Joe', 'Christian']
    //for of loop
    for (let s of names) {
        console.log("student", s)
    }

    names.sort();

    // foreach loop
    names.forEach(str => console.log(`name is ${str}`));



    choice = rl.question('Continue? (y/n)').toLowerCase();
    //if statement
    if (choice == 'z')
        console.log('z entered');
}



