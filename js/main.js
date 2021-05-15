let team1 = [];
let team2 = [];
let p1 = "";
let p2 = "";

let i=0, j=0;


setTimeout(() => {
    document.getElementById("titles").style.opacity = "1";
}, this.animationDelay + 20000);  



const animationMenu = () => {
    onclick="phaseChanger('phase1')"
}
// Function to forward to the next phase
const phaseChanger = (destino) =>{
    let arrphase = ["phaseTitles","phase1", "phase2", "phase3", "phase4", "phase5"];
    arrphase = arrphase.filter(val => !destino.includes(val));
    document.getElementById(destino).style.display = "block";

    for (let _phase of arrphase){
        document.getElementById(_phase).style.display = "none";
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
                showBothTeams();
                phaseChanger("phase3");

                setTimeout(()=> {
                    phaseChanger("phase4");
                    scenarioFight(i,j);
                }, 2000);
            }
        }
        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "choosen";
    }    
};


const preview = (a) => {
    let prevL = document.getElementById("previewLeft");
    prevL.innerHTML = `<div><img src="img/avatar${a}.jfif" alt="previewL"></div>`;
    // prevL.style.backgroundImage = `linear-gradient(to bottom, black, transparent,  black), linear-gradient(to left,black, transparent, black)`;
    let prevR = document.getElementById("previewRight");
    let str = (allPlayers[a]);
    prevR.innerHTML = `<div><span>${str.name}<br>Attack ${str.strength}<br>Defense ${str.defense}<br>Skill ${str.skill}<br>Agility ${str.agility}</span></div>`;
    // prevR.style.backgroundImage = `radial-gradient(transparent, black 50%)`;
    console.log(allPlayers[a]);
};

const outPreview = () => {
    let prevL = document.getElementById("previewLeft");
    prevL.innerHTML = "";
    prevL.style.backgroundImage = ``;
    let prevR = document.getElementById("previewRight");
    prevR.innerHTML = "";
    prevR.style.backgroundImage = ``;
}

// Function to show both teams on html
const showBothTeams = () => {
    let teams = document.getElementById("teams");
    teams.innerHTML = `
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team1[0].name}.jfif" alt="luchador1"></div>
        <div><img class="picFighter" src="img/${team1[1].name}.jfif" alt="luchador2"></div>
    </div>
    <div class="fightPanel" alt="lucha"><img class="fotoVersus" src="img/fight.png"></div>
    <div class="teamCharacters">
        <div><img class="picFighter" src="img/${team2[0].name}.jfif" alt="luchador3"></div>
        <div><img class="picFighter" src="img/${team2[1].name}.jfif" alt="luchador4"></div>
    </div>`;
    
};

    // Fighting Scenario with fighters

const scenarioFight = (i, j) => {
    let leftPlayer1 = document.getElementById("leftPlayer");
    leftPlayer1.src=`img/${team1[i].name}.jfif`;
        
    let lifeP1 = document.getElementById("vidaP1");
    lifeP1.innerHTML = `${team1[i].name} : ${team1[i].vida}`;


    let rightPlayer1 = document.getElementById("rightPlayer");
    rightPlayer1.src=`img/${team2[j].name}.jfif`;
    let lifeP2 = document.getElementById("vidaP2");
    lifeP2.innerHTML = `${team2[j].name} : ${team2[j].vida}`;
};


const fighting1 = () => {
    p1 = team1[i];
        p2 = team2[j];
        console.log("Lucha!!!");

        p1.hit(p2);
        
        if (p2.vida<=0 && j<1) {
            j++;
            document.getElementById("vidaP2").innerHTML = `${team2[j].name} : ${team2[j].vida}`;
            scenarioFight(i, j);
        }

        (p2.vida<0) ? p2.vida=0 : console.log("");
          
        let vidaP2 = document.getElementById("vidaP2");
        vidaP2.innerHTML = `${team2[j].name} : ${team2[j].vida}`;
        let lifeBar1 = document.getElementById("fighter2Hit");
        lifeBar1.style.width = team2[j].vida*0.008 + "em";

        finishFight(i,j);
};

const fighting2 = () => {

    p1 = team1[i];
    p2 = team2[j];
    console.log("Lucha!!!");

    p2.hit(p1);

    
    if (p1.vida<=0 && i<1) {
        i++;
        document.getElementById("vidaP1").innerHTML = `${team1[i].name} : ${team1[i].vida}`;
        scenarioFight(i, j);
    }

    (p1.vida<0) ? p1.vida=0 : console.log("");

    /* Update life status after each hit */
    let vidaP1 = document.getElementById("vidaP1");
    vidaP1.innerHTML = `${team1[i].name} : ${team1[i].vida}`;
    let lifeBar = document.getElementById("fighter1Hit");
    lifeBar.style.width = team1[i].vida*0.008 + "em";

    finishFight(i,j);
};

const finishFight = (i,j) => {
    if ((team1[i].vida<=0 && i==1) || (team2[j].vida<=0 && j==1)){
        let winner = document.getElementById("winner");

        if (team1[i].vida<=0 && team2[j].vida<=0) { 
        winner.innerHTML = `¡¡Double KO!!`;

        } else if (team2[j].vida<=0) {
            winner.innerHTML = `
            <img  src="img/${team1[i].name}.jfif">
            ${team1[i].name} has WON!!`;    
            
        } else{
            winner.innerHTML = `
            <img  src="img/${team2[j].name}.jfif">
            ${team2[j].name} has WON!!`;
        }
    
        setTimeout(()=> {
            phaseChanger("phase5");
        }, 0000);
    }
}

document.body.onkeydown = (e) =>{
    if(e.keyCode == 81){
        for (let a=1; a<=4; a++){
            (function (a) {
                setTimeout(function () {
                    document.getElementById("leftPlayer").src=`img/MH2_Attack/Attack${a}.png`;
                }, 75*a);
              })(a);
        }
        fighting1();
    }

    if(e.keyCode == 80){
        fighting2();

    }
}

//  setInterval(){
//     for (let a=1; a<=4; a++){
//         (function (a) {
//             setTimeout(function () {
//                 document.getElementById("attack1").src=`img/MH2_Idle/Idle${a}.png`;
//             }, 75*a);
//           })(a);
//     }
// };
    //scenario(); Calling the function scenario.

document.body.onkeyup = (e) =>{
    if(e.keyCode == 81){

    }

    if(e.keyCode == 80){

    }
}

const reset = document.getElementById('playAgain');

reset.addEventListener('click', () => {
    window.location.reload();
})

// calcular distancia entre 2 divs, usando coordenadas de cada div y restando una frente al otro, condicional x=div1pos-div2pos, if x<distanciamin && userpressHitButton, "puser1.hit(puser2)"

// Añadir un contador de combate que resuelva ganador al equipo que vaya ganando cuando el tiempo llega a 0.

// Arreglar lo de la barra de vida - DONE

// Cambiar la estructura de los divs de las phases para que no se resetee la barra de vida cuando un jugador es derrotado. - DONE