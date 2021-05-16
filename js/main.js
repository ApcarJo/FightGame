let team1 = [];
let team2 = [];
let p1 = "";
let p2 = "";

let i=0, j=0;

// setTimeout(() => {document.getElementById("titles").classList.add(opacityChange);},2000);

const constructordiv = (number) => {
    let creator = document.getElementById("creationList");
    for(let k=1; k<=number; k++){

        creator.innerHTML += `
        <div class="avatar" id="${k}" onclick="chooseFighter(${k})" onmouseover="preview(${k})" onmouseout="outPreview()"><div class="picBox"><img class="picFighter" src="img/Marvel/${allPlayers[k].name}.png"></div></div>`;
        console.log(allPlayers[k].name);
        console.log(creator.id);
    }
    phaseChanger('phase2')
}

// Function to forward to the next phase
const phaseChanger = (destino) =>{
    let arrphase = ["phase0","phase1", "phase2", "phase3", "phase4", "phase5"];
    arrphase = arrphase.filter(val => !destino.includes(val));
    document.getElementById(destino).style.display = "block";


    for (let _phase of arrphase){
        document.getElementById(_phase).style.display = "none";
    }
};

// function to choose 2 fighters and add them to each team with a push method
const chooseFighter = (fighter) => {

    if (team2.length<3){
        if(team1.length <3){
            team1.push(allPlayers[fighter]);
        } else {
            team2.push(allPlayers[fighter]); 

            // Once we have 2 fighters in each team, we call a function to show them on screen 
            if (team2.length == 3){
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
    prevL.innerHTML = `<div><img class="photoSize" src="img/Marvel/${allPlayers[a].name}.png" alt="previewL"></div>`;
    let str = allPlayers[a];
    
    document.getElementById("Str").style.width = `${str.strength/25*100}%`;
    document.getElementById("Def").style.width = `${str.defense/15*100}%`;
    document.getElementById("Agi").style.width = `${str.agility/12*100}%`;
    document.getElementById("Skl").style.width = `${str.skill/20*100}%`;
    document.getElementById("Spd").style.width = `${str.speed/10*100}%`;

    // let prevR = document.getElementById("previewRight");
    // prevR.innerHTML = `<div><span>${str.name}<br>Attack ${str.strength}<br>Defense ${str.defense}<br>Skill ${str.skill}<br>Agility ${str.agility}</span></div>`;
    // prevR.style.backgroundImage = `radial-gradient(transparent, black 50%)`;
    // console.log(allPlayers[a]);
};

const outPreview = () => {
    let prevR = document.getElementById("previewRight");
    // prevR.innerHTML = "";
    prevR.style.backgroundImage = ``;
}

// Function to show both teams on html
const showBothTeams = () => {
    let teams = document.getElementById("teams");
    teams.innerHTML = `
    <div class="teamCharacters1">
        <div><img class="picFighter1" src="img/Marvel/${team1[0].name}.png" alt="luchador1"></div>
        <div><img class="picFighter1" src="img/Marvel/${team1[1].name}.png" alt="luchador2"></div>
        <div><img class="picFighter1" src="img/Marvel/${team1[2].name}.png" alt="luchador3"></div>
    </div>
    <div class="fightPanel" alt="lucha"><img class="fotoVersus" src="img/fight.png"></div>
    <div class="teamCharacters1">
        <div><img class="picFighter1" src="img/marvel/${team2[0].name}.png" alt="luchador4"></div>
        <div><img class="picFighter1" src="img/marvel/${team2[1].name}.png" alt="luchador5"></div>
        <div><img class="picFighter1" src="img/marvel/${team2[2].name}.png" alt="luchador6"></div>
    </div>`;
    
};

    // Fighting Scenario with fighters

const scenarioFight = (i, j) => {
    let leftPlayer1 = document.getElementById("leftPlayer");
    leftPlayer1.src=`img/Marvel/${team1[i].name}.png`;
        
    let lifeP1 = document.getElementById("vidaP1");
    lifeP1.innerHTML = `${team1[i].name} : ${team1[i].vida}`;


    let rightPlayer1 = document.getElementById("rightPlayer");
    rightPlayer1.src=`img/Marvel/${team2[j].name}.png`;
    let lifeP2 = document.getElementById("vidaP2");
    lifeP2.innerHTML = `${team2[j].name} : ${team2[j].vida}`;
};


const fighting1 = () => {
        p1 = team1[i];
        p2 = team2[j];
        p1.hit(p2);
        
        if (p2.vida<=0 && j<2) {
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
    p2.hit(p1);
 
    if (p1.vida<=0 && i<2) {
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
    if ((team1[i].vida<=0 && i==2) || (team2[j].vida<=0 && j==2)){
        let winner = document.getElementById("winner");

        if (team1[i].vida<=0 && team2[j].vida<=0) { 
        winner.innerHTML = `¡¡Double KO!!`;

        } else if (team2[j].vida<=0) {
            winner.innerHTML = `
            <img src="img/Marvel/${team1[i].name}.png">
            ${team1[i].name} has WON!!`;    
            
        } else{
            winner.innerHTML = `
            <img src="img/Marvel/${team2[j].name}.png">
            ${team2[j].name} has WON!!`;
        }
    
        setTimeout(()=> {
            phaseChanger("phase5");
        }, 0000);
    }
}

document.body.onkeydown = (e) =>{
    if(e.keyCode == 81){
        // for (let a=1; a<=4; a++){
        //     (function (a) {
        //         setTimeout(function () {
        //             document.getElementById("leftPlayer").src=`img/MH2_Attack/Attack${a}.png`;
        //         }, 75*a);
        //       })(a);
        // }
        fighting1();
    }

    if(e.keyCode == 80){
        fighting2();
    }
}

document.body.onkeyup = (e) =>{
    if(e.keyCode == 81){}
    if(e.keyCode == 80){}
}

const reset = document.getElementById('playAgain');

reset.addEventListener('click', () => {
    window.location.reload();
});

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



// calcular distancia entre 2 divs, usando coordenadas de cada div y restando una frente al otro, condicional x=div1pos-div2pos, if x<distanciamin && userpressHitButton, "puser1.hit(puser2)"

// Añadir un contador de combate que resuelva ganador al equipo que vaya ganando cuando el tiempo llega a 0.

// Arreglar lo de la barra de vida - DONE

// Cambiar la estructura de los divs de las phases para que no se resetee la barra de vida cuando un jugador es derrotado. - DONE