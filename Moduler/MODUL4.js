// OPGAVE 4.1 Arrays 
// 1. Opret arrayet 'kundeliste' med de angivne elementer
let kundeliste = ["A.C. Hansen", "Peters cykler", "De Franske Oste"];

// 2. Udskriv de tre elementer hver for sig i konsollen med de rigtige indicer
console.log("Kunde 1:", kundeliste[0]);
console.log("Kunde 2:", kundeliste[1]);
console.log("Kunde 3:", kundeliste[2]);

// 3. Ændr det andet element til "Peters Cykler"
kundeliste[1] = "Peters Cykler";

// 4. Brug 'push' til at tilføje en ny kunde bag i kundelisten
kundeliste.push("Pro SkiShop");

// Check længden af listen
console.log("Længden af listen efter tilføjelse:", kundeliste.length);

// 5. Brug 'shift' til at få fat i første kunde, skriv den ud i konsollen, og  indtil listen er tom
while (kundeliste.length > 0) {
  let firstCustomer = kundeliste.shift(); // Fjern første kunde
  console.log("Fjernet kunde:", firstCustomer); // Udskriv fjernet kunde
  console.log("Længden af listen nu:", kundeliste.length); // Check længden
}
// 6. 
const kundeliste = ["A.C. Hansen", "Peters cykler", "De Franske Oste"];

behandlKunde = function (x){
    kundeliste.shift();

    while (kundeliste.length != 0){
        console.log("\n Behandler kunde: " + kundeliste.shift())
        console.log ("\n Kunder der mangler behandling: " + kundeliste.length);
}
console.log("\n Ingen kunder i kø");
}
behandlKunde(kundeliste);


// 7. 
function sætIKø(kundeListe, kundeNavn) {
    // 1. Sæt kundeNavn bag i listen ved hjælp af push()
    kundeListe.push(kundeNavn);
    
    // 2. Skriv i konsollen: "<kundenNavn> sat i kø."
    console.log(`${kundeNavn} sat i kø.`);
    
    // 3. Udskriv kundelisten
    console.log("Opdateret kundeliste:", kundeListe);
}

// Eksempel på brug:
let kundeliste = ["A.C. Hansen", "Peters Cykler", "De Franske Oste"];
sætIKø(kundeliste, "Pro SkiShop");


// 8. 
function modificerKunde(kundeListe, index, nyKunde) {
    // Tjek om index er inden for arrayets grænser
    if (index >= 0 && index < kundeListe.length) {
        // 1. Skriv "<gammel kunde> ændres til <nykunde>."
        console.log(`${kundeListe[index]} ændres til ${nyKunde}.`);
        
        // 2. Ændr værdien på plads nr <index> i kundeListe til nyKunde
        kundeListe[index] = nyKunde;
        
        // 3. Udskriv den opdaterede kundeliste
        console.log("Opdateret kundeliste:", kundeListe);
    } else {
        // 4. Hvis index peger uden for listen, skriv "forkert index."
        console.log("Forkert index.");
    }
}

// Eksempel på brug:
let kundeliste = ["A.C. Hansen", "Peters Cykler", "De Franske Oste"];
modificerKunde(kundeliste, 1, "Ny Peters Cykler");  // Ændrer element på index 1
modificerKunde(kundeliste, 3, "Ukendt Kunde");      // Forsøger at ændre element uden for rækkevidde


// OPGAVE 4.2 OBJEKTER

// 1. Opret kunde-objekter med attributter
let kunde1 = {
    navn: "A.C. Hansen",
    adresse: "Vesterbrogade 15",
    kontaktperson: "Anna Hansen",
    email: "ac.hansen@example.com",
    username: "achansen",
    password: "12345"
};

let kunde2 = {
    navn: "Peters Cykler",
    adresse: "Frederiksberg Allé 22",
    kontaktperson: "Peter Larsen",
    email: "peter@cykler.dk",
    username: "peter_cykler",
    password: "bikepass"
};

let kunde3 = {
    navn: "De Franske Oste",
    adresse: "Ostestræde 3",
    kontaktperson: "Jean Dupont",
    email: "jean@franskeoste.com",
    username: "ostelover",
    password: "cheese123"
};

// 2. Udskriv nogle af oplysningerne
console.log("Kunde2's email:", kunde2.email);
console.log("Kunde3's username og password:", kunde3.username, kunde3.password);

// 3. Ret i oplysningerne
// Skift kontaktperson for kunde1
kunde1.kontaktperson = "Lars Hansen";

// Skift username og password for kunde1
kunde1.username = "lars_hansen";
kunde1.password = "newpassword";

// 4. Slet en attribut (f.eks. slet email fra kunde2)
delete kunde2.email;
console.log("Kunde2 efter sletning af email:", kunde2);

// 5. Lav en funktion der modificerer en attribut
function modificerKunde(kundeObjekt, kundeAttribut, nyVærdi) {
    // Ændrer den angivne attribut til den nye værdi
    kundeObjekt[kundeAttribut] = nyVærdi;
    console.log(`${kundeAttribut} ændret til ${nyVærdi} for kunde ${kundeObjekt.navn}`);
}

// Eksempel på brug af modificerKunde-funktionen
modificerKunde(kunde1, 'adresse', 'Nålemagerstien 32');



// OPGAVE 4.3 ARRAYS OG OBJEKTER 



// 1. Funktion til at sætte et kundeobjekt bag i kundelisten
function sætKundeIKø2(kundeListe, kundeObjekt) {
    // Sæt kundeobjektet bag i listen ved hjælp af push()
    kundeListe.push(kundeObjekt);
    console.log(`${kundeObjekt.navn} er sat i kø.`);
}

// 2. Opret nogle kunde-objekter
let kunde1 = {
    navn: "A.C. Hansen",
    adresse: "Vesterbrogade 15",
    kontaktperson: "Anna Hansen",
    email: "ac.hansen@example.com"
};

let kunde2 = {
    navn: "Peters Cykler",
    adresse: "Frederiksberg Allé 22",
    kontaktperson: "Peter Larsen",
    email: "peter@cykler.dk"
};

let kunde3 = {
    navn: "De Franske Oste",
    adresse: "Ostestræde 3",
    kontaktperson: "Jean Dupont",
    email: "jean@franskeoste.com"
};

// Opret en tom kundeliste
let kundeliste = [];

// Sæt kunder i kø ved hjælp af sætKundeIKø2-funktionen
sætKundeIKø2(kundeliste, kunde1);
sætKundeIKø2(kundeliste, kunde2);
sætKundeIKø2(kundeliste, kunde3);

// 3. Loop igennem kundelisten og skriv adresserne ud i konsollen
for (let i = 0; i < kundeliste.length; i++) {
    console.log(`Adresse for ${kundeliste[i].navn}: ${kundeliste[i].adresse}`);
}

function nytKundeNavn(kundeObjekt, nytNavn) {
    // 1. Skriv det gamle og det nye navn
    console.log(`Gammelt navn: ${kundeObjekt.navn}`);
    console.log(`Nyt navn: ${nytNavn}`);
    
    // 2. Ændr navne-attributten i kundeobjektet
    kundeObjekt.navn = nytNavn;
    
    // 3. Skriv det opdaterede objekt ud
    console.log("Opdateret kunde:", kundeObjekt);
}

// Eksempel på brug:
let kunde2 = {
    navn: "Peters Cykler",
    adresse: "Frederiksberg Allé 22",
    kontaktperson: "Peter Larsen",
    email: "peter@cykler.dk",
    username: "peter_cykler",
    password: "bikepass"
};

nytKundeNavn(kunde2, "Peters nye cykler");

// 4. Nyt kunde navn 
function nytKundeNavn(kundeObjekt, nytNavn) {
    // 1. Skriv det gamle og det nye navn
    console.log(`Gammelt navn: ${kundeObjekt.navn}`);
    console.log(`Nyt navn: ${nytNavn}`);
    
    // 2. Ændr navne-attributten i kundeobjektet
    kundeObjekt.navn = nytNavn;
    
    // 3. Skriv det opdaterede objekt ud
    console.log("Opdateret kunde:", kundeObjekt);
}

// Eksempel på brug:
let kunde2 = {
    navn: "Peters Cykler",
    adresse: "Frederiksberg Allé 22",
    kontaktperson: "Peter Larsen",
    email: "peter@cykler.dk",
    username: "peter_cykler",
    password: "bikepass"
};

nytKundeNavn(kunde2, "Peters nye cykler");


// 5. forsøgt password sammenlignet med rigtig password
function correctPassword(kundeObjekt, forsøgtPassword) {
    // 1. Sammenlign forsøgtPassword med det registrerede password
    if (kundeObjekt.password === forsøgtPassword) {
        // 2. Returner true, hvis de er ens
        return true;
    } else {
        // 3. Returner false, hvis de ikke er ens
        return false;
    }
}

// Eksempel på brug:
let loginResult = correctPassword(kunde2, "bikepass");
console.log("Password korrekt:", loginResult);

loginResult = correctPassword(kunde2, "wrongpass");
console.log("Password korrekt:", loginResult);

