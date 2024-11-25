const græs = "🌱🌱"
const bi = "🐝🌱"
const blomst = "🌱🌻"
const blomstBi = "🐝🌻"
antalBlomster = 0; 
antalBier = 0; 

// vi starter med at sætte brættet op, vi generere et mindst 5x5 
function eng (rows, cols){
    if (rows < 5 || cols < 5 ){
        throw new Error ("Eng skal mindst være 5x5") // tjekker om marken er 5x5 
    }
    return Array.from({ length: rows }, () => 
        Array.from({ length: cols }, () => græs)
    ); // generere vores array, med row og cols som dimensioner
}

// vi definere vores array og givet den et navn
let myArrayEng = eng(5,5)

// Placere blomster i vores array 
function placerBlomsterBed (array) {
   
    let rowsIndexBlomsterBed = Math.floor(Math.random()*(array.length - 2));
    let colsIndexBlomsterBed = Math.floor(Math.random()*(array[0].length - 2)); 
    // vi finder ud af hvilke steder på engen vi kan placere den øverste venstre blomst hvis hele bedet skal være der 

    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            myArrayEng[rowsIndexBlomsterBed+i][colsIndexBlomsterBed+j] = blomst;
            antalBlomster++;
        }
    }
}

placerBlomsterBed(myArrayEng) // placere blomsterne 


function placerBiStart(array){
    let rowsIndexBi = Math.floor(Math.random()*array.length); // tilfældig position for bierne 
    let colsIndexBi = Math.floor(Math.random()*array[0].length);

    if (myArrayEng[rowsIndexBi][colsIndexBi] === græs && myArrayEng[rowsIndexBi][colsIndexBi] !== blomst) { // hvis feltet er græs og der ikke er blomst 
        myArrayEng[rowsIndexBi][colsIndexBi] = bi;
        antalBier++; // tæller til at holde styr på antal bier. 
    }
    
}

while (antalBier < 3){ // vi starter med 3 bier, det burde dog være en variabel 
    placerBiStart(myArrayEng);
}

console.log(myArrayEng); // NU HAR VI SAT VORES BRÆT OP OG ER KLAR TIL AT SÆTTE SIMULATIONEN IGANG
console.log("Antallet af blomster : ", antalBlomster);







/* 
1. Vi skal starte med at tilfældig smide bier rundt. (Bien må ikke lande på en anden bi)
    - hvert gang vi generere bier, skal vi tælle det i "omgang"
2. Hvis bien lander på en blomst, så blomst bi.
3. næste runde bliver blomst bi til bi, hvorefter vi så kan flytte bien igen.

// man kan prøve at rykke på bierne med Math.random, istedet for at fjerne og erstatte. 
// if (myArray [1][0])  = bi {
    græs 
    }
*/



