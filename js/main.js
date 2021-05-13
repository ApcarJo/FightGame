let team1 = [];
let team2 = [];
let p1 = "";
let p2 = "";


// Function to forward to the next phase
const cambiaFase = (destino) =>{
    let arrFase = ["fase1", "fase2", "fase3", "fase4", "fase5"];
    arrFase = arrFase.filter(val => !destino.includes(val));
    document.getElementById(destino).style.display = "block";

    for (let _fase of arrFase){
        document.getElementById(_fase).style.display = "none";
    }
};

// function to choose 2 fighters and add them to each team with a push method
const chooseFighter = (fighter) => {

    if (team2.length<2){
        if(team1.length <2){
            team1.push(allPlayers[fighter]);
        } else {
            team2.push(allPlayers[fighter]); 

            // Once we have 2 fighters in each team, we call a function to show them on screen 
            if (team2.length == 2){
                fillTeams();
                cambiaFase("fase3");

                setTimeout(()=> {
                    cambiaFase("fase4");
                }, 2000);
            }
        }
        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "seleccionado";
    }    
    console.log("el test del test", allPlayers);
};

// Function to show both teams on html
const fillTeams = () => {
    let teams = document.getElementById("teams");
    teams.innerHTML = `
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team1[0].nombre}.jfif" alt="luchador1"></div>
        <div><img class="picFighter" src="img/${team1[1].nombre}.jfif" alt="luchador2"></div>
    </div>
    <div class="fightPanel" alt="lucha"><img class="fotoVersus" src="img/fight.png"></div>
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team2[0].nombre}.jfif" alt="luchador3"></div>
        <div><img class="picFighter" src="img/${team2[1].nombre}.jfif" alt="luchador4"></div>
    </div>`;
    console.log("este team 1 llenaequipos", team1);
    console.log("este team 2 llenaequipos", team2);
    
};

let i=0, j=0;
document.body.onkeyup = (e) =>{
    if(e.keyCode == 32){
        scenarioFight(i,j);
        //scenario(); Calling the function scenario.
    }
}

// Code to add something between chooseFight and the fight

// const scenario = () => {
//     console.log(i, j);
//     scenarioFight(i, j);
// };

    // Muestro el escenario de lucha junto a los 2 primeros luchadores
const scenarioFight = (i, j) => {
    let lucha = document.getElementById("lucha");
    lucha.innerHTML = `
    <div class="teamCharacters">
        <div class="lifeBarP1"></div>
        <div><img onclick="fighting1()" src="img/fight.png"></div>
        <div><img class="picFighter" id="fighter1Hit" src="img/${team1[i].nombre}.jfif" alt="luchador3"></div>
        <span class="textoBasico" id="vidaP1">Vida de ${team1[i].nombre} es ${team1[i].vida}</span> 

    </div>
    <div class="teamCharacters">
    <div class="fightPanel" alt="lucha"><img class="fotoVersus" src="img/fight.png"></div>
    </div>
    <div class="teamCharacters">
        <div class="lifeBarP2"></div>
        <div><img onclick="fighting2()" src="img/fight.png"></div>
        <div><img class="picFighter" id="fighter2Hit" src="img/${team2[j].nombre}.jfif" alt="luchador3"></div>
        <span class="textoBasico" id="vidaP2">Vida de ${team2[j].nombre} es ${team2[j].vida}</span>
        
    </div>`;

    // Cambio el color del fondo
    let fondo = document.getElementById("fase4");
    fondo.style.backgroundColor = "green";
};


const fighting1 = () => {

    if ((team1[i].vida<=0 && i==1) || (team2[j].vida<=0 && j==1)){
        let winner = document.getElementById("winner");

        if (team1[i].vida<=0 && team2[j].vida<=0) { 
        winner.innerHTML = `Double KO`;
        team1=[];
        team2=[];
    
        setTimeout(()=> {
            cambiaFase("fase5");
        }, 2000);
        } else if (team2[j].vida<=0) {
            winner.innerHTML = `El equipo de ${team1[i].nombre} ha ganado`;
            team1=[];
            team2=[];
            
            setTimeout(()=> {
                cambiaFase("fase5");
            }, 2000);
            
        } else{
        winner.innerHTML = `El equipo de ${team2[j].nombre} ha ganado`;
        }
    
        setTimeout(()=> {
            cambiaFase("fase5");
        }, 2000);

    } else {

        if (p1.vida<=0 && i<1) {
            i++;
            scenarioFight(i, j);
        }

        if (p2.vida<=0 && j<1) {
            j++;
            scenarioFight(i, j);
        }

        p1 = team1[i];
        p2 = team2[j];
        console.log("Lucha!!!");

        p1.hit(p2);

        let vidaP1 = document.getElementById("vidaP1");
        vidaP1.innerHTML = `${team1[i].nombre} : ${team1[i].vida}`;
        // document.getElementById("lifeBarP1").style.width -= `5em`;
       
        
        let vidaP2 = document.getElementById("vidaP2");
        vidaP2.innerHTML = `${team2[j].nombre} : ${team2[j].vida}`;
        let lifeBarP2 = document.getElementById("lifeBarP2");
        // document.getElementById("lifeBarP2").style.width -= `5em`;

        
        // if (p1.vida<=0 && i<1) {
        //     i++;
        //     scenarioFight(i, j);
        // }

        // if (p2.vida<=0 && j<1) {
        //     j++;
        //     scenarioFight(i, j);
        // }
    }
};

const fighting2 = () => {

    if ((team1[i].vida<=0 && i==1) || (team2[j].vida<=0 && j==1)){
        let winner = document.getElementById("winner");

        if (team1[i].vida<=0 && team2[j].vida<=0) { 
        winner.innerHTML = `Double KO`;
    
        setTimeout(()=> {
            cambiaFase("fase5");
        }, 2000);
        } else if (team2[j].vida<=0) {
            winner.innerHTML = `El equipo de ${team1[i].nombre} ha ganado`;

            setTimeout(()=> {
                cambiaFase("fase5");
            }, 2000);
            
        } else{
        winner.innerHTML = `El equipo de ${team2[j].nombre} ha ganado`;
        }
    
        setTimeout(()=> {
            cambiaFase("fase5");
        }, 2000);

    } else {

        if (p1.vida<=0 && i<1) {
            i++;
            scenarioFight(i, j);
        }

        if (p2.vida<=0 && j<1) {
            j++;
            scenarioFight(i, j);
        }

        p1 = team1[i];
        p2 = team2[j];
        console.log("Lucha!!!");

        p2.hit(p1);

        /* Update life status after each hit */
        let vidaP1 = document.getElementById("vidaP1");
        vidaP1.innerHTML = `${team1[i].nombre} : ${team1[i].vida}`;
        // document.getElementById("lifeBarP1").style.width -= 5;
        
        let vidaP2 = document.getElementById("vidaP2");
        vidaP2.innerHTML = `${team2[j].nombre} : ${team2[j].vida}`;
        // document.getElementById("lifeBarP2").style.width -= 5;

        
        // if (p1.vida<=0 && i<1) {
        //     i++;
        //     scenarioFight(i, j);
        // }

        // if (p2.vida<=0 && j<1) {
        //     j++;
        //     scenarioFight(i, j);
        // }
    }
};

document.body.onkeydown = (e) =>{
    if(e.keyCode == 80){
        fighting2();
        
        //scenario(); Calling the function scenario.
    }

    if(e.keyCode == 81){
        fighting1();
        //scenario(); Calling the function scenario.
    }
}


const reset = document.getElementById('playAgain');

reset.addEventListener('click', () => {
    window.location.reload();
})

// calcular distancia entre 2 divs, usando coordenadas de cada div y restando una frente al otro, condicional x=div1pos-div2pos, if x<distanciamin && userpressHitButton, "puser1.hit(puser2)"

// Añadir un contador de combate que resuelva ganador al equipo que vaya ganando cuando el tiempo llega a 0.