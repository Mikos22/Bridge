
//noget med noget kodeskiks eller noget, en slags præsentation af opgaven heroppe, 

let spiller1 = "X" 
let spiller2 = "O"
let spilSlut = false; // Ny variabel der holder styr på spilstatus

// Her er vores array til at holde styr på selve spilbrættet. 
mainBræt = [null,null,null,null,null,null,null,null,null];

// Array til de felter der endnu ikke er blevet opfyldt, vi starter med alle felterne, da der ikke er placeret nogen X/O'er endnu
tommeFelter = [0,1,2,3,4,5,6,7,8]; 


// funktion til at bestemme et tilfældigt felt. 
randomFelt = function(tommeFelter){
    let etTomtFelt = Math.floor(tommeFelter.length * Math.random());

    let valgtFelt = tommeFelter[etTomtFelt];

    tommeFelter.splice(etTomtFelt, 1);

    return valgtFelt
}


checkVinder = function(mainBræt) {
    // Tjek for hver række
    if (mainBræt[0] === spiller1 && mainBræt[1] === spiller1 && mainBræt[2] === spiller1) {
        console.log("Vinderen er", spiller1);
        spilSlut = true; // Sæt spillet til slut
        return;
    }
    if (mainBræt[3] === spiller1 && mainBræt[4] === spiller1 && mainBræt[5] === spiller1) {
        console.log("Vinderen er", spiller1);
        spilSlut = true;
        return;
    }
    if (mainBræt[6] === spiller1 && mainBræt[7] === spiller1 && mainBræt[8] === spiller1) {
        console.log("Vinderen er", spiller1);
        spilSlut = true;
        return;
    }

    // Tjek for hver kolonne
    if (mainBræt[0] === spiller1 && mainBræt[3] === spiller1 && mainBræt[6] === spiller1) {
        console.log("Vinderen er", spiller1);
        spilSlut = true;
        return;
    }
    if (mainBræt[1] === spiller1 && mainBræt[4] === spiller1 && mainBræt[7] === spiller1) {
        console.log("Vinderen er", spiller1);
        spilSlut = true;
        return;
    }
    if (mainBræt[2] === spiller1 && mainBræt[5] === spiller1 && mainBræt[8] === spiller1) {
        console.log("Vinderen er", spiller1);
        spilSlut = true;
        return;
    }

    // Tjek for hver diagonal
    if (mainBræt[0] === spiller1 && mainBræt[4] === spiller1 && mainBræt[8] === spiller1) {
        console.log("Vinderen er", spiller1);
        spilSlut = true;
        return;
    }
    if (mainBræt[2] === spiller1 && mainBræt[4] === spiller1 && mainBræt[6] === spiller1) {
        console.log("Vinderen er", spiller1);
        spilSlut = true;
        return;
    }

    // Gentag ovenstående for spiller 2
    if (mainBræt[0] === spiller2 && mainBræt[1] === spiller2 && mainBræt[2] === spiller2) {
        console.log("Vinderen er", spiller2);
        spilSlut = true;
        return;
    }
    if (mainBræt[3] === spiller2 && mainBræt[4] === spiller2 && mainBræt[5] === spiller2) {
        console.log("Vinderen er", spiller2);
        spilSlut = true;
        return;
    }
    if (mainBræt[6] === spiller2 && mainBræt[7] === spiller2 && mainBræt[8] === spiller2) {
        console.log("Vinderen er", spiller2);
        spilSlut = true;
        return;
    }

    // Tjek for hver kolonne
    if (mainBræt[0] === spiller2 && mainBræt[3] === spiller2 && mainBræt[6] === spiller2) {
        console.log("Vinderen er", spiller2);
        spilSlut = true;
        return;
    }
    if (mainBræt[1] === spiller2 && mainBræt[4] === spiller2 && mainBræt[7] === spiller2) {
        console.log("Vinderen er", spiller2);
        spilSlut = true;
        return;
    }
    if (mainBræt[2] === spiller2 && mainBræt[5] === spiller2 && mainBræt[8] === spiller2) {
        console.log("Vinderen er", spiller2);
        spilSlut = true;
        return;
    }

    // Tjek for hver diagonal
    if (mainBræt[0] === spiller2 && mainBræt[4] === spiller2 && mainBræt[8] === spiller2) {
        console.log("Vinderen er", spiller2);
        spilSlut = true;
        return;
    }
    if (mainBræt[2] === spiller2 && mainBræt[4] === spiller2 && mainBræt[6] === spiller2) {
        console.log("Vinderen er", spiller2);
        spilSlut = true;
        return;
    }

    // Uafgjort tjek
    if (!mainBræt.includes(null)) {
        console.log("RESULTAT = UAFGJORT");
        spilSlut = true; // Spillet slutter også ved uafgjort
    }
}


console.log("Her begynder et X og O spil.\n \nBrættet er klargjort til spilning, god fornøjelse! :) \n ");
console.log(mainBræt);

for (let i = 0; i < mainBræt.length; i++){

    // Her bestemmer vi feltet, som vi bruger til resten af den ene gennemgang af forløkken, jeg skal ikek kalde funktionen flere gange, da det betyder at jeg erstatter flere felter i funktionen. 
    // Jeg overfør det givne felt til en variabel, som jeg bagefter bearbejder igennem løkken. 
    // næste gang løkken køres får vi et andet tal, så vi ikke bruger flere felter i samme løkke. ¨

    let valgtFelt = randomFelt(tommeFelter);

    if (mainBræt[valgtFelt] === null) {

        if (i % 2 === 0){

            mainBræt[valgtFelt] = "X"
    
            } else {
    
            mainBræt[valgtFelt] = "O"
    
            }

            console.log(mainBræt);

        if(i > 3){
            checkVinder(mainBræt)
        }

        if (spilSlut = true){
            break;
        }

    } else {

        console.log ("KUNNE IKKE FINDE FLERE FELTER MED ´NULL´. ")

        break; 
    }

}