// //Pass a number into a function that will return the absolute value of that number

// let userNum = prompt(`Enter a number to find the absolute value!`);
// function absoluteEvaluator(inputNum){
    
//     if(inputNum < 0){
//         inputNum = inputNum * -1
//     }
    
//     return inputNum;
// }
// console.log(`Absolute value is ${absoluteEvaluator(userNum)}`);


// //Write a function that checks to see if the word as an argument is a palindrome

// let userPal = prompt(`Give me a word and I'll test if it's a pallindrome`);
// userPal = userPal.toLocaleLowerCase();
// userPal = userPal.split();
// let flippedWord = userPal.reverse();
// function pallindromeTest(inputWord,flippedWord){
//     if(flippedWord == inputWord){
//         return "is a pallindrome";
//     }
//     else{
//         return "isn't a pallindrome";
//     }
// }
// console.log(`Your word ${pallindromeTest(userPal,flippedWord)}`);


//Write a function that accepts an array of banned words and an array of words.
//If any of the banned words appear in the array of words (case sensitive),
// replace them with "REDACTED. Do this without any prototypical methods.

// let userWords = [];
// for(let i = 0; i < 7; i++){
//     userWords[i] = prompt("Please enter a word");
// }
// let uWSize = userWords.length;
// let bannedWords = ["Fuck","Shit","Damn","Whale","Pomogranate"]
// let bWSize = bannedWords.length;
// console.log(bWSize);
// function censorShipper(userWords,bannedWords,uWSize,bWSize){
//     for(let i = 0; i < bWSize; i++){
//         console.log(userWords[i]);
//         for(let z = 0; z < uWSize; z++){
//             if(bannedWords[i] == userWords[z]){
//                 userWords[z] = "REDACTED";
//                 console.log(userWords[z]);
//             }
//         }
//     }
//     return userWords;
// }

// console.log(censorShipper(userWords,bannedWords,uWSize,bWSize));

// //Write a function that accepts two arguments (names can be changed):a and b.
// // Cycle through all numbers between a and b (inclusive) and
// //  - if the number is divisible by 2 log "Fizz" if the number is divisible by 3 log "Buzz"
// //  - if it is divisible by both log "FizzBuzz" otherwise log the number.
// //  - if a==b log nothing,
// // if b < a count down otherwise count up
// let num1 = prompt("Number please!");
// let num2 = prompt("Another one!");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// function sodaMachine(num1, num2){
//     if(num1 > num2){
//         for(let i = num2; i <= num1; i++){
//             if(i%2 == 0 && i%3 == 0){
//                 console.log("FizzBuzz")
//             }
//             else if(i%2 == 0){
//                 console.log("Fizz");
//             }
//             else if(i%3 == 0){
//                 console.log("Buzz");
//             }
//         }
//     }
//     else if(num2 > num1){
//         for(let i = num2; i >= num1; i--){
//             if(i%2 == 0 && i%3 == 0){
//                 console.log("FizzBuzz")
//             }
//             else if(i%2 == 0){
//                 console.log("Fizz");
//             }
//             else if(i%3 == 0){
//                 console.log("Buzz");
//             }
//         }
//     }
// }

// sodaMachine(num1,num2);

//! Write a function to see if a pizza can be split evenly amongst a group of people.
//! The function should take two arguments: the number of people present, and the number of slices of the pizza.
//!   - If it can be split evenly log the result
//!   - If it cannot, say it cannot be split evenly and ALSO list how many people will go without an extra slice.

//! Write a function to see if a triangle is a right triangle based off
//! whether or not square of the longest side is equal to the sum of the squares of the other sides.

function pizzaDivider(numPlp, numSlices){
    if(numPlp == numSlices){
        return "Everyone gets a Slice";
    }
    if(numPlp > numSlices){
        return `${numPlp - numSlices} will go without pizza`;
    }
}

console.log(pizzaDivider(10,9));

function triangleFinder(sideA,sideB,sideC){
    if(sideA > sideB && sideA > sideC){
        if(sideA*sideA == (sideB*sideB) + (sideC *sideC)){
            return true;
        }
        else{
            return false;
        }
    }
    if(sideB > sideA && sideB > sideC){
        if(sideB*sideB == (sideC*sideC) + (sideA *sideA)){
            return true;
        }
        else{
            return false;
        }
    }
    if(sideC > sideB && sideC > sideA){
        if(sideC*sideC == (sideB*sideB) + (sideA *sideA)){
            return true;
        }
        else{
            return false;
        }
    }
}

console.log(triangleFinder(9,12,15));
console.log(triangleFinder(3,4,5));
console.log(triangleFinder(15,20,25));
//! Write a function to check to see if a warrior can beat all of the monsters in a dungeon.
//! Supply the function with the amount of damage each of the monsters do (in array format) and
//! then the number of health the warrior has.
//!   - If the warrior doesn't have enough health to take all of the attacks they are unable to survive
//!   - If they are able to take all of the attacks, they are able to survive.

function monsterAttack(monsterHits,playerHealth){
    let damage = 0;
    for(let i = 0; i < monsterHits.length; i++){
        damage = damage + monsterHits[i];
    }
    if(playerHealth > damage){
        return `Player Survives`;
    }
    else if(playerHealth < damage){
        return `Player Dies`;
    }
}
let hitArr1 = [1,2,3,4,5,6];
let hitArr2 = [12,15,2,10];
let hitArr3 = [100,1,0,2];

let playerHealth = 100;
console.log(monsterAttack(hitArr1, playerHealth));
console.log(monsterAttack(hitArr2, playerHealth));
console.log(monsterAttack(hitArr3, playerHealth));
