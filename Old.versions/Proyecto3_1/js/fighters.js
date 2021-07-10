class Mechwarrior{

    constructor(nombre, ataque, blindaje, velocidad, rangoAtaque){

        this.vida = 5000;
        this.velocidad = velocidad;
        this.nombre = nombre;
        this.ataque = ataque;
        this.blindaje = blindaje;
        this.rangoAtaque = rangoAtaque;
    }

    hit(enemy){
        // enemy.vida -= this.ataque - (enemy.defensa);
        enemy.vida -= (this.ataque*this.velocidad) - (enemy.blindaje * enemy.rangoAtaque);
    }

    specialHit(enemy){
        // enemy.vida -= this.ataque + this.tecnica;
        // enemy.vida -= (this.ataque + this.tecnica -  (enemy.defensa * (enemy.agilidad / this.velocidad)));

    }
}


// Instancio luchadores

let player1 = new Mechwarrior("Neo", 30, 15, 5, 20, 15);
let player2 = new Mechwarrior("Axel", 35, 12, 8, 12, 12);
let player3 = new Mechwarrior("Donatello", 25, 20, 7, 15, 18);
let player4 = new Mechwarrior("Goku", 40, 8, 6, 18, 10);
let player5 = new Mechwarrior("Chuck Norris", 42, 13, 14, 9, 20);
let player6 = new Mechwarrior("Pikachu", 28, 10, 5, 20, 9);



let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6,
}

console.log("luchador", player1);