let team1 = [];
let team2 = [];

const cambiaFase = (destino) =>{
    let arrFase = ["fase1", "fase2"];

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
        }

        document.getElementById(fighter).onclick = "";
        document.getElementById(fighter).className = "seleccionado";
        console.log(team1);

    } else {

        console.log("este team 1", team1);
        console.log("este team 2", team2);
        cambiaFase("fase3");
    }
};