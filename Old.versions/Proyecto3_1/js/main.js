let team1 = [];
let team2 = [];
let p1 = [];
let p2 = [];

const phaseChange = (end) =>{
    let arrayPhase = ["phase1", "fightersScreen", "phase3", "phase4", "phase5"];
    arrayPhase = arrayPhase.filter(val => !end.includes(val));
    document.getElementById(end).style.display = "block";

    for (let _phase of arrayPhase){
        document.getElementById(_phase).style.display = "none";
    }
};

const chooseFighter = (fighter) => {

    if (team2.length<2){
        if (team1.length<2){
        team1.push(allPlayers[fighter]);
        // document.getElementById(fighter).onclick = "";
        // document.getElementById(fighter).className = "seleccionado";
        console.log(`el p1 es ${p1} y el team1 es ${team1}`);
        }
        else {
        team2.push(allPlayers[fighter]);
        console.log(`el p2 es ${p2} y el team2 es ${team2}`);
        // document.getElementById(fighter).onclick = "";
        // document.getElementById(fighter).className = "seleccionado";  
        
            if (team2.length==2){
            fillTeams();
            changePhase("fase3");
        
                setTimeout(()=> {
                    changePhase("fase4");
                }, 2000);
            }
        }
    }
    // document.getElementById(fighter).onclick = "";
    // document.getElementById(fighter).className = "seleccionado";
    p1 = team1;
    p2 = team2;
    console.log(`el p1 es ${p1} y el team1 es ${team1}`);
    console.log(`el p2 es ${p2} y el team2 es ${team2}`);
};