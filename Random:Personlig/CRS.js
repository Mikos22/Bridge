// I denne opgave skal du programmere klasser og objekter for et biludlejningfirma CRS. 
// CRS har biler, kunder og udlejningstransaktioner. 

// OPGAVE 2.1 BIL 
// PROGRAMMERE EN BIL DER DIVERSE EGENSKABER. 
// derudover skal du lave en metode der kigger på en bil er klar til udlejning baseret på om dens tank er fuld

class Bil {
    constructor (klasse, nummer, mærke, model, kilometertal, tanket, service) {
        this.klasse = klasse; 
        this.nummer = nummer; 
        this.mærke = mærke; 
        this.model = model;
        this.kilometertal = kilometertal; 
        this.tanket = tanket; 
        this.service = service; 
    };
    bilOK(){ // hvis tanket er true og service er false, så er bilen ok og dermed true. 
        if (this.tanket && !this.service){
            return true; // bilen er klar 
        } else {
            return false; // bilen er ikke klar
        }
    };
};
// Vi gør det simpelt her og siger true og false i stedet for at kigge på hvor meget der er i tanken. 
//let Bil0 = new Bil ("A","12345678","Ford","Focus",1500,true,false); 

//console.log(Bil1.bilOK()); // output true

// OPG 2.2  Kunde 
// programmere en klasse Kunde med diverse egenskaber. 
// en kunde kan kun leje en bil ud hvis der er et kreditkort listet og det er gyldigt. 

class Kunde {
    constructor(kørekortnr,navn,adresse,kreditkortnr,gyldigt_CC) {
        this.kørekortnr = kørekortnr; 
        this.navn = navn;
        this.adresse = adresse; 
        this.kreditkortnr = kreditkortnr; 
        this.gyldigt_CC = gyldigt_CC; 
    }

    kundeOK(){ //kreditkortet skal altid være 16 numre. 
        if (this.kreditkortnr.length === 16 && this.gyldigt_CC){
            return true; 
        } else {
            return false; 
        }
    }
}
//RIP NIGGATRON 
//let Kunde0 = new Kunde ("33114855","NIGGATRON","TWIN-TOWERS","1234567890123456",true);

//console.log(Kunde1.kundeOK());

// OPG 2.3 
// progammere en klasse, transaktion med diverse egenskaber. 
// en transaktion er kun i orden hvis bilen og kunden er i orden. 

class Transaktion {
    constructor(Id,kunde,bil,datostart,datoslut){
        this.Id = Id; 
        this.kunde = kunde; 
        this.bil = bil; 
        this.datostart = datostart; 
        this.datoslut = datoslut; 
    }

    transaktionOK(){
        return this.bil.bilOK() && this.kunde.kundeOK();
    }
}
// man kan se her når vi opretter transaktionen at vi bruger de værdier vi har oprettet fra de tidligere opgaver
// Kunde1 og Bil1. 
//let transaktion1 = new Transaktion(1,Kunde0,Bil0,"2024-01-01","2024-01-10")

//console.log(transaktion1.transaktionOK()); // true 

// OPG 2.4 
// programmere en CRS klasse med de elementer du har lavet i de tidligere opgaver. 

class CRS {
    constructor(kunder,biler,transaktioner) {
        this.kunder = []; 
        this.biler = []; 
        this.transaktioner = []; 
    }
    tilføjKunde(kunde){
        this.kunder.push(kunde);
    }
    tilføjBil(bil){
        this.biler.push(bil);
    }
    tilføjTransaktion(transaktion){
        if (transaktion.transaktionOK()){
            this.transaktioner.push(transaktion);
        } else {
            console.log("FEJL I TRANSAKTION");
        } 
    }
}

const bil1 = new Bil('A', 'AA 11 222', 'Ford', 'Focus', '12345', true, false);
const bil2 = new Bil('B', 'BB 11 222', 'Citroën', 'C3', '12345', false, false);

const kunde1 = new Kunde('33114855', 'H. Hansen', 'Cabrioletvej 47', '1111222333444555', true);

const trans1 = new Transaktion('001', kunde1, bil1, '15.12.23', '17.12.23');


// Oprettelse af CRS system
const crsSystem = new CRS();
crsSystem.tilføjKunde(kunde1);
crsSystem.tilføjBil(bil1);
crsSystem.tilføjBil(bil2);

crsSystem.tilføjTransaktion(trans1); // Gyldig transaktion
