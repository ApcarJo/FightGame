
class Fighter{

    constructor(name, strength, defense, skill, agility){

        this.vida = 5000;
        this.agility = agility;
        this.name = name;
        this.strength = strength;
        this.defense = defense;
        this.skill = skill;
    }

    hit(enemy){
        // enemy.vida -= this.strength - (enemy.defense);
        enemy.vida -= (this.strength*this.agility) - (enemy.defense * enemy.skill);
    }

    specialHit(enemy){
        // enemy.vida -= this.strength + this.skill;
        // enemy.vida -= (this.strength + this.skill -  (enemy.defense * (enemy.agility / this.velocidad)));
    }
}

// Instancio luchadores
let player1 = new Fighter("antman", 30, 15, 5, 20, 15);
let player2 = new Fighter("blackpanther", 35, 12, 8, 12, 12);
let player3 = new Fighter("blackwidow", 25, 20, 7, 15, 18);
let player4 = new Fighter("cable", 30, 8, 6, 18, 10);
let player5 = new Fighter("capi", 31, 13, 14, 9, 20);
let player6 = new Fighter("deadpool", 28, 10, 5, 20, 9);
let player7 = new Fighter("domino", 28, 10, 5, 20, 9);
let player8 = new Fighter("yondu", 28, 10, 5, 20, 9);
let player9 = new Fighter("fate", 28, 10, 5, 20, 9);
let player10 = new Fighter("gamora", 28, 10, 5, 20, 9);
let player11 = new Fighter("groot", 28, 10, 5, 20, 9);
let player12 = new Fighter("hawkeye", 28, 10, 5, 20, 9);
let player13 = new Fighter("heimdall", 28, 10, 5, 20, 9);
let player14 = new Fighter("hella", 28, 10, 5, 20, 9);
let player15 = new Fighter("ironman", 28, 10, 5, 20, 9);
let player16 = new Fighter("loki", 28, 10, 5, 20, 9);
let player17 = new Fighter("marvel", 28, 10, 5, 20, 9);
let player18 = new Fighter("megasonic", 28, 10, 5, 20, 9);
let player19 = new Fighter("minigroot", 28, 10, 5, 20, 9);
let player20 = new Fighter("monguer", 28, 10, 5, 20, 9);
let player21 = new Fighter("nebula", 28, 10, 5, 20, 9);
let player22 = new Fighter("quicksilver", 28, 10, 5, 20, 9);
let player23 = new Fighter("rocket", 28, 10, 5, 20, 9);
let player24 = new Fighter("scarlet", 28, 10, 5, 20, 9);
let player25 = new Fighter("spidergwen", 28, 10, 5, 20, 9);
let player26 = new Fighter("spiderman", 28, 10, 5, 20, 9);
let player27 = new Fighter("starlord", 28, 10, 5, 20, 9);
let player28 = new Fighter("strange", 28, 10, 5, 20, 9);
let player29 = new Fighter("thanos", 28, 10, 5, 20, 9);
let player30 = new Fighter("thor", 28, 10, 5, 20, 9);
let player31 = new Fighter("ultron", 28, 10, 5, 20, 9);
let player32 = new Fighter("valkyre", 28, 10, 5, 20, 9);
let player33 = new Fighter("vision", 28, 10, 5, 20, 9);
let player34 = new Fighter("wasp", 28, 10, 5, 20, 9);
let player35 = new Fighter("wsoldier", 28, 10, 5, 20, 9);
// let player36 = new Fighter("yondu", 28, 10, 5, 20, 9);
let player36 = new Fighter("hulk", 28, 10, 5, 20, 9);


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
    "36" : player36

}
