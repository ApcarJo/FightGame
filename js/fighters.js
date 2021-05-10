
class Fighter{

    constructor(nombre, ataque, defensa, tecnica){

        this.vida = 300,
        this.suerte = Math.floor(Math.random()*11),
        this.nombre = nombre,
        this.ataque = ataque,
        this.defensa = defensa,
        this.tecnica = tecnica
    }

    hit(enemy){
        enemy.vida -= this.ataque - (enemy.defensa*(enemy.suerte/this.velocidad));
    }

    specialHit(enemy){
        enemy.vida -= this.ataque + this.tecnica -  (enemy.defensa*(enemy.suerte/this.velocidad));

    }
}

// Instancio luchadores

let player1 = new Fighter("Neo", 30, 15, 5, 20);
let player2 = new Fighter("Axel", 35, 12, 8, 12);
let player3 = new Fighter("Donatello", 25, 20, 7, 15);
let player4 = new Fighter("Goku", 40, 8, 6, 18);
let player5 = new Fighter("Chuck Norris", 100, 100, 100, 100);
let player6 = new Fighter("Pikachu", 28, 10, 5, 20);

let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6,
}