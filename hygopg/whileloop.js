// OPGAVE 1 
// skriv en while loop der udskriver alle tallene fra 5 til 15 

/*
// Initialiser variablen
let tal = 5;

// While-loop
while (tal <= 15) {
    console.log(tal);
    tal++; // Øg tal med 1
}
*/

// OPGAVE 2 
// Udskriv alle de udlige tal fra 1 til 25 

/*
let tal1 = 1; 

while (tal1 <= 25) { // Brug tal1 i betingelsen
    console.log(tal1); // Udskriv det nuværende tal
    tal1 += 2; // Øg tallet med 2
}

*/

// OPGAVE 3 
// summe de lige tal 

/*
let tal2 = 0; 
let sum = 0;
while (tal2 < 50) {
    tal2 += 2 
    sum += tal2 
    console.log("tal2", tal2)
    console.log("sum", sum)
}


*/ 

// OPGAVE 4 
// udskriv tallen fra 20 til 5 i faldende rækkefølge 

/*
let tal3 = 20 
while (tal3 > 5) {
    console.log(tal3);
    tal3--;
    console.log(tal3)
}
*/

// OPGAVE 5 
// beren produktet af tallene fra 1 til 10 

/*
let tal4 = 1; 
let produkt = 1;
while (tal4 <= 10) {
    produkt *= tal4;
    tal4++;
    console.log(produkt)
}
*/

// OPGAVE 6 
// BEREGN MATEMATISK FAKULTET, ALTSÅ 5! = 5*4*3*2*1

/*
let tal5 = 6; // det tal vi gerne ville beregne fakultet
let fakultet = 1;

while (tal5 > 0 ) {
    fakultet *= tal5;
    tal5--;
    console.log(fakultet)
    }

*/ 

// OPGAVE 7 
// udskriv gangetabellen for 7 op til 7*10

/*
let tabelVærdi = 1; 
let valgteTal = 7; 

while (tabelVærdi <= 10) {
    sum = tabelVærdi * valgteTal;
    console.log(sum);
    tabelVærdi++;
}
*/ 

// OPGAVE 8 
// Skriv fibonacci indtil de 10 første tal, man plusser 2 sidste tal for at få næste tal 

/*
let fib = 0;
let startVærdi = 0; // Første tal i Fibonacci
let sum1 = 1; // Andet tal i Fibonacci

console.log(startVærdi); // Udskriv det første tal (0)
console.log(sum1); // Udskriv det andet tal (1)

while (fib < 8) { // Vi har allerede udskrevet de første 2, så gentag 8 gange
    let sum = startVærdi + sum1; // Beregn næste Fibonacci-tal
    console.log(sum); // Udskriv det

    // Opdater værdierne for næste iteration
    startVærdi = sum1;
    sum1 = sum;

    fib++; // Inkrementér tælleren
}

*/

// OPGAVE 9 
// Find det mindste tal i arrayet

// ideen er at antage at det mindste tal er det første tal og sammenligne det tal med resten af arrayet 
// Hvis vi finder et tal der er mindre end den første, skifter vi det ud, indtil vi har været igennem hele arrayet
// det garantere os at vi ender med det mindste tal. 

/*
testArray1 = [12,5,20,8,3,2] 
let index = 0; 
minNUmber = testArray1[0]

while (index < testArray1.length) {
    if (minNUmber > testArray1[index]){ // hvis vi finder et mindre tal så skifter vi det 
        minNUmber = testArray1[index]; 
    }
    index++;
}

console.log(minNUmber)
*/


// OPGAVE 10 
// TÆL KONSONANTER 
let ord = "test";
let vokalListe = ["a", "e", "u", "i", "o"];
let indexVokal = 0;
let indexOrd = 0;
let antalVokal = 0;

while (indexOrd < ord.length) {
    indexVokal = 0; // Nulstil indexVokal for hver ny karakter i ordet
    while (indexVokal < vokalListe.length) {
        if (ord[indexOrd] === vokalListe[indexVokal]) {
            antalVokal++;
            break; // Ingen grund til at tjekke resten af vokallisten
        }
        indexVokal++;
    }
    indexOrd++;
}

let antalKonsonanter = ord.length - antalVokal;

console.log("Antal konsonanter:", antalKonsonanter);
console.log("Antal vokaler:", antalVokal);

