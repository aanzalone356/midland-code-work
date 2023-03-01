let userWord = prompt("Please enter a word");
let newWord = "";
if(userWord.length > 3){
    for(let i = 3; i < userWord.length; i++){
    newWord = newWord + userWord.charAt(i);
    }
    console.log(`${newWord}`)
}
else{
    console.log("Word has been voided");
}



let maxNum = prompt("Please enter a max number for generation");
let ranNum = Math.floor(Math.random() * maxNum) + 1;
let userNum;
while(userNum != ranNum){
    userNum = parseInt(prompt("Please enter a guess for the random number. We'll see how long you take."));
}
console.log(`${ranNum} is the correct number`);



let asteriscLine = "";
for(let i = 0; i < 5; i++){
     asteriscLine = asteriscLine + "*";
    console.log(asteriscLine);
}



let coin = Math.floor(Math.random() * 2);
let count = 0;
while(coin != 0){
     console.log('Looks like you got tails!');
     count++;
     coin = Math.floor(Math.random() * 2);
 }
  console.log(`It took ${count} retires to get heads!`);



let firstName =  prompt("Enter your first name please!");
let lastName = prompt("Enter your last name please!");
let userChoice = prompt("Please enter a number too!");

if(userChoice%2 == 1){
    prompt("Your number is odd!");
}
else if(userChoice%2 == 0){
     prompt("Your number is even!");
 }
 else{
     prompt("We lost your number sorry!")
 }

if(userChoice > 50){
    prompt("Your number is greater than 50!");
 }
 else if(userChoice < 50){
     prompt("Your number is less than 50!");
 }
 else if(userChoice == 50){
     prompt("Your number is 50!");
 }
 else{
     prompt("We lost your number sorry!")
 }

for(let i = 0; i < userChoice; i++){
    console.log(i);
}
for(let z = 100; z > userChoice; z--){
    console.log(z);
}

if(firstName.toLocaleLowerCase == "andrew"){
    prompt("We got the same name! Such a great name!");
}
else{
    prompt("Oh so your not me.");
}



let rayOne = [-1,-2,2,10,7,8];
let rayTwo = [4,-2,2,7,9,5];
let commonNums = 0;

for(let i = 0; i < rayOne.length; i++){
    for(let z = 0; z < rayTwo.length; z++){
        if(rayOne[i] == rayTwo[z]){
            commonNums++;
        }
    }
}

console.log(`Did you know two rays have ${commonNums} in common`);