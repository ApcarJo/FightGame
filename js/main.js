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
    /////////////////////////////// BORRAR la seleccion para nueva pelea
    if (team2.length<2){

        if(team1.length <2){

        team1.push(allPlayers[fighter]);

        } else {

        team2.push(allPlayers[fighter]); 

            // Once we have 2 fighters in each team, we call a function to show them on screen 
            if (team2.length == 2){
                console.log("este team 1 choosefighter", team1);
                console.log("este team 2 choosefighter", team2);
                llenaEquipos();
                cambiaFase("fase3");

                setTimeout(()=> {
                    cambiaFase("fase4");
                }, 2000);
            }
        }
        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "seleccionado";
    }    
};

// Function to show both teams on html
const llenaEquipos = () => {
    let equipos = document.getElementById("equipos");
    equipos.innerHTML = `
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
        <div><img class="picFighter" src="img/${team1[i].nombre}.jfif" alt="luchador3"></div>
    </div>
    <div class="fightPanel" alt="lucha"><img class="fotoVersus" src="img/fight.png"></div>
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team2[j].nombre}.jfif" alt="luchador3"></div>
    </div>`;

    // Cambio el color del fondo
    let fondo = document.getElementById("fase4");
    fondo.style.backgroundColor = "green";
};



const fighting = () => {
    
    if ((team1[i].vida<=0 && i==1) || (team2[j].vida<=0 && j==1)){
        let resultadoCombate = document.getElementById("resultadoCombate");

        if (team1[i].vida<=0 && team2[j].vida<=0) { 
        resultadoCombate.innerHTML = `Double KO`;
        team1=[];
        team2=[];
    
        setTimeout(()=> {
            cambiaFase("fase5");
        }, 2000);
        } else if (team2[j].vida<=0) {
            resultadoCombate.innerHTML = `El equipo de ${team1[i].nombre} ha ganado`;
            team1=[];
            team2=[];
            
            setTimeout(()=> {
                cambiaFase("fase5");
            }, 2000);
            
        } else{
        resultadoCombate.innerHTML = `El equipo de ${team2[j].nombre} ha ganado`;

        }
        team1=[];
        team2=[];
        
        setTimeout(()=> {
            cambiaFase("fase5");
        }, 2000);

    } else {

        p1 = team1[i];
        p2 = team2[j];
        console.log("Lucha!!!");

        p1.hit(p2);
        p2.hit(p1);

        console.log("fighting", team1[i], team2[j]);

        
        if (p1.vida<=0 && i<1) {
            i++;
            scenarioFight(i, j);
        }

        if (p2.vida<=0 && j<1) {
            j++;
            scenarioFight(i, j);
        }

        console.log("estos son i y j", i, j);
    }
};

// calcular distancia entre 2 divs, usando coordenadas de cada div y restando una frente al otro, condicional x=div1pos-div2pos, if x<distanciamin && userpressHitButton, "puser1.hit(puser2)"