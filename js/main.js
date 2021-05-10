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
    team1.push(allPlayers[fighter]);
    console.log(team1);
}