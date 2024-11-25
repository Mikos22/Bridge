// MODUL 5 I PROG, HERUNDER HAR VI PRIMÆRT OM ARRAYS. 


//OPG 1 Opret array med forskellige tal,test indexOf og lastindexOf
enTilTi = [1,2,3,4,5,2,1,3,4,5];

// indexOf finder indexet(altså placering) af tallet 3, 
// det printer kun for det første tal den finder. 
// den printer 2 i dette tilfælde 
console.log(enTilTi.indexOf(3))

//Det finder det sidste observation af "3" i arrayet. 
//Printer placeringen for det tal
//I dette tilfælde 7 
console.log(enTilTi.lastIndexOf(3))

//Hvis argumentet ikke er i arrayet returneres der -1
//Det er fordi arrays bliver indexeret fra 0 
console.log(enTilTi.indexOf(100))

// Eksempel 1: Normal brug af slice() med start- og slutindeks
// Ekstrakter elementer fra indeks 1 til 4 (men inkluderer ikke elementet ved indeks 4)
let slicedArr1 = enTilTi.slice(1, 4);
console.log(slicedArr1);  // Output: [2, 3, 4]

// Eksempel 2: Slice() med kun startindeks (slutindeks er implicit arrayets slutning)
// Starter ved indeks 5 og udtrækker resten af elementerne
let slicedArr2 = enTilTi.slice(5);
console.log(slicedArr2);  // Output: [2, 1, 3, 4, 5]

// Eksempel 3: Startindeks er større end arrayets længde
// Da der ikke er nogen elementer efter indeks 20, returneres en tom array
let slicedArr3 = enTilTi.slice(20);
console.log(slicedArr3);  // Output: []

// Eksempel 4: Slutindeks er større end arrayets længde
// Udtrækker elementer fra startindeks 2 til arrayets slutning, da slutindeks 15 er uden for rækkevidde
let slicedArr4 = enTilTi.slice(2, 15);
console.log(slicedArr4);  // Output: [3, 4, 5, 2, 1, 3, 4, 5]

// Eksempel 5: Slice() uden parametre
// Returnerer en kopi af hele arrayet
let slicedArr5 = enTilTi.slice();
console.log(slicedArr5);  // Output: [1, 2, 3, 4, 5, 2, 1, 3, 4, 5]

// Eksempel 6: Slice() med negative indekser
// Negative tal tæller fra slutningen af arrayet: -5 betyder start ved det 5. sidste element
let slicedArr6 = enTilTi.slice(-5, -1);
console.log(slicedArr6);  // Output: [2, 1, 3, 4]




// OPG 2 funktion der sætter en kunde i kø 

//Vi starter med at lave en tom kø, så vi kan smide nogle kunder i 

let Kø =[]

//Laver en funktion med argumenterne Kø og kunde, 
//Det sker så vi fortæller funktionen hvilket array den nye kunde skal placeres i. 
kundeTilKø = function(Kø,kunde){
    Kø.push(kunde);
    console.log(`${kunde} er nu sat i kø. Aktuel kø: ${Kø}`);
}
kundeTilKø(Kø,"fisk")
kundeTilKø(Kø,"OST")



// OPG 3 funktion der returnere den første kunde i kø (FIFO). 

// igen starter vi med at oprette et array til at holde styr på vores kunder. 
// Vi antager i dette tilfælde at der allerede er kunder i kø
let Kø = ["kunde 3", "ngar"]

//Vi navngiver vores funktion og giver argumentet "Kø" fordi det er placeringen for den nye kunde. 
førsteKunde = function(Kø){
    //Siden vi kun skal vise den førstekunde kan vi console.log + .shift for at finden den første kunde
    console.log(Kø.shift())
}
//Vi kører herefter funktionen, 
førsteKunde(Kø);



// OPG 4 funktion der retunere indexet i KØ, for kunde med bestemt navn

//Her kan vi både lave en if sætning, men også en switch statment. 
let Kø = ["en","to","tre","fire"]; 

//vi giver vores funktion 2 variable, som er arrayet og elementet der skal placeres i arrayet
kundeIndex = function(Kø,kundeNavn){
    switch (kundeNavn) {
        // når man skriver case behøver man ikke direkte sammenligne det med værdien. 
        // man kan bare skrive værdien man gerne ville sammenligne og det gør det auto. 
        case "en":
            console.log(Kø.indexOf("en"));
            break;
        case "to":
            console.log(Kø.indexOf("to"));
            break;
        case "tre":
            console.log(Kø.indexOf("tre"));
            break;
        case "fire":
            console.log(Kø.indexOf("fire"));
            break;
    }
    
}
kundeIndex(Kø,"en")
kundeIndex(Kø,"to")
kundeIndex(Kø,"tre")
kundeIndex(Kø,"fire")




// OPG 5 Find navn og adresse på kunde 1 vha. destrukturering. 

