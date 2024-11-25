/*
let styrke = [5, 6, 7, 1, 3, 4, 1];
const styrkeLængde = styrke.length;

function insekt(styrke) {
    for (let i = 0; i < styrke.length - 1; i++) {
        if (styrke[i] < styrke[i + 1]) {
            styrke.splice(i, 1);  // Fjern det svagere insekt
            i--;  // Flyt indekset tilbage for at sammenligne det nye element
        }
    }
    let result = styrkeLængde - styrke.length;
    return result; 
}

console.log(insekt(styrke));  // Output: Antallet af insekter, der bliver spist


function flet(a, b) {
    let flettet = [];  // Tom liste til at gemme det sorterede resultat

    // Sammenlign elementer fra begge arrays så længe begge ikke er tomme
    while (a.length > 0 && b.length > 0) {
        if (a[0] <= b[0]) {
            // Hvis første element i a er mindre eller lig med b's første element
            flettet.push(a.shift());  // Fjern fra a og tilføj til flettet
        } else {
            // Hvis b's første element er mindre
            flettet.push(b.shift());  // Fjern fra b og tilføj til flettet
        }
    }

    // Når vi er færdige med den ene liste, tilføj resten af den anden
    if (a.length === 0) {
        flettet = flettet.concat(b);  // Tilføj alle resterende elementer fra b
    } else if (b.length === 0) {
        flettet = flettet.concat(a);  // Tilføj alle resterende elementer fra a
    }

    return flettet;  // Returner den flettede og sorterede liste
}

let a = [2,3,3,6,6];
let b = [1,1,2,7];
console.log(" a: ["+a.toString()+"]");
console.log(" b: ["+b.toString()+"]");
let c = flet(a,b);
console.log("flettet: ["+c.toString()+"]")
*/

let bræt1 = [null,null,null,null,null,null,null,null,null];
let tomme1 = [0,1,2,3,4,5,6,7,8];
let bræt2 = ["X","X","O","O","X","O","X","O",null];
let tomme2 = [8];

function vælgFelt(bræt, tommeFelter){
    let nytFelt = Number(prompt("Skriv nummeret på et tomt felt"));
    if (nytFelt > 8||isNaN(nytFelt)||nytFelt < 0){
        throw new Error("Input er ugyldigt")
    }
    tommeFelter.splice(tommeFelter.indexOf(nytFelt),1);
    return nytFelt;
}
function sætMærke(spiller, bræt, tommeFelter){
    let felt = vælgFelt(bræt, tommeFelter);
    bræt[felt] = spiller;
}
function tagTur(spiller, bræt, tommeFelter){
    sætMærke(spiller, bræt, tommeFelter);
    console.log("spillet fortsætter ...");
}




