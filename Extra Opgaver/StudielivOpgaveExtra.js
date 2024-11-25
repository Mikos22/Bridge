/* Opgave 2 studieliv

Delopgave 2.1 : Kurser (5%)
Skriv en klasse: Kursus. Hvert kursus-objekt har følgende egenskaber:
et navn, som er en streng
en kode, som også er en streng */

class Kursus{
    constructor(navnKursus,kode){
        this.navnKursus = navnKursus;
        this.kode = kode;
    }
}


/*
Delopgave 2.2
Skriv en klasse: Kursist. Hver kursist-objekt har følgende egeneskaber:
et navn, som er en streng
et studienummer, som er et heltal
kurser, som er en liste af de kursus-objekter, der følges.
Der skal desuden skrives en metode, tilmeld(kursus), til at føje et givent
kursus-objekt til kursistens kursusliste
*/
class Kursist{
    constructor(navnKursist,studienummer){
        this.navnKursist = navnKursist;
        this.studienummer = studienummer;
        this.kurser = [];
    }
    tilmeld(kursus){

        this.kurser.push(kursus);
    }
};
/*
delopgave 2.3
Skriv en klasse: Eksamen. Hver eksamens-objekt har følgende egenskaber
kursus (et kursus-objekt, angives ved oprettelse)
kursist (et kursist-objekt, angives ved oprettelse)
karakter (et heltal)
*/
class Eksamen{
    constructor(kursus,kursist){
        this.kursus = kursus; 
        this.kursist = kursist;
        this.karakter = null;
    }

    addGrade(grade) {
        this.karakter = grade
    }
}
/*
delopgave 2.4
Skriv en klasse: Studium. Hvert studie-objekt har følgende egenskaber:
kursister: en liste af kursist-objekter
kurser: en liste af kursus-objekter
eksaminer: en liste af eksamens-objekter
Der skal udover det laves konstruktør-metoder der tilføjer en kursist,kursus og eksamen
*/

class Studium{
    constructor(){
        this.kursister = [];
        this.kurser = [];
        this.eksamner = [];
}

tilføjKursist(kursist){
    this.kursister.push(kursist);
}

tilføjKursus(kursus){
    this.kurser.push(kursus);
}

tilføjEksamen(eksamen){
    this.eksamner.push(eksamen);
}

/*
Del opagve 2.5 (kig under findEksamner metoder under studium for at se løsningen.)
Tilføj desuden en metode, findEksaminer(kursist) til Studie-klassen, der for
en given kursist returnerer en liste af de eksaminer, som vedkommende er
tilmeldt.
*/

findEksaminer(kursist){

let resultater =[]; // opretter en tom liste hvor vi kan gemme eksaminer for kursister

     // går igennem alle eksaminer ved hjælp af forEach (der kunne også for loop)
    this.eksamner.forEach(eksamen =>{
   
        if (eksamen.kursist === kursist) {
            resultater.push(eksamen); // tilføj eksamen til resultaterne, hvis kursisten matcher
        }
        
    })
    return resultater;
};
};


// opretter et studium med følgende kursist,kursus og eksamen

let studium = new Studium();

let kursist_1 = new Kursist("H.Hansen", "0001");
let kursus_1 = new Kursus("programmering", "p101");
let eksamen_1 = new Eksamen(kursus_1,kursist_1);
eksamen_1.addGrade(2)

// tilføjer kurssit,kursus og eksamner til studium ´´

studium.tilføjKursist(kursist_1);
studium.tilføjKursus(kursus_1);
studium.tilføjEksamen(eksamen_1);

// Find eksaminer for kursist 1.

console.log("RESULTATER", studium.findEksaminer(kursist_1));



