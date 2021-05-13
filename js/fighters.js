
class Fighter{

    constructor(nombre, ataque, defensa, tecnica, agilidad){

        this.vida = 5000;
        this.agilidad = agilidad;
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.tecnica = tecnica;
    }

    hit(enemy){
        // enemy.vida -= this.ataque - (enemy.defensa);
        enemy.vida -= (this.ataque*this.agilidad) - (enemy.defensa * enemy.tecnica);
    }

    specialHit(enemy){
        // enemy.vida -= this.ataque + this.tecnica;
        // enemy.vida -= (this.ataque + this.tecnica -  (enemy.defensa * (enemy.agilidad / this.velocidad)));

    }
}


// Instancio luchadores
let player1;
let player2;
let player3;
let player4;
let player5;
let player6;

player1 = new Fighter("Neo", 30, 15, 5, 20, 15);
player2 = new Fighter("Axel", 35, 12, 8, 12, 12);
player3 = new Fighter("Donatello", 25, 20, 7, 15, 18);
player4 = new Fighter("Goku", 40, 8, 6, 18, 10);
player5 = new Fighter("Chuck Norris", 42, 13, 14, 9, 20);
player6 = new Fighter("Pikachu", 28, 10, 5, 20, 9);






let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6,
}

console.log("luchador", player1);