const day = "Wednesday";
var time = 1010; //outdated global var
let yearNum = 2023; //Updated local var

let thePrompt = prompt("Enter Social Security Please...");

let typesOfBears = ["andean", "black", "brown"]
let me = ["Andrew", "Anzalone"];
let dog = ["Monty","Clyde"];

let us = [me, dog]
console.log(me[0]);
console.log(dog[0]);
console.log(us[0,0]);

let helloObject = {
    greeting: "Hello",
    target: "World",
    johnnyDangerously: {
        genre: "Comedy",
        yearReleased: 1994,
        cast: ["Micheal Kenton", "Joe Piscopo"],
        financials: {
            budget: "9 Million",
        }
    }
}

let firstname="andrew";
let lastName="Anzalone";
let age=20;

let fullNameStringLiteral = `${firstname} ${lastName} is my name. ${age} is my age`

let maxNum = prompt("Please enter your FizzBuzz max number");

for(let input=1; input <= maxNum; input++){
    if(input%3 == 0 && input%5 === 0){
        console.log(`${input} FizzBuzz`);
    }
    else if(input%3 == 0){
        console.log(`${input} Fizz`);
    }
    else if(input%5 == 0){
        console.log(`${input} Buzz`);
    }
    else{
        console.log(`${input} Gurgle`);
    }
}

console.log(helloObject.johnnyDangerously.financials.budget);
let switchVariable = 3;
switch(switchVariable){
    case 4:
        console.log("looks like you have 4");
        break;
    case 3:
        console.log("looks like you have 3");
    default:
        console.log("You have no number");
}