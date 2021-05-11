let team1 = [];
let team2 = [];
let p1 = "";
let p2 = "";

const cambiaFase = (destino) =>{
    let arrFase = ["fase1", "fase2", "fase3", "fase4"];

    arrFase = arrFase.filter(val => !destino.includes(val));

    document.getElementById(destino).style.display = "block";

    for (let _fase of arrFase){
        document.getElementById(_fase).style.display = "none";
    }

};

const chooseFighter = (fighter) => {
    
    if (team2.length<2){

        if(team1.length <2){

        team1.push(allPlayers[fighter]);

        } else {

        team2.push(allPlayers[fighter]); 

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

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        scenario();
    }
}

let i=0;
let j=0;

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
    console.log("este team 1 scenariofight", team1);
    console.log("este team 2 scenariofight", team2);

}

const scenario = () => {
    let i=0, j=0;
    console.log(i, j);
    scenarioFight(i, j);
   
    
    
    console.log("este team 1 scenario", team1);
    console.log("este team 2 scenario", team2);
}

const fighting = () => {
    

    p1 = team1[0];
    p2 = team2[0];
    console.log("empieza la lucha");

    p1.hit(p2);
    p2.hit(p1);

    console.log("fighting", team1[i], team2[j]);

    if (team1[i].vida<=0) {
        i++;
        scenarioFight(i, j);
     }
    if (team2[j].vida<=0) {
        j++;
        scenarioFight(i, j);
    }
    // do {
    // } while (team1[2].vida<=0 || team2[2].vida<=0);
}

// calcular distancia entre 2 divs, usando coordenadas de cada div y restando una frente al otro, condicional x=div1pos-div2pos, if x<distanciamin && userpressHitButton, "puser1.hit(puser2)"