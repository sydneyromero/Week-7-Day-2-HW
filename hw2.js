//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
console.log('//////////// START ///////////////')
console.log();
console.log();
function Peep(name, age){
    this.name = name;
    this.age = age;

    //method 
    this.printInfo = () => {
        console.log(`Our peep ${this.name}, is ${this.age} years old`);
    }

    this.getOlder = () => { this.age++;};

}

function Person(){
    this.name;
    this.age;

    this.setAge = (age) => {this.age = age};
    this.setName = (name) => {this.name = name};
}

class People {
    name = 'noname';
    age = 0;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo(){
        console.log(`Our peep ${this.name}, is ${this.age} years old`);
    }
    getOlder(){ this.age++;};
}
/*
let my_peep = new Peep("Nunya B.",27)

console.log(my_peep);
*/

let syd = new Peep('Sydney', 30);
let nathan = new Peep('Nathan', 28);

syd.printInfo();
console.log();
console.log();
nathan.printInfo();
console.log();
console.log();

syd.getOlder();
syd.getOlder();
syd.getOlder();
syd.printInfo()
console.log();
console.log();

nathan.getOlder();
nathan.getOlder();
nathan.getOlder();
nathan.printInfo()
console.log();
console.log();

syd.getOlder();
syd.getOlder();
syd.getOlder();
syd.printInfo()
console.log();
console.log();

nathan.getOlder();
nathan.getOlder();
nathan.getOlder();
nathan.printInfo();
console.log();
console.log();

/*
 let moser = new Person();
 moser.setName('Moser');
 moser.setAge(32);

 console.log(moser);
 */
 
/*
let syd2 = new People('Sydney', 10);
let nathan2 = new People('Nathan', 10);

syd2.printInfo();
nathan2.printInfo();

nathan2.getOlder();
nathan2.getOlder();
nathan2.getOlder();
nathan2.printInfo();
*/


console.log();
console.log();
console.log('//////////// FIN ///////////////')
console.log();
console.log();