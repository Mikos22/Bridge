// MODUL 6 I PROG, OBJEKTER(OOP) OG KLASSER 

//OPGAVEREN I MODUL 6 ER 2 STØRRE OGPAVER SÅ JEG DELER DEM OP I MINDRE OPGAVER FOR OVERSKUELIGHED. 

/*class Song {
    constructor(title,artist,genre,year) {
    this.title=title;
    this.artist=artist;
    this.genre=genre;
    this.year=year;
    };
    };
HER ER ET EKSEMPEL PÅ SYNTAKSEN FOR AT OPRETTE EN CLASSE MED CONSTRUCTOR
*/

// (OPGAVERNE ER REFERERET I KOMMENTARERNE)
// OPG 6.1.1 OPRET KUNDEKLASSE MED CONSTRUCTOR METODEN MED KUNDEDATA FRA OPGAVE 5. 
// OPG 6.1.2 OPRET KUNDERNE FRA SIDSTE UGE
// OPG 6.1.3 UDVID MED GET OG SET, ÆNDRER PÅ NOGLE VÆRDIER. 
// OPG 6.1.4 ÆNDRER NAVN PÅ KUNDE 1 TIL "JAMES DEAN" OG UDSKRIV I KONSOL 


class Kunde {
    constructor(navn,adresse,kontaktperson,email) {
    this.navn = navn; 
    this.adresse = adresse; 
    this.kontaktperson = kontaktperson;
    this.email = email; 
    };
    getNavn(){
        return this.navn
    };
    setNavn(newNavn){
        this.navn = newNavn
    };
};

let kunde1 = new Kunde ("A.C. Hansen","Vesterbrogade 15", "Anna Hansen","ac.hansen@example.com");
let kunde2 = new Kunde ("Peters Cykler", "Frederiksberg Allé 22","Peter Larsen","peter@cykler.dk");
let kunde3 = new Kunde ("De Franske Oste", "Ostestrade 3","Jean Dupont", "jean@franskeoste.com",);

console.log(kunde2.getNavn());
console.log(kunde1.setNavn("James Dean"));
console.log(kunde1.navn);

// OPG 6.1.5 OPRET KundeListe-klasse. 
// OPG 6.1.6 DEN NYE KLASSE SKAL STARTE MED EN KUNDELSITE SOM TOMT ARRAY 
// OPG 6.1.7 Opret et nyt kundeliste-objekt ved navn "Kunder 2024".
// OPG 6.1.8 Lav en metode tilføjKunde(), til at føje en ny kunde til kundelisten. & Føj kunder til listen med den nye metode.
// OPG 6.1.9 Lav metode udskrivKunder(), i kundeliste-klassen til at udskrive alle kunder i listen.

// Definerer KundeListe-klassen
class KundeListe {
    constructor(navn) {
        this.navn = navn;         // Navnet på kundelisten
        this.kundeliste = [];     // Starter med en tom kundeliste
    }

    // Metode til at tilføje en kunde til listen
    tilfoejKunde(kunde) {
        this.kundeliste.push(kunde);
    }

    // Metode til at udskrive alle kunder på listen
    udskrivKunder() {
        console.log(`Kunder på listen "${this.navn}":`);
        this.kundeliste.forEach((kunde, index) => {
            console.log(`${index + 1}: ${kunde}`);
        });
    }
}

// Opretter et nyt kundeliste-objekt
let kunder2024 = new KundeListe("Kunder 2024");

// Tilføjer nogle kunder til kundelisten
kunder2024.tilfoejKunde("Anna Hansen");
kunder2024.tilfoejKunde("Jens Jensen");
kunder2024.tilfoejKunde("Marie Madsen");

// Udskriver alle kunderne
kunder2024.udskrivKunder();




// Her følger flere opgaver til klasse, Det er opgaverne under 6.2 

// OPG 6.2.1 OPRET EN KUNSTER OG PRINT I KONSOL
class Sang {
    constructor(titel,kunstner,year){
        this.titel = titel;
        this.kunstner = kunstner;
        this.year = year;
    };
};

let Sang1 = new Sang ("In the Air Tonight", "Phil Collins", 2015);

console.log(Sang1);

// OPG 6.2.2 
// Udvid klassen Sang med en getter, der returnerer sangens alder, og en setter, der sætter årstallet ud fra, hvor gammel sangen skal være.

