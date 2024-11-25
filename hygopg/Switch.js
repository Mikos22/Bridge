
// OPGAVE 1 
// Udskriv den tilsvarende besked i forhold til dagen på ugen. 
let dag = "mandag"; // Skift værdien for at teste med andre dage

switch (dag) {
    case "mandag":
        console.log("Start på ugen!");
        break;
    case "tirsdag":
        console.log("Anden arbejdsdag.");
        break;
    case "onsdag":
        console.log("Halvvejs igennem ugen.");
        break;
    case "torsdag":
        console.log("Snart weekend.");
        break;
    case "fredag":
        console.log("Det er fredag! Weekend er næsten her.");
        break;
    case "lørdag":
        console.log("Tid til afslapning.");
        break;
    case "søndag":
        console.log("Forberedelse til den nye uge.");
        break;
    default:
        console.log("SMILEEEEE");
        break;
}

// OPGAVE 2 
// Udskriv måned navn i forhold til nummer 

let maaned = 1; // Skift værdien for at teste med andre numre (1 til 12)

switch (maaned) {
    case 1:
        console.log("Januar");
        break;
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("Marts");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Maj");
        break;
    case 6:
        console.log("Juni");
        break;
    case 7:
        console.log("Juli");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("HVILKEN MÅNED HAR 28 DAGE? DEM ALLE LOL (GO GET A LIFE BRO");
        break;
}

// OPGAVE 3 
// Switch statments for karakter 

let karakter = "12"; // Skift værdien for at teste med andre karakterer

switch (karakter) {
    case "12":
        console.log("Lets goooo!!");
        break;
    case "10":
        console.log("Godt gået!");
        break;
    case "7":
        console.log("Flot arbejde!");
        break;
    case "4":
        console.log("Okay, men kan gøre det bedre.");
        break;
    case "02":
        console.log("Du er tættere på, men stadig ikke bestået.");
        break;
    case "00":
        console.log("Ikke bestået.");
        break;
    case "-3":
        console.log("Damn, vi tager den til re!.");
        break;
    default:
        console.log("Ugyldig karakter.");
        break;
}

// OPGAVE 4 
// Du tager imod 2 tal og en opreator (+, -, *, / ), udregn regnestykket 

let tal1 = 0; 
let tal2 = 1; 
let operator = "fisk"

switch (operator) {
    case "+":
        console.log(tal1 + tal2)
        break;

    case "-":
        console.log(tal1 - tal2)
        break;

    case "*":
        console.log(tal1 * tal2)
        break;

    case "/":
        console.log(tal1 / tal2)
        break;

    default: console.log("Damn bro nice eyes <3 &&& AsExYo(Bo)ArHe, bitch if u reading this write to me rn IM FUKIN SERIOUS ")
        break;
}

// OPGAVE 5 
// Brug switch til at finde ud af om et tal er lige eller ulige

for (let i = 0; i < 25; i++) {
    switch (i % 2) { // den statement du sammenligner skal være konstant og kan ikke være en direkte variabel som "i"
        case 0:
            console.log("lige");
            break;
        case 1:
            console.log("ulige");
            break;
        default:
            console.log("go drink water....");
            break;
    }
}

// OPGAVE 6 
/* 
Skriv et program, der beregner produktet af to tal og bruger et switch-statement til at udskrive en besked, 
afhangig af had produktet er:
• His produktet er 0, udskriv "Produket er nu".
• Hvis produktet er under 50, udskriv "Lavt produkt".
• Hvis produktet er mellem 50 og 100, udskriv "Mellemprodukt".
• Hvis produktet er over 100, udskriv "Hojt produkt".
*/ 

let tal10 = 5;
let tal11 = 10;

let produkt = tal10 * tal11;

switch (true) {
    case (produkt === 0):
        console.log("Produktet er nul");
        break;
    case (produkt < 50):
        console.log("Lavt produkt");
        break;
    case (produkt >= 50 && produkt <= 100):
        console.log("Mellemprodukt");
        break;
    default: console.log("har aldrig været ligeså locked in som nu, laver legit lortet hjemme hos min onkel. IM THE FUKIN GUEST NIGGA ")
        break;
}
