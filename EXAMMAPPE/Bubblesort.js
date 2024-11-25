// BUBBLESORT ALGORITMEN 
// Skriv en funktion der kan bytte på placering a 2 værdier i et array
function byt (array,i,j) { // vi ville gerne bytte rundt på position i og j, i et givet array 
    tempVar = array[i]; 
    array[i] = array[j];
    array[j] = tempVar;
}

/*let a = [2,1,3]; 
console.log(a);
byt(a,0,1); // vi bytter på position 0 og 1, som er "2" og "1" i arrayet a
console.log(a)*/

// skriv en funktion der sortere arrayet, og samtidig skal du holde styr på antallet af sammenligninger arrayet foretager så man kan holde øje med effektiviteten 
// DET SKAL SIGES AT DEN FUNKTION EFTER DEN HER ER DEN MEST OPTIMALE, DEN HER ER IKKE LIGESÅ OPTIMAL    
function bubblesort1(array) {

    counterCompare = 0; // tæller antallet af gange funktionen sammeligner tal for at tjekke effektivitet

    for (let i = 0; i < array.length; i++) { // antallet af gange vi gennemgår arrayet 
        for (let j = 0; j < array.length - 1; j++) { // j holder styr på hvilken tal / placering vi er på lige nu 
            if (array[j] > array[j + 1]){ // hvis tallet foran er større så byt 
                byt(array, j, j + 1); // byt funktion fra tidligere 
                counterCompare++; // ligemeget hvad der sker er dette en sammenligning, så vi tæller +1 
            } else { // hvis tallet ikke byttes er det stadig en sammenligning så vi tæller +1 
                counterCompare++; // ligemeget hvad der sker er dette en sammenligning, så vi tæller +1 
            }
        }
    }

    console.log(array)
    console.log(counterCompare)
}


let daf = [5,4,2,1,3];
bubblesort1(daf);


// skriv en funktion der tager udgangspunkt i den funktion du har, men du skal optimere. 
// Den funktion du har lavet, laver unødvendige sammenligninger med tal der allerede er på deres rigtige plads. 
// Når byt funktionen er kørt igennem hele arrayet, er det største tal allerede placere til sidst
// det betyder for hver gang vi kører igennem arrayet at vi ikke behøver at sammenligne det sidste tal. 
// altså den længde vi skal tjekke bliver forkortet med 1 for hver gang loopet kører. 

function bubblesort2(array) {

    let n = array.length; // variabel til at holde styr på længden 
    let compareCounter = 0; 

    for (let i = 0; i < n - 1; i++) { // Ydre løkke: antal iterationer, altså vi gennemgår arrayet antallet af gange der tilsvarer længden af arrayet. 
        for (let j = 0; j < n - 1 - i; j++) { // Indre løkke: sammenlign og byt
            if (array[j] > array[j + 1]) {
                byt(array, j, j + 1); // Byt værdier, hvis de er i forkert rækkefølge
                compareCounter++; 
            } 
        }
    }

    console.log(array)
    console.log(compareCounter)
}

let a = [5,4,3,2,1];
let b = [5,1,2,3,4];

bubblesort2(a)
bubblesort2(b)