class Sang {
    constructor(titel,kunstner,year){
        this.titel = titel;
        this.kunstner = kunstner;
        this.year = year;
    }; // vi laver en funtkion det hedder get, i stedet for en getter, for vi bruger ikke gettere 
    getYear(){
        return this.year;
    }; // det bliver så vores setter
    setYear(newYear){
        this.year = newYear
    };
};

let Sang1 = new Sang ("In the Air Tonight", "Phil Collins", 2015);
// displayer sangen 
console.log(Sang1);
// displayer året af sangen 
console.log(Sang1.year);
// ændrer året af sangen 
Sang1.setYear(2016)
// displayer det nye år
console.log(Sang1.year);

// OPG 6.3 Lav en klasse "Playlist", tager imod navn og genre. Der skal være et tomt array kaldt sange. 
// Tjek om der er sat en navn til playliste, tjek om navnet er længere end 0. 
// OPG 6.4 lav en metode til at fjerne og tilføje en sang til din playliste. 
// OPG 6.5 lav en metode der finder sangen af en bestemt kunster. 
// OPG 6.6 OPret privat attribut kodeord.  
 
class Playliste {
    // deklarerer privat attribut
    #kodeord; 

    constructor(navn, genre) {
        this.sange = []; // Det her er vores tomme array
        this.navn = navn;
        this.genre = genre;
        this.#kodeord = prompt("Indtast kodeord"); // bruger privat attribut 
    }

    getNavn() { 
        if (this.navn.length > 0) { 
            return this.navn;
        } else {
            return "Ukendt";
        }
    }

    setNavn(newNavn) {
        if (newNavn.length > 0) {
            this.navn = newNavn;
            return "Navn opdateret";
        } else {
            return "Navn skal være længere end 0";
        }
    }

    tilføjSang(titel, kunstner) {
        let kodeordsForsøg = prompt("Indtast kodeord");
        if (this.#kodeord === kodeordsForsøg){
            this.sange.push({ titel, kunstner }); // Vi tilføjer en sang med både titel og kunstner
        } else {
            console.log("forkert kodeord")
        }
    }

    fjernSang(sangTitel) {
        const index = this.sange.findIndex(sang => sang.titel === sangTitel); // Finder indexet for sangens titel
        if (index > -1) { 
            this.sange.splice(index, 1); // Fjerner sangen fra arrayet
            return `${sangTitel} fjernet fra playlisten`;
        } else {
            return `${sangTitel} findes ikke i playlisten`;
        }
    }

    // Hent alle sange i playlisten
    hentSange() {
        if (this.sange.length > 0) {
            return this.sange;
        } else {
            return "Ingen sange i playlisten.";
        }
    }

    // Find alle sange af en bestemt kunstner
    sangAfKunster(kunstnerNavn) {
        // vi bruger filter() til at filterer i vores sange. 
        // man navngiver selv det element som skal trackes (i dette tilfælde sang, det kunne også hedder noget andet)
        // bagefter sætter vi det sammen med det vi gerne ville filtrer (i dette tilfælde kunster) 
        // til sidst sammenligner vi det med selve det kunsternavn vi leder efter. 
        const resultater = this.sange.filter(sang => sang.kunstner === kunstnerNavn); // Filtrer sange af den kunstner
        
        if (resultater.length > 0) {
            console.log(resultater); // Print arrayet med alle sange af kunstneren
        } else {
            console.log(`Ingen sange af kunstneren: ${kunstnerNavn}`);
        }
    }
}

// Eksempel på brug:
let minPlayliste = new Playliste("Favoritter", "Pop");

minPlayliste.tilføjSang("Sang 1", "Kunstner A");
minPlayliste.tilføjSang("Sang 2", "Kunstner B");
minPlayliste.tilføjSang("Sang 3", "Kunstner A");

// Søg efter sange af "Kunstner A"
minPlayliste.sangAfKunster("Kunstner A");
// Output: [{ titel: "Sang 1", kunstner: "Kunstner A" }, { titel: "Sang 3", kunstner: "Kunstner A" }]

// Søg efter sange af "Kunstner C" (som ikke findes)
minPlayliste.sangAfKunster("Kunstner C");
// Output: Ingen sange af kunstneren: Kunstner C
