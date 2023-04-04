'use strict';

let deck = [];
let playDeck = [];
let playerBase = [];
let cardImgArr = [];
//2-10 Diamonds = 1-9
//Jack-Ace Diamonds = 10-13
//2-10 Spades = 14-22
//Jack-Ace Spades = 23-26
//2-10 Clubs = 27-35
//Jack-Ace Clubs = 36-39
//2-10 Hearts = 40-48
//Jack-Ace Hearts = 49-52
for(let i = 0;i<52;i++){
    let img = new Image(150,200);
    img.src = `PNG-cards-1.3/${i+1}.png`;
    cardImgArr.push(img);
    console.log(img.src);
}
console.log(cardImgArr);


//TODO: redraw()
//TODO: final CSS

function makeCardBack(){
    let cardBack = new Image(150,200);
    cardBack.src = `PNG-cards-1.3/backSide.jpg`;

    return cardBack;
}

class player{
    //
    constructor(playerID,name,card1,card2,op){
        this.playerID = playerID;
        this.name = name;
        this.cards = [card1,card2];
        this.op = op;
        this.total = 0;
    }
    flipCards(playerID){
        if(playerID == `house`){
            for(let i=0;i<this.cards.length;i++){
                let tempCard = this.cards[i].getImg();
                document.getElementById(`house`).appendChild(tempCard);
            } 
        }
        else if(playerID == 0){
            for(let i=0;i<this.cards.length;i++){
                let tempCard = this.cards[i].getImg();
                document.getElementById(`userC`).appendChild(tempCard);
            }
        }
        else{
           document.getElementById(`Player${playerID}`).innerHTML = ``;
            for(let i=0;i<this.cards.length;i++){
                let tempCard = this.cards[i].getImg();
                document.getElementById(`Player${playerID}`).appendChild(tempCard);
            } 
        }
    }
    addCard(){
        this.cards.push(dealCard(this.op));
    }
    getID(){
        return this.playerID;
    }
    getCardsVal(){
        this.total = 0;
        try{
           for(let i=0;i<this.cards.length;i++){
            let temp = this.cards[i].getValue();
            this.total = this.total + temp;
            console.log(`total = ${this.total} temp = ${temp}`);
        }
        return this.total; 
        }
        catch(Error){
            console.log(Error);
        }
        
    }
}

function playerMaker(playerNum,name){
    //Max four players
    //console.log(playerBase);
    //Make a player object
    //first player should be the user and the last should be the house
    //Must have playerID
    //add the players info from the InnerHtml
    //let (2 cards => dealCard()) = [];
    //give them an op boolean if true that is the house
    playerBase.push(new player(0,name,dealCard(),dealCard(),false));
    for(let i = 0;i < playerNum;i++){
        playerBase.push(new player(i+1,"none",dealCard(),dealCard(),false));
    } 
    playerBase.push(new player(4,`house`,dealCard(true),dealCard(true),true));
    console.log(playerBase);
}

class Card {
    constructor(cardID,value,suit,face){
        this.cardID = cardID;
        this.value = value;
        this.suit = suit;
        this.img = cardImgArr[(cardID-1)];
        this.face = face;
    }
    getImg(){
        console.log(`CardID: ${this.cardID} Value: ${this.value}`);
        return this.img;
    }
    getValue(){
        return this.value;
    }
    getFace(){
        return this.face;
    }
}

class Ace extends Card {
    //
    constructor(cardID,value,suit,face){
        super(cardID,value,suit,face);
    }

    valueInput(op){
        if(op == true){
            this.value = 11;
        }
        else if(op == false){
            let temp = prompt(`Hey you have an ACE! Did you want to make that a value of 1 or 11?`);
            let x = 0;
            let loopBreak = false;
            while(loopBreak == false){
                temp = prompt(`The Ace is value please be serious! 1 or 11`);
                temp = parseInt(temp);
                if(temp == 1 || temp == 11){
                 loopBreak = true;
                }
            }
        this.value = temp;
        }
        
    }
}

function checkAce(card,house){
    try{
        let face = card.getFace();
        if(face == `Ace` && house == false){
            card.valueInput(false);
        }
        else if(face == `Ace` && house == true){
            card.valueInput(true);
        } 
    }
    catch(Error){
        console.log(Error);
    }
    
}

function deckMaker(deckNum){
    //For loop that is scaled, able to have multiple decks
    //access a suit array that moves down as it hits the top loop (Add suit to the Object)
    // Nested Loop, this is so we can track suit and reset count( hint z * i for card count at declaration)
    //   inside make 13(min) objects
    //   name them with string concatination (ex: name: `card${i}`)
    //   set 1-9(This will be card.value 2-10 and should be divided by z) when > 9 < 14 call faceCard() and pop 4 face cards(Ace included)
    //   call getImg(id) or call getImg(id, object)
    //   This should populate a set of cards with a suit,img,value, and id
    for(let deckMul = deckNum;deckMul > 0;deckMul--){
       let countID = 0;
       let suits = [`Hearts`,`Clubs`,`Spades`,`Diamonds`];
        for(let i = 0;i < 4;i++){
            let currentSuit = suits.pop();
            for(let z = 0;z < 9;z++){
                countID++;   
                console.log(`${z+2} = value ${countID} = countID`);
                deck.push(new Card(countID,(z+2),currentSuit));
            }
            countID = faceCard(countID,currentSuit);
        } 
    } 
    console.log(deck);  
}

function faceCard(id,suit,i){
    //Populates the Jack, Queen, King, and Ace
    let cardsNeeded = [`Jack`,`Queen`,`King`];
    for(let i = 0;i < 3;i++){
        id++;
        deck.push(new Card(id,10,suit,cardsNeeded.shift()));
    }
    id++;
    deck.push(new Ace(id,1,suit,`Ace`));//remember Ace is 1 and 11

    return id;
}

function shuffle(){
    //Random number from 1 - (Max card Size)
    //add to the object to playDeck and remove from deck
    //continue until deck.isEmpty;
    let max = deck.length;
    for(let i = 0;i < max;i++){
        let random = Math.floor(Math.random() * deck.length);
        while(deck[random] === undefined){
            random = Math.floor(Math.random() * deck.length);
        }
        playDeck.push(deck[random]);
        // console.log(deck[random]);
        // console.log(random);
        // console.log(playDeck);
        delete deck[random];
    }
    console.log(playDeck);
}

function dealCard(house){
    //This should get a random num from 1 - (Max card Size)
    //Deal this card to the player 
    //Remove the card from the playDeck
    let random = Math.floor(Math.random() * playDeck.length);
    let draw = playDeck[random];
    delete playDeck[random];
    checkAce(draw,house);

    return draw;
}

function hit(playerID){
    for(let i = 0;i < playerBase.length;i++){
        if(playerBase[i].playerID == playerID){
            let temp = playerBase[i].getCardsVal();
            //console.log(total);
            if(temp > 21){
                prompt(`You've hit 21 already!`)
            }
            else if(temp < 21){
                playerBase[i].addCard();
                if(playerID == 0){
                    playerBase[i].flipCards(0);
                }
            }
            return temp;
        }
    }
}

function stay(){
    let total;
    let totalScores = [];
    let cards;
    //Totals all players cards
    console.log(`${playerBase.length} pl.l 248`)
    if(playerBase.length > 2){
        for(let i = 1; i < playerBase.length-2;i++){
            let player = playerBase[i];
            let total = player.getCardsVal();
            while(total < 17){
                total = hit(player.playerID);
                if(playerID == 1){
                    document.getElementById(`Player1`).append(makeCardBack())
                }
                else if(playerID == 2){
                    document.getElementById(`Player2`).append(makeCardBack())
                }
            }
            totalScores.push(total);
        }
        console.log(`CPU`);
    }
    //TODO add wait
    //Display all player cards and house cards
    //Deals house face up
    document.getElementById(`house`).innerHTML = ``;
    let house = playerBase[playerBase.length-1];
    total = house.getCardsVal();
    while(total < 17){
        total = hit(house.playerID,true);
        house.flipCards(`house`);
        console.log(`h ${total}`);
    }
    if(total >= 17){
        totalScores.push(total);
        house.flipCards(`house`);
        console.log(`house complete`);
    }
    totalScores.push(playerBase[0].getCardsVal())
    console.log(totalScores);
    //Score totaler
    let newTotal = 0;
    for(let i = 0; i < playerBase.length - 1;i++){
        console.log(`${totalScores[i]} t1 ${totalScores[i+1]} t2`)
        if(totalScores[i] < totalScores[i+1] && totalScores[i+1] < 22){
            newTotal = totalScores[i+1];
            console.log(`${newTotal} newT`)
        }
        else if(totalScores[i] > totalScores[i+1] && totalScores[i] < 22){
            newTotal = totalScores[i];
            console.log(`${newTotal} newT 293`)
        }
        else{
            popScreen(2,false);
        }
    }
    //TODO for the player array look who as the cards that add up to newTotal and give ther playerID
    console.log(`${newTotal} newT 293`)
    for(let i = 0;i < playerBase.length;i++){
        let player = playerBase[i];
        total = player.getCardsVal();
        if(total == newTotal){
            let playerID = player.getID();
            popScreen(2,playerID);
            prompt(`${playerID}`);
        }
    }
}

