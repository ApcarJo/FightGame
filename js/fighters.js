


    

class Fighter{

    constructor(name, strength, defense, skill, agility, speed){

        this.vida = 5000;
        this.agility = agility;
        this.name = name;
        this.strength = strength;
        this.defense = defense;
        this.skill = skill;
        this.speed = speed;
    }

    hit(enemy){
        // enemy.vida -= this.strength - (enemy.defense);
        enemy.vida -= (this.strength*this.skill) - (enemy.defense * enemy.agility);
    }

    specialHit(enemy){
        // enemy.vida -= this.strength + this.skill;
        // enemy.vida -= (this.strength + this.skill -  (enemy.defense * (enemy.agility / this.velocidad)));
    }
}

// Instancio luchadores

let player1 = new Fighter("Antman", 30, 15, 5, 20, 15);
let player2 = new Fighter("Blackpanther", 35, 12, 8, 12, 12);
let player3 = new Fighter("Blackwidow", 25, 20, 7, 15, 18);
let player4 = new Fighter("Cable", 30, 8, 6, 18, 10);
let player5 = new Fighter("Capi", 31, 13, 14, 9, 20);
let player6 = new Fighter("Deadpool", 28, 10, 5, 20, 9);
let player7 = new Fighter("Domino", 28, 10, 5, 20, 9);
let player8 = new Fighter("Yondu", 28, 10, 5, 20, 9);
let player9 = new Fighter("Kaecilius", 28, 10, 5, 20, 9);
let player10 = new Fighter("Gamora", 28, 10, 5, 20, 9);
let player11 = new Fighter("Groot", 28, 10, 5, 20, 9);
let player12 = new Fighter("Hawkeye", 28, 10, 5, 20, 9);
let player13 = new Fighter("Heimdall", 10, 5, 20, 9);
let player14 = new Fighter("Hella", 28, 10, 5, 20, 9);
let player15 = new Fighter("Ironman", 28, 10, 5, 20, 9);
let player16 = new Fighter("Loki", 28, 10, 5, 20, 9);
let player17 = new Fighter("Marvel", 28, 10, 5, 20, 9);
let player18 = new Fighter("Megasonic", 28, 10, 5, 20, 9);
let player19 = new Fighter("Minigroot", 28, 10, 5, 20, 9);
let player20 = new Fighter("Hulk", 28, 10, 5, 20, 9);
let player21 = new Fighter("Nebula", 28, 10, 5, 20, 9);
let player22 = new Fighter("Quicksilver", 28, 10, 5, 20, 9);
let player23 = new Fighter("Rocket", 28, 10, 5, 20, 9);
let player24 = new Fighter("Scarlet", 28, 10, 5, 20, 9);
let player25 = new Fighter("Spidergwen", 28, 10, 5, 20, 9);
let player26 = new Fighter("Spiderman", 28, 10, 5, 20, 9);
let player27 = new Fighter("Starlord", 28, 10, 5, 20, 9);
let player28 = new Fighter("Strange", 28, 10, 5, 20, 9);
let player29 = new Fighter("Thanos", 28, 10, 5, 20, 9);
let player30 = new Fighter("Thor", 28, 10, 5, 20, 9);
let player31 = new Fighter("Ultron", 28, 10, 5, 20, 9);
let player32 = new Fighter("Valkyre", 28, 10, 5, 20, 9);
let player33 = new Fighter("Vision", 28, 10, 5, 20, 9);
let player34 = new Fighter("Wasp", 28, 10, 5, 20, 9);
let player35 = new Fighter("Wintersoldier", 28, 10, 5, 20, 9);



const getRandom = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6,
    "7" : player7,
    "8" : player8,
    "9" : player9,
    "10" : player10,
    "11" : player11,
    "12" : player12,
    "13" : player13,
    "14" : player14,
    "15" : player15,
    "16" : player16,
    "17" : player17,
    "18" : player18,
    "19" : player19,
    "20" : player20,
    "21" : player21,
    "22" : player22,
    "23" : player23,
    "24" : player24,
    "25" : player25,
    "26" : player26,
    "27" : player27,
    "28" : player28,
    "29" : player29,
    "30" : player30,
    "31" : player31,
    "32" : player32,
    "33" : player33,
    "34" : player34,
    "35" : player35,

}


// let t=1;
// do{
//     console.log(allPlayers[1]);
//     allPlayers[t].agility = getRandom(8, 12);
//     allPlayers[t].strength = getRandom(20, 25);
//     allPlayers[t].skill = getRandom(12, 20);
//     allPlayers[t].defense = getRandom(10, 15);
//     t++; 
//     console.log(allPlayers[1]);
// } while (t<=36)

let t=1;
do{
        allPlayers[t].agility = getRandom(8, 12);
        allPlayers[t].strength = getRandom(20, 25);
        allPlayers[t].skill = getRandom(12, 20);
        allPlayers[t].defense = getRandom(10, 15);
        allPlayers[t].speed = getRandom(6, 10);
        t++;
} while (t<=35)
