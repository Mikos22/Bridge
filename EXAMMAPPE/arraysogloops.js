// vi antager at vi har en pose med et antal kugler (max 10) i forskellige farver; blå, rød, grøn, gul.....

// delopgave 1.1
// vi skal først skrive en funktionm der returnerer et tilfældigt element fra en given liste.
/*
const liste = ["blå", "rød", "grøn", "gul","blå", "rød", "grøn", "gul","rød","rød"];

function tilfældigtElement(array) {
    valgtKugleIndex = Math.floor(Math.random() * array.length); 
    return array[valgtKugleIndex]
}

console.log(tilfældigtElement(liste))

// Delopgave 1.2 
// Skriv så en funktion der returnerer et array af n tilfældige elementer fra listen., f.eks. 5:
// Så vi skal lave en funktion, som laver en tilfældig pose af kugler udfra vores array. 

const liste1 = ["blå", "rød", "grøn", "gul","blå", "rød", "grøn", "gul","rød","rød"];

function nyPose(array,antalKuglerIPose) {
    let pose = [];
    for (let i = 0; i < antalKuglerIPose; i++ ){
        valgtKugleIndex1 = Math.floor(Math.random() * array.length); 
            pose.push(array[valgtKugleIndex1])
    }
    return pose; 
}

console.log(nyPose(liste1,5))


//Delopgave 1.3 
// Modificere nu forrige funktion så antallet af kugler i posen også er tilfældigt, max 10. 
// Vi skal ændrer på vores funktion fra opgave 1.2, så anmtallet af kugler er tilfældigt, max 10 


const liste2 = ["blå", "rød", "grøn", "gul"]; // i stedet for at have et langt array med farver, kan vi vælge de farver i posen, også generer det antal tilfældigt. 

function nyPose(array) {
    let pose = [];
    let antalKuglerRandom = Math.floor(Math.random() * 10) 
    for (let i = 0; i < antalKuglerRandom; i++ ){
        valgtKugleIndex1 = Math.floor(Math.random() * array.length); 
            pose.push(array[valgtKugleIndex1])
    }
    return pose; // Posen kan godt være tom når den returneres. 
}


let testArray = nyPose(liste2);
console.log(nyPose(liste2))

// Delopgave 1.4 
// Skriv nu en ny funktion der for en given pose tæller antallet af blå kugler, f.eks:
// vi ville gerne bruge forrige opgaves funktion til at lave et tilføldig pose, også bruge den funktion vi skriver nu til at tælle antallet af blå 

const liste4 = [ "rød", "grøn", "gul","blå","blå","blå"];

function tælBlå(array) {
    let blåCounter = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] === 'blå') {
            blåCounter++;
        } 
    }
    console.log(blåCounter);
}

tælBlå(liste4)


// Delopgave 1.5 
// Skriv nu en funktion, der returnerer et array med 10 tilfældige poser. 


const liste5 = [ "rød", "grøn", "gul","blå"];

function poser10(array,antalposer) {
    for (let i = 0; i < antalposer; i++){ // vi laver et loop for antallet af poser vi gerne ville have 
        tomtarray = []; // laver et tomt array, hvor vi kan indsætte de kugler vi får 
        countkugler = Math.floor(Math.random() * 10);// max 10 kugler per pose 
        for (let j = 0; j < countkugler; j++){ // laver en loop for at pushe kuglerne
            valgtKugleIndex2 = Math.floor(Math.random() * array.length); // finder en tilfældig kugle 
            tomtarray.push(array[valgtKugleIndex2]) // pusher det antal gange som for loopet kalder på 
       }
       console.log("Dette er en pose" , tomtarray) // logger når en kugle er færdig. 
    }
}

poser10(liste5,10)


// Delopgave 1.6 
// Skriv til sidst en funktion, der tæller summen af alle de blå kugler i alle poserne
// ideen er her at bruge den funktion vi lige har skrevet i opgave 1.5, hvor vi pusher listen af arrays i et større samlet array
// Vi kan derefter gå igennem det array, også tjek for om der i det spot er "blå" eller ej. 


const liste6 = [ "rød", "grøn", "gul","blå"];

function tælBlåAlle(array,antalposer) {
    allePoser = [];
    let blåCounter = 0;
    for (let i = 0; i < antalposer; i++){ // vi laver et loop for antallet af poser vi gerne ville have 
        tomtarray = []; // laver et tomt array, hvor vi kan indsætte de kugler vi får 
        countkugler = Math.floor(Math.random() * 10);// max 10 kugler per pose 
        for (let j = 0; j < countkugler; j++){ // laver en loop for at pushe kuglerne
            valgtKugleIndex2 = Math.floor(Math.random() * array.length); // finder en tilfældig kugle 
            tomtarray.push(array[valgtKugleIndex2]) // pusher det antal gange som for loopet kalder på 
            if (array[valgtKugleIndex2] === "blå"){
                blåCounter++;
            }
        }
       allePoser.push(tomtarray)
    }
    console.log(blåCounter)
    console.log(allePoser)
}

tælBlåAlle(liste6,10)
*/

// 2 Ejendoms-Array med arrays

/* 2.1 Skriv en funktion, indlæs ejendom, der spørger brugeren med en prompt om en værdi for hver af felterne og
putter dem ind på rette plads i en array-variabel ved navn "ejendom". Sørg at fortolke tal som tal og strenge
som strenge*/

/*
    function indlæsEjendom() {
    let ejendom = [];

    // Indlæs adresse
    ejendom[0] = prompt("Indtast adresse");
    if (!ejendom[0] || typeof ejendom[0] !== "string" ) { // Tjekker at feltet indeholder bogstaver
        alert("Du skal indtaste en gyldig adresse");
        return; // Afslutter funktionen uden at gå videre
        // Vi bruger ikke throw error fordi den stopper hele funktionen, og vi ville gerne haver at useren skal se noget
    }

    // Indlæs arealet
    ejendom[1] = Number(prompt("Indtast arealet i kvm")); // hvis det ikke er et tal der bliver tastet, bliver det false og dermed ikke kørt. 
    if (isNaN(ejendom[1]) || ejendom[1] <= 0) { // Tjekker at det er et positivt tal
        alert("Du skal indtaste et gyldigt tal for arealet");
        return; // Afslutter funktionen uden at gå videre
    }

    // Indlæs antal etager
    ejendom[2] = Number(prompt("Indtast antal etager"));
    if (isNaN(ejendom[2]) || ejendom[2] <= 0) { // Tjekker at det er et positivt tal
        alert("Du skal indtaste et gyldigt tal for antal etager");
        return; // Afslutter funktionen uden at gå videre
    }

    ejendom[3] = Number(prompt("Indtast antal værelser"));
    if (isNaN(ejendom[3]) || ejendom[3] <= 0) { // Tjekker at det er et positivt tal
        alert("Du skal indtaste et gyldigt tal for antal værelser");
        return; // Afslutter funktionen uden at gå videre
    }

    ejendom[4] = prompt("Er der havudsigt?")
    // Man burde tjek for boolean værdier (true/false), men det ikke det opgaven fokusere på. så vi laver en mulig fejlkastning
    if (!ejendom[0] || typeof ejendom[0] !== "string") { // Tjekker at feltet indeholder bogstaver
        alert("Du skal indtaste ja eller nej");
        return; // Afslutter funktionen uden at gå videre
    }

    ejendom[5] = Number(prompt("Hvad er prisen?"));
    if (isNaN(ejendom[5]) || ejendom[5] <= 0) { // Tjekker at det er et positivt tal
        alert("Du skal indtaste et gyldigt tal for antal etager");
        return; // Afslutter funktionen uden at gå videre
    }

    console.log("Ejendom indlæst:", ejendom);
}
*/
    // indlæsEjendom(); Vi sætter denne som kommentarer fordi vi kalder på funktionen længere nede



// 2.2 
/*Vi skal naturligvis have flere ejendomme ind i systemet i et nyt array, som vi kalder properties Skriv en ny
version der pakker logikken fra ovenstående ind i en while-løkke. Efter hvert enkelt gennemløb af while-
løkken skal der spørges med en prompt brugeren ønsker at forsætte eller ej. Hvis ikke skal while-løkken
stoppe der.

// Opret array til at opbevare flere ejendomme

let properties = [];

function indlæsEjendom() {
    let ejendom = [];

    // Indlæs adresse
    ejendom[0] = prompt("Indtast adresse");
    if (!ejendom[0] || typeof ejendom[0] !== "string") { 
        alert("Du skal indtaste en gyldig adresse");
        return; // Afslutter funktionen, hvis adresse ikke er gyldig
    }

    // Indlæs arealet
    ejendom[1] = Number(prompt("Indtast arealet i kvm")); // læg mærke til at jeg skirver Number inden prompt
    if (isNaN(ejendom[1]) || ejendom[1] <= 0) { 
        alert("Du skal indtaste et gyldigt tal for arealet");
        return; // Afslutter funktionen, hvis areal ikke er gyldigt
    }

    // Indlæs antal etager
    ejendom[2] = Number(prompt("Indtast antal etager"));
    if (isNaN(ejendom[2]) || ejendom[2] <= 0) { 
        alert("Du skal indtaste et gyldigt tal for antal etager");
        return; // Afslutter funktionen, hvis antal etager ikke er gyldigt
    }

    // Indlæs antal værelser
    ejendom[3] = Number(prompt("Indtast antal værelser"));
    if (isNaN(ejendom[3]) || ejendom[3] <= 0) { 
        alert("Du skal indtaste et gyldigt tal for antal værelser");
        return; // Afslutter funktionen, hvis antal værelser ikke er gyldigt
    }

    // Indlæs om der er havudsigt (skal være ja/nej)
    ejendom[4] = prompt("Er der havudsigt? (ja/nej)").toLowerCase();
    if (ejendom[4] !== "ja" && ejendom[4] !== "nej") { 
        alert("Du skal indtaste 'ja' eller 'nej' for havudsigt");
        return; // Afslutter funktionen, hvis svaret ikke er 'ja' eller 'nej'
    }

    // Indlæs pris
    ejendom[5] = Number(prompt("Hvad er prisen?"));
    if (isNaN(ejendom[5]) || ejendom[5] <= 0) { 
        alert("Du skal indtaste et gyldigt tal for prisen");
        return; // Afslutter funktionen, hvis prisen ikke er gyldig
    }

    // Tilføj ejendom til properties arrayet
    properties.push(ejendom);

    console.log("Ejendom indlæst:", ejendom);
}

let brugersvar = "ja";  // Start med at sætte brugersvar til "ja" for at starte while-løkken
while (brugersvar === "ja") {
    indlæsEjendom();  // Læs ejendom ind
    brugersvar = prompt("Ønsker du at fortsætte, ja eller nej?").toLowerCase();  // Spørg om fortsættelse
}

// Når brugeren har afsluttet, vis alle ejendommene
console.log("Alle ejendomme:", properties);  // Udskriv alle indlæste ejendomme


// 2.3 
// Skrive en funktion , der hente priserne for hver ejendom og beregner gennemsnittet 

function hentPris(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i][5]
    }
    let gennemsnit = sum / arr.length
    console.log("Gennemsnittet er : ", gennemsnit)
}

hentPris(properties)
*/

// 3. lav samme opgave som før, men nu skal ejendommene oprettes som objekter, altså med navngivne indicer, istedet for et almindeligt array. 

/*
{ 
    navn: "Strandvejen 255",
    areal: 300,
    etager: 3,
    værelser: 12, 
    havudsigt : "ja",
    pris: 2000000
}


let test = { // sådan definere man et objekt. 
    navn: "Strandvejen 255",
    areal: 300,
    etager: 3,
    værelser: 12, 
    havudsigt : "ja",
    pris: 2000000
}
*/


let alleHuse = [];

let fortsæt = true; 
while (fortsæt === true) { // hvis fortsæt er falsk, kører den ikke 
    let navn = prompt("Skriv adresse:");
    let areal = Number(prompt("Skriv areal (m²):")); // VIGTIGT NÅR MAN TAGER IMOD TAL FRA ET PROMPOT AT MAN SKAL SURROUND MED NUMBER, FORDI ELLERS TAGER DEN SOM EN STRENG
    let etager = Number(prompt("Skriv antal etager:"));
    let værelser = Number(prompt("Skriv antal værelser:"));
    let havudsigt = prompt("Havudsigt? (ja/nej):"); // HER BRUGER VI IKKE NUMBER FORDI DET IKKE ER ET TAL VI MODTAGER 
    let pris = Number(prompt("Hvor meget koster huset?"));

    let husData = {
        navn: navn,
        areal: areal,
        etager: etager,
        værelser: værelser,
        havudsigt: havudsigt,
        pris: pris
    };

    alleHuse.push(husData); // Vi modtager alle husdata og sender det til allehuse. 

    fortsæt = confirm("Vil du fortsætte?"); // cofirm er en smart funktion man kan bruge istedet for alerts eller noget andet, hvor du giver brugeren mulighed for "ok" eller "annuler"
    // her ville brugeren vælge annuler eller ok, hvor annuler er falsk og ok er true. 
    // Beregn gennemsnittet af huspriser
    let sum = 0;
    for (let i = 0; i < alleHuse.length; i++) {
        sum += alleHuse[i].pris; // vi får adgang til et hus med [i], hvor bagefter tager fat i prisen for netop det hus. 
    }
    gennemsnitHusPris = sum / alleHuse.length;
}

// Udskriv resultaterne
console.log(alleHuse);
console.log("Gennemsnitlig huspris: ", gennemsnitHusPris);






