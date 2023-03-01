let userName = prompt("Enter a username for this game.");

let player = {
    name: userName,
    class: 'Archer',
    money: 20,
    life: 100,
    potion: true,
}

let userClass = "";
while(userClass != "archer" && userClass != "fighter" && userClass != "mage"){
    userClass = prompt("Please pick a class! ... Archer , Fighter, or Mage.");
    userClass = userClass.toLocaleLowerCase();
}
player.class = userClass;

prompt(`Welcome ${player.name}! We are so glad you decide to brave the wilderness on a grand quest!`);
prompt(`We will start you on a easy quest. All you must to is deliver this Medicine to a doctor one town over.`);
prompt(`You have recieved the Potion!`);
prompt(`Now out you go! Don't worry we shall compensate you properly.`);

let firstAction = "";

prompt(`${player.name} the ${player.class} set out on there first adventure!`)

if(player.class == "mage"){
    firstAction = prompt(`${player.name} the ${player.class} sees a elderly man on the road. Do you talk to him? Yes or No?`);
    while(firstAction.toLocaleLowerCase() != "yes" && firstAction.toLocaleLowerCase() != "no"){
        firstAction = prompt(`${player.name} the ${player.class} sees a elderly man on the road. Do you talk to him? Yes or No?`); 
    }
    if(firstAction.toLocaleLowerCase() == "yes"){
        prompt(`Ahh a spry young adventurer so great to see nowadays. I remember I use to be a mage back in the day!`);
        prompt(`${player.name} the ${player.class} as gained 30 health and 30 shillings!`);
        player.life = player.life + 30;
        player.money = player.money + 30;
        prompt(`Well on your way you go. Thoses items should help with your adventure.`);
    }
    else if(firstAction.toLocaleLowerCase() == "no"){
        prompt(`The old man approches you anyways!`);
        prompt(`You know this road isn't kind to newbies! I've been running this road for ages! Pay the tax! NOW!`);
        prompt(`You have lost 20 dollars.`);
        player.money = player.money() - 20;
    }
}
else{
    prompt(`${player.name} the ${player.class} comes upon a split path! Both pathes seem to lead to the same place. One has a toll on it and the other is quite dangerous. Left or Right?`);
    while(firstAction.toLocaleLowerCase() != "left" && firstAction.toLocaleLowerCase() != "right"){
        firstAction = prompt(`${player.name} the ${player.class} comes upon a split path! Both pathes seem to lead to the same place. One has a toll on it and the other is quite dangerous. Left or Right?`);
    }
    if(firstAction.toLocaleLowerCase() == "left"){
        prompt(`${player.name} the ${player.class} goes left. They incur a small fee!`);
        player.money = player.money - 10;
        prompt(`${player.name} the ${player.class} has lost 10 shillings with ${player.money} left!`);
        
    }
    else if(firstAction.toLocaleLowerCase() == "right"){
        prompt(`${player.name} the ${player.class} goes right. They fought well but took some light damage!`);
        player.life = player.life - 10;
        prompt(`${player.name} the ${player.class} has lost 10 HP with ${player.life} left!`);
        
    }
}

let secondAction = "";


while(secondAction.toLocaleLowerCase() != "look for treasure" && secondAction.toLocaleLowerCase() != "eat lunch" && secondAction.toLocaleLowerCase() != "continue forward"){
    secondAction = prompt(`${player.name} the ${player.class}  enters a clearing. They have time to kill. What should they do? Look for treasure, Eat Lunch, or Continue forward?`);
}
if(secondAction.toLocaleLowerCase() == "look for treasure"){
    prompt(`${player.name} the ${player.class} looks under every stump and tree and found 15 shillings!`); 
    player.money = player.money + 15;
    prompt(`${player.name} the ${player.class} gained 15 shillings for a total of ${player.money}.`);
   
}
else if(secondAction.toLocaleLowerCase() == "eat lunch"){
    prompt(`${player.name} the ${player.class} eat a homemade lunch! The relaxation and food are just what the adventure needed.`);
    player.life = player.life + 10;
    prompt(`${player.name} the ${player.class} has gained 10 HP for a total of ${player.life} HP.`)
    
}
else if(secondAction.toLocaleLowerCase() == "continue forward"){
    prompt(`${player.name} the ${player.class} continues through the meadow not wanting to waste any time.`);
}

let thirdAction = "";

