//ECMAScript

//let vs const. Scope
//(a,b,c) => {};
//a => a*5  one line function;

//spread syntax
//let parts = ["sholders", "knees"];
//let lyrics = ["head", ...parts, "and", "toes"];
//shallow copy

// const myFunction = (v,w,x,y,z) => {};
// let args = [0,1];
// myFunction(-1, ...args, 2, ...[3]); //-1,0,1,2,3

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// const zebra = new Animal('Zebra');
// zebra.speak();

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     speak() {
//         console.log(`${this.name} barks.`)
//     }
// }

// class Rectangle {
//     constructor(height = 1, width = 1) { //These are default values if none are given
//         this.height = height;
//         this.width = width;
//     }
//     getArea() {
//         console.log(`${height} * ${width} = ${height*width}`);
//     }
// }

// let myRectangle = new Rectangle();
// let myOtherRectangle = new Rectangle(10,5);

// function outerFuction() {
//     let message = 'Hello';

//     function innerFunction() {
//         console.log(message);
//     }

//     return innerFunction;
// }

// const inner = outerFuction();
// inner(); // output: "Hello, world!"

// Currying
// let add = function (a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         };
//     };
// };
// console.log(add(2)(3)(4)); //output 9

// let x = y || 12; //This will default to y unless y is falsy;
// let x2 = y ?? 12; //If y is null or undefinded 12 will be assigned to x

// let students = ["John", "Steve", "George"];
// let [student] = students; //pulls first value of array


// const me = {first: "Justin", last: "Luce", age: 20};

// const {first, age} = me;

// const myModule = (function() { //the declaration of my modules makes this private
//     add code
// }());

let arrayOne = [1,10,5];
let arrayTwo = [6,2,8];
let oneTwo = [...arrayOne, ...arrayTwo];
let threeArray = oneTwo.slice().sort((a,b) => {return a-b;});
function sortOne() {
    return console.log(`${threeArray} > sort array  ${oneTwo} > unsorted array`)
};
sortOne();


// Create a class that could be used to represent all animals. Provide it with the attributes that you see fit and a constructor that takes in information to provide said attributes. The class should also have at least one function that allows the animal to make a noise.
// Create two sub classes (using the 'extends' keyword) of your animal class. One should represent as a cat and one should represent a snake. Re-evaluate the way you structured your parent class to see if any work will need to be done to adjust the parent class.
// Create 2 different sub-classes for cats and 2 different sub-classes for snakes. Make sure that they are different but still have all of the same attributes that their parent and ancestor classes have.
// Generate several variables that are instances of each class to test that your classes are working as intended.

class Animal {
    constructor(name,spieces,legs) {
        this.name = name;
        this.legs = legs;
        this.spieces = spieces;
        this.stomach = "full";
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
    mammal(isMammal) {
        this.isMammal = isMammal;
        if(this.isMammal == true){
            console.log("I Have fur!");
        }
        else if(this.isMammal = false){
            console.log("I Dont have fur!");
        }
        else{
            return this.isMammal;
        }
    }
    isCuddly(){
        if(this.mammal == true){
            return "Yes";
        }
        else{
            return "No";
        }
    }
    hasLegs(){
        if(this.legs > 0){
            return true;
        }
        else{
            return false;
        }
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        super.properties;
    }

    speak() {
        console.log(`${this.name} meow!`)
    }
    isCuddly(isCat){
        if(this.mammal == true){
            if(isCat == true){
                return "I'm the best!"
            }
            else{
                return "I guess they are."
            }
        }
        else{
            return "No";
        }
    }
    furball(){
        if(this.stomach == "full"){
            console.log("Hack Hack! HAIRBALL!!");
        }
        else if(this.stomach == "empty"){
            console/log("Feed me PLEASE!");
        }
    }
}

class Snake extends Animal {
    constructor(name){
        super(name);
        super.properties;
    }

    speak() {
        console.log(`${this.name} hissss!`)
    }
    hasLegs(){
        if(this.legs > 0){
            return "I have legs now!";
        }
        else if (legs == 0){
            return "I'm a snake!";
        }
    }
    lethalBite(fullPower){
        if(fullPower == true){
            console.log("That bite was lethal!");
        }
        else{
            console.log("That was a scary bite!");
        }
    }
}

let wiskers = new Cat("wiskers");
console.log(wiskers.isCuddly());
wiskers.furball();
wiskers.speak();
let larry = new Snake("larry");
larry.speak();
larry.lethalBite();