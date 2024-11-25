// OPGAVE 1 
// tjek om et tal er positiv negativ eller nul. 

let tal = 5; // Skift værdien for at teste med andre tal

if (tal > 0) {
    console.log("Tallet er positivt.");
} else if (tal < 0) {
    console.log("Tallet er negativt.");
} else {
    console.log("Tallet er nul.");
}

// OPGAVE 2 
// tjek om et tal er lige eller ulige 

let tal1 = 7; // Skift værdien for at teste med andre tal

if (tal1 % 2 === 0) {
    console.log("Tallet er lige.");
} else {
    console.log("Tallet er ulige.");
}

// OPGAVE 3
/*
bruger et if-else statement til at bestemme karakteren:
• Hvis karakteren er 90 eller derover, udskriv "12".
• Hvis karakteren er mellem 80 og 89, udskriv "10".
• Hvis karakteren er mellem 70 og 79, udskriv "7".
• His karakteren er mellem 60 og 69, udskriv "4".
• Hvis karakteren er mellem 50 og 59, udskriv "02".
• Hvis karakteren er under 50, udskriv "00"
*/

let graden = 90; // Skift værdien for at teste med andre grader

if (graden >= 90) {
    console.log("12");
} else if (graden >= 80) {
    console.log("10");
} else if (graden >= 70) {
    console.log("7");
} else if (graden >= 60) {
    console.log("4");
} else if (graden >= 50) {
    console.log("02");
} else {
    console.log("00");
}


// OPGAVE 4 
// giv anbefalinger baseret på temperatur. 
/* 
His temperaturen er under 0 grader, udskriv "Tag en varm jakke pá".
His temperaturen er mellem 0 og 15 grader, udskriv "Tag en let jakke pả".
His temperaturen er over 15 grader, udskriv "Ingen jakke nedvendig".
*/ 


let temp = -1;

if (temp < 0) {
    console.log("Tag en varm jakke på");
} else if (temp > 0 && temp < 15){
    console.log("Tag en let jakke på");
} else {
    console.log("Ingen jakke nødvendig");
}


// OPGAVE 5 
/*
Hvis personen er 18 ar eller aldre, udskriv "Adgang tilladt".
Hvis personen er under 18, udskriv "Adgang nagtet".
*/

let alder = 18;

if (alder < 18) {
    console.log("Adgang nægtet")
} else {
    console.log("Adgang tilladt")
}


// OPGAVE 6 
// UDSKRIV DET STØRSTE AF 2 TAL 

let talx = 10; 
let taly = 12; 

if (talx > taly) {
    console.log(talx)
} else {
    console.log(taly)
}

// OPGAVE 7 
// tjek om login passer med password 
let password = "fisk"
let login = "fisk"

if (password === login) {
    console.log("Adgang givet")
} else {
    console.log("Womp Womp")
}


// OPGAVE 8 
// tjek om det er skudår
// skudår = år der kan deles med 4, men ikke med 100, medmindre den kan deles med 400. 

let aar = 2024; // Skift værdien for at teste med andre år

if ((aar % 4 === 0 && aar % 100 !== 0) || (aar % 400 === 0)) {
    console.log(aar + " er et skudår.");
} else {
    console.log(aar + " er ikke et skudår.");
}

