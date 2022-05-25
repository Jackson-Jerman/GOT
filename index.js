
// Jon's stats
let jonSnowAttack = 25; 
let jonSnowHealth= 100;
let jonSnowDefense=0;

// Jamie's stats
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon Snow has better attack than Jamie Lannister");
} else if (jonSnowAttack < jamieLannisterAttack){
    console.log("Jamie Lanninster has better attack than Jon Snow");
} else {
    console.log("Jon Snow and Jamie Lanninster have the same  attack");
}

if (jonSnowHealth <= jamieLannisterAttack){
    console.log("Jons Snow has been slain");
} else {
    //jonSnowHealth = JonSnowHealth - jamieLannisterAttack
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`);
}

//Jon pick's up a shield
jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain");
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`);
}

//peasent throws Jon a healthkit  of 50. He heals up! 
const healthkit = 50; 

if ((jonSnowHealth + healthkit) >= 100) {
    jonSnowHealth = 100;
} else {
    jonSnowHealth += healthkit;
}