// Vi får givet nogle værdier for kunde1
let kunde1 = {
    navn: "Kurt", 
    adresse: "Havnegade 25", 
    email:   "kurt@kurtmail.com",
    username: "kurt23", 
    password: "1234", 
    alder: 23, 
    by: "København",
    postnummer: 1000
};

// Her pakkes navn og adresse ud fra objektet kunde1 og tildeles variablerne navn og adresse.
let {navn,adresse} = kunde1; 
console.log(navn); 
console.log(adresse); 



// OPG 6 funktion der printer hele adressen ud og giver navnet 

//vi får givet de samme værdier
let kunde1 = {
    navn: "Kurt", 
    adresse: "Havnegade 25", 
    email:   "kurt@kurtmail.com",
    username: "kurt23", 
    password: "1234", 
    alder: 23, 
    by: "København",
    postnummer: 1000
};

// Vi laver en funktion der viser os de informationer vi genre ville have 
// vi skriver ned de infoer vi gerne ville have i argumentet for funktionen, vigtigti at det er {}
visKundeInfo = function({navn, adresse, by, postnummer}){
    // logger med strenge variablen navnene. 
    console.log("Navn: " + navn);
    console.log("Adresse: " + adresse + ", " + by + ", " + postnummer);
}
// ved at skrive variabel navnet i funktionen finder den selv de tilsvarende værdier. 
visKundeInfo(kunde1);



// OPG 7 Lav en funktion der summer første og andet element i arrayet sammen og printer summen. 

// Vi får givet værdierne for vores array
const kontoUdtog = [500, 2500, 43595, 6960, 57395, 3932, 2647, 245];

// I vores funktion bruger vi "first" og "second", da JS godt kan regne ud at det er første og andet element i arrayet 
// Ellers kunne man have brugt kontoUdtog[0] og [1], den brugte metode er dog nemmere/kortere. 
function beregnSum([first, second]) {
    const sum = first + second
    console.log(sum)
}
beregnSum(kontoUdtog);



// OPG 8 for et et nyt array skal du lægge de 2 værdier sammen og printe i konsollen. 
// her får vi vores nested arrays
const kontoudtog2 = [[500, 2500], [43595, 6960], [57395, 3932], [2647, 245]];

// i opgaven står der man skal lave et for loop
// Vi sætter loopet til at køre indtil længden af arrayetm, så den ikke kører efter færddigørelsen af arrayet. 
for (let i = 0; i < kontoudtog2.length; i++){
    // Vi finder det nummer indre array med vores [i], hvor vi derefter lægger tallene sammen i det array. 
    let [first, second] = kontoudtog2[i];
    //når koden ved hvad first og second er for arrayet lægger vi det sammen i variablen "sum". 
    let sum = first + second 
    // For at logge det skal vi huske at sige i + 1 for array navnet, da arrays er indexeret fra 0
    // så konsollen siger array - 1,2,3,4 i stedet for array - 0,1,2,3
    console.log("Summen af indholdet i array " + (i + 1) + ": " + sum);
}



/* 
OPG 9 Lav en funktion som kan tage et indkøb som dette som parameter.
- Funktionen skal kunne, regne den samlede pris pa alle varer.
- Fratrakke rabaten
- Printe den samlede pris samt den samlede rabat til konsolen.
*/

// vi får givet vores værdier 
let indkøb = {
    rabatIProcent: 10, 
    computere: 30000, 
    headsets: 2500, 
    dockingStationer: 55000
    }

// Vi går udfra at vores indkøb har fast rabat, og derfor er kun variable for varerne. 
samletKost = function(computerAntal, headsetAntal, dockAntal) {
    // vi definere lokalt de 2 variable til at holde styr på prisen/ det vi skal printe i konsollen
    let samletPrisUdenRabat = 0; 
    let samletPrisMedRabat = 0; 
    // vi ganger antal med pris for alle varer for at finde den samlede pris. 
    // Vi bruger variable navne i stedet for værdier, så kan vi ændre på variablene i "indkøb"
    samletPrisUdenRabat = computerAntal * indkøb.computere + headsetAntal * indkøb.headsets + dockAntal * indkøb.dockingStationer; 
    // Fandt ud af man godt kunne bruge komman for at display en variabel og ikke kun "+"
    console.log("Den samlede pris på alle varer (Uden rabat): ", samletPrisUdenRabat);

    // samme her hvor vi regner procentuelt rabatten og finder prisen med rabat. 
    samletPrisMedRabat = samletPrisUdenRabat * (1 - (indkøb.rabatIProcent / 100)); 
    // printer prisen med rabat
    console.log("Den samlede pris på alle varer (Med rabat): ", samletPrisMedRabat);
}; 
// funktion hvor vi skriver hvor mange af hver varer vi har købt. 
samletKost(1,1,1);