prompt(`${player.name} the ${player.class} comes across a great bridge! You remember that trolls attack adventures!`);
while(thirdAction.toLocaleLowerCase() != "get ready for battle" && thirdAction.toLocaleLowerCase() != "run across"){
    thirdAction = prompt(`What should ${player.name} the ${player.class} do! Get ready for battle or Run across?`)
}
if(thirdAction.toLocaleLowerCase() == "get ready for battle"){
    prompt(`${player.name} the ${player.class} gets into a battle posistion and waits for the troll to appear.`);
    prompt(`The troll appears! ${player.name} the ${player.class} ready for battle defeats him!`);
    player.money = player.money + 50;
    prompt(`${player.name} the ${player.class} recieved troll hide worth 50 shillings and currently has ${player.money} shillings!`)
    
}
else if(thirdAction.toLocaleLowerCase() == "run across"){
    prompt(`${player.name} the ${player.class} sprinted across the bridge! However the troll was waiting!`);
    player.money = player.money - 20;
    player.life = player.life - 50;
    prompt(`${player.name} the ${player.class} sustained HEAVY damage and drop some shillings along the way!`);
    prompt(`${player.name} the ${player.class} only has ${player.life} HP and ${player.money} shillings!`);
}

let forthAction = "";

prompt(`${player.name} the ${player.class} crosses the bridge and enters The Cave of Shadows!`);
prompt(`${player.name} the ${player.class} explores the cave for a while and encounters another rookie adventurer!`);
prompt(`${player.name} the ${player.class} and The Rookie adventure together!`);
while(forthAction.toLocaleLowerCase() != "approch them" && forthAction.toLocaleLowerCase() != "continue forward"){
    forthAction = prompt(`The new group sees another adventurer group ahead what should they do? Approch them or Continue forward?`);
}
if(forthAction.toLocaleLowerCase() == "approch them"){
    prompt(`${player.name} the ${player.class} and The Rookie approach the group.`);
    prompt(`"Ooy! You know we run this cave right?" - Pro Adventurer`);
    if(player.money > 20){
        prompt(`${player.name} the ${player.class} and The Rookie kindly pay a 5 shilling toll!`);
    }
    else{
        prompt(`"You boys don't have enought to pay the toll so were gonna have to rough you up a bit. It's just buisness!" - Pro Adventurer`);
        prompt(`${player.name} the ${player.class} loses all there money and gets beat a little!`)
        player.life = player.life - 10;
        player.money = 0;
        prompt(`${player.name} the ${player.class} only has ${player.life} HP left and ${player.money} shillings!`)
    }
}
else if(forthAction.toLocaleLowerCase() == "continue forward"){
    prompt(`The two adventurers peacefully exit the cave!`);
}

let fifthAction = ""; 

prompt(`${player.name} the ${player.class} has finally entered the city with The Rookie!`);
prompt(`"Thank you for assiting me this far! I can walk the rest myself!" - Rookie`);
while(fifthAction.toLocaleLowerCase() != "walk the rookie home" && fifthAction.toLocaleLowerCase() != "deliver the medicine"){
    fifthAction = prompt(`What should ${player.name} the ${player.class} do? Walk The Rookie Home or Deliver the medicine?`);
}
if(fifthAction.toLocaleLowerCase() == "walk the rookie home"){
    prompt(`${player.name} the ${player.class} walks The Rookie home! To his surpise he ends up at a nobel mans house!`);
    prompt(`"Thank you for helping my son out on his jouney!" - Nobel Man`);
    prompt(`${player.name} the ${player.class} was given 100 shillings by the Nobel Man!`);
    prompt(`With that out of the way he heads to deliver the medicine!`);
    prompt(`After delivering the medicine the first adventure of ${player.name} the ${player.class} has concluded!`);
    prompt(`They amassed ${player.money} shillings and still have ${player.life} HP for there next adventure!`)
}
else if(fifthAction.toLocaleLowerCase() == "deliver the medicine"){
    prompt(`"Stop there!" - Gaurds`);
    prompt(`"You are under arrest for kidnapping Count Kelp's son!" - Gaurds`);
    if(player.life < 30 || player.money < 10){
        prompt(`Exausted from there adventures ${player.name} the ${player.class} surrenders and is imprisoned!`);
        prompt(`Looks like thats the end of ${player.name} the ${player.class}! He rots in prison with ${player.life} HP and a silm ${player.money} shilllings!`);
    }
    else{
        prompt(`${player.name} the ${player.class}  uses his great social skills to calm the gaurds! With that out of the way he heads to deliver the medicine!`);
        prompt(`After delivering the medicine the first adventure of ${player.name} the ${player.class} has concluded!`);
        prompt(`They amassed ${player.money} shillings and still have ${player.life} HP for there next adventure!`)
    }
}
