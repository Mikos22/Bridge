// vi definerer de 4 mulige variable der kan være på engen. 
const græs = "🌱🌱";
const bi = "🐝🌱";
const blomst = "🌱🌻";
const blomstBi = "🐝🌻";


// Koden kan kun køres med 1 blomsterbed 
// BlomsterEng klasse, opgavekrav 
class BlomsterEng {
    constructor(højde, bredde, antalBier) {
        if (højde < 5 || bredde < 5) { // tjekker om marken er mindst 5x5, opgavekrav
            throw new Error("Eng skal mindst være 5x5"); 
        }
        this.højde = højde; 
        this.bredde = bredde; 
        this.myEng = this.opretEng(); // når klassen kaldes køres constructoren 1 gang, ved at sætte opretEng() i constructoren opretter vi vores array når vi kalder på my.Eng 
        this.antalBier = antalBier;
        this.nuværendeBier = 0; // Gør det muligt at tracke antallet af bier der er fjernet og sat tilbage
        this.antalBlomster = 0; 
    }

    opretEng() {
        return Array.from({ length: this.højde }, () => 
            Array.from({ length: this.bredde }, () => græs)
        ); // function der genere array med højde og bredde dimensioner og putter græs i hvert felt. 
    }
    
    placerBlomsterBed() { // vi finder det punkt hvor der øverste venstre blomst kan placeres, så der er nok plads til at printe resten af 3x3'et 
        let højdeIndexBlomsterBed = Math.floor(Math.random() * (this.højde - 2)); 
        let breddeIndexBlomsterBed = Math.floor(Math.random() * (this.bredde - 2)); // man skal have 3 pladser til at printe et 3x3 blomsterbed så vi minusser 2 fra alle de mulige ydre punkter. 
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) { // laver et loop der kører 3 gange for de 3 rækker
                this.myEng[højdeIndexBlomsterBed + i][breddeIndexBlomsterBed + j] = blomst; // placere en blomst i hver felt 
                this.antalBlomster++; // justere antallet af blomster for hvert placerede felt
            }
        }
    }

    placerBier (){
        while (this.nuværendeBier < this.antalBier) { // sikrer at vi ikke overskrider antal ønskede bier
            let højdeIndexBi = Math.floor(Math.random() * (this.højde));
            let breddeIndexBi = Math.floor(Math.random() * (this.bredde));

            if(this.myEng[højdeIndexBi][breddeIndexBi] === græs){ // hele engen er græs til at starte med 
                this.myEng[højdeIndexBi][breddeIndexBi] = bi;
                this.nuværendeBier++;
            }
        }
    }

    bevægeBier () { // vi bevæger bierne ved at fjerne dem alle også tilfældigt placere dem tilbage i vores array 

        for (let i = 0; i < this.højde; i++) {
            for (let j = 0; j < this.bredde; j++){ // vi gennemgår hele arrayet
                if (this.myEng[i][j]=== bi ||this.myEng[i][j]=== blomstBi){ // finder de punkter hvor der er bier 
                    if (this.myEng[i][j]=== blomstBi){ // hvis blomst skal vi fjerne blomst og bi 
                        this.myEng[i][j]= græs; 
                        this.nuværendeBier--;; 
                        this.antalBlomster--; 
                    } else if (this.myEng[i][j]=== bi){ // hvis bi så er det kun bien der skal fjernes 
                        this.myEng[i][j]= græs; 
                        this.nuværendeBier--; 
                    }
                }
            }
        }

        while (this.nuværendeBier < this.antalBier) { // indtil der er ønsket antal bier er lagt tilbage i 
            let højdeIndexBi = Math.floor(Math.random() * (this.højde)); // random x værdi 
            let breddeIndexBi = Math.floor(Math.random() * (this.bredde)); // random y værdi 

            if(this.myEng[højdeIndexBi][breddeIndexBi] === blomst){ // hvis valgte felt er blomst, så blomstBi 
                this.myEng[højdeIndexBi][breddeIndexBi] = blomstBi;
                this.nuværendeBier++; // juster antal bier 

            } else if (this.myEng[højdeIndexBi][breddeIndexBi] === græs){ // hvis valgte felt er græs, så bi 
                this.myEng[højdeIndexBi][breddeIndexBi] = bi;
                this.nuværendeBier++; // juster antal bier 
            }
        }
    }
}

class Simulation { // Simulation klasse, opgavekrav 
    constructor (højde,bredde,blomsterbed,bier){ 
        this.højde = højde; 
        this.bredde = bredde;
        this.blomsterbed = blomsterbed; // 3x3 blomster 
        this.bier = bier; // antal bier fra argumentet 
        this.eng = new BlomsterEng(højde,bredde,bier) // opretter en ny BlomsterEng/Mark
        // som sagt tidligere så bliver der oprettet et array når man kalder på blomster klassen 
        
    }

    run(){

        for (let i = 0; i < this.blomsterbed; i++){ // Simulationen funger egentlig kun med 1 bed, men med forloopet kan man vælge antallet af bed, hvis funktionalitet blev implementeret
            this.eng.placerBlomsterBed(); // vi starter med at tilføje blomster
        }


        this.eng.placerBier(); 
        

        console.log(this.eng.myEng) // printer start situationen ud
       

        let antalRunder = 0; 
        while (this.eng.antalBlomster > 0){ // kører simulation indtil der ikke er flere blomster tilbage
            console.log(antalRunder);
            this.eng.bevægeBier();
            antalRunder++;
            console.log(this.eng.myEng);
            
        }
    }
}

const minSim = new Simulation(5,6,1,3); // der kun dog kun bruges 1 blomsterbed i denne opgave, det opfylder opgavens krav, men der står dog at man skal kunne lave flere. 
minSim.run();

