function ageFinder(day,month,year){
    let today = new Date();
    let dayCur = String(today.getDate()).padStart(2, '0');
    let monthCur = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yearCur = today.getFullYear();
    console.log(`${year} ${day} ${month} year ${monthCur} cur`);
    if(year == parseInt(yearCur)-21 && day < parseInt(dayCur) && month == parseInt(monthCur)){
        playerMaker(document.getElementById(`CPU`).value, document.getElementById(`userName`).value);
        return true;
    }
    else if(year < (yearCur-21)){
        playerMaker(document.getElementById(`CPU`).value, document.getElementById(`userName`).value);
        return true;
    }
    else{
        return false;
    }
}
function popScreen(value, playerID){
    if(value == 0){
        //Make buttons and divs, besides the info tags, invisible
    }
    else if(value == 1){
        //displays user cards face up and all other cards face down
        //pops two buttons hit() and stay()
        //and a deck img in the middle
        document.getElementById(`topSection`).innerHTML = ``;
        let count = 0;
        let player = playerBase[0];
        let cards = player.cards;
        let cardI1 = cards[0].getImg();
        let cardI2 = cards[1].getImg();
        document.getElementById("userC").appendChild(cardI1);
        document.getElementById("userC").appendChild(cardI2);
        console.log(cardI1);
        console.log(cardI2);
        count++;

        player = playerBase[count];
        if(playerBase.length > 0 && player.getID() !== 4){
            document.getElementById("Player1").appendChild(makeCardBack());
            document.getElementById("Player1").appendChild(makeCardBack());
            count++;
            player = playerBase[count];
        }

        if(playerBase.length > 1 && player.getID() !== 4){
            document.getElementById("Player2").appendChild(makeCardBack());
            document.getElementById("Player2").appendChild(makeCardBack());
            count++;
            player = playerBase[count];
        }

        player = playerBase[(playerBase.length-1)];
        cards = player.cards;
        cardI1 = cards[0].getImg();
        document.getElementById("house").appendChild(makeCardBack());
        document.getElementById("house").appendChild(cardI1);
    }
    else if(value == 2){
        //Final winning screen or JackPot!!!!
        let winner = playerID;
        prompt(`Winner is ${winner}`);
        if(winner == false){
            //everyone lost
            prompt(`Winner is one loser is everyone}`);
        }
    }
    else if(value == 4){
        document.getElementById(`topSection`).innerHTML = `Sorry you're under age Please come back after you've turned 21`;
    }
    else{
        console.log(Error);
    }
}


//Main Functions
function play(){
    deckMaker(1); //Get deck count from start screen
    shuffle();
    let valid = ageFinder(document.getElementById("birthDay").value, document.getElementById("birthMonth").value, document.getElementById("birthYear").value);
    if(valid == true){
        popScreen(1);
    }
    else if(valid == false){
        popScreen(4);
    }
}

function redraw(){
    if(playDeck.length < playerBase.length * 3){
        deckMaker();
        shuffle();
        //for each player erase cards and give two new cards
        for(let i=0;i<playerBase.length;i++){
            let cardsFull = playerBase[i];
            cardsFull.cards = [dealCard(),dealCard()];
        }
        popScreen(1)
    }
    else if(playDeck.length > playerBase.length * 3){
        for(let i=0;i<playerBase.length;i++){
            let cardsFull = playerBase[i];
            cardsFull.cards = [dealCard(),dealCard()];
        }
        popScreen(1)
    }
}

document.addEventListener("DOMContentLoaded",function() { popScreen(0) });