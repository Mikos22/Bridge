const h64 = [
    [1,1,0,0,1,1,0,0],
    [1,1,0,0,1,1,0,0],
    [1,1,0,0,1,1,0,0],
    [1,1,1,1,1,1,0,0],
    [1,1,0,0,1,1,0,0],
    [1,1,0,0,1,1,0,0],
    [1,1,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0],
];
const a64 = [
    [0,0,1,1,0,0,0,0],
    [0,1,1,1,1,0,0,0],
    [1,1,0,0,1,1,0,0],
    [1,1,0,0,1,1,0,0],
    [1,1,1,1,1,1,0,0],
    [1,1,0,0,1,1,0,0],
    [1,1,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0],
];
const leftPar64 = [
    [0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0]
];
const rightPar64 = [
    [0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0],
    [0,0,0,0,1,1,0,0],
    [0,0,0,0,1,1,0,0],
    [0,0,0,0,1,1,0,0],
    [0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0]
];
const i64 = [
    [0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0]
];
const t64 = [
    [0,0,0,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,1,1,1,1,1,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,1,1,0,1,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0]
];



// sætter alle arrays til en variabel så det nemmere at behandle (ser også bedre ud som funktionsargument, altså det man skriver i functions parantesen)
let dotcharts = [h64, a64, leftPar64, i64, t64, rightPar64];

//  De 2 variable der indgår i vores dotchars er, selve dotchars og vores #, det er fordi vi skal kunne ændrer # til @ eller andre tegn bagefter. 
function printDotstring(dotcharts, symbol) {

    /* Ideen er at vi først samlet og derefter laver om. For at samle arrays skal vi samle de enkelte rækker og bagefter pushe til en tomt array, result. (Ligesom vi gjorde idag)
    Vi iterer gennem arrayet, MEN vi iterere først igennem rækkerne og derfor bruger vi [0] i den første for loop. Efter vi har itereret og lagt arrays vandret sammen, kan vi rykke 1 ned til næste række. 
*/
    let result = []; // Her opbevarer vi de kombinerede rækker
    for (let række = 0; række < dotcharts[0].length; række++) { 
        let samletrække = []; // Kombiner en enkelt række fra alle arrays, så vi laver et array af gangen og smider den herind 
        for (let i = 0; i < dotcharts.length; i++) { // Brug en klassisk for-løkke
            samletrække = samletrække.concat(dotcharts[i][række]);
        }
        result.push(samletrække); // Tilføjer den samling af række vi lige har lavet til det samlet result. 
    }

    /*
    HVORDAN FÅR MAN SÅ DET TIL AT SE PÆNT UD, 
    THE TRICK IS TO MAKE A HUGE MUNGUS CHUNGUS STRING. 
    DET HELE ER EN STRENG. EVERYTHING IS A STRING 

    Vi løber igennem vores result array med 1 og 0, og istedet for erstatte inden i det array, laver vi en tom streng hvor vi plusser (fordi vi ikke kan pushe ind i en streng) den værdi vi gerne ville tilføje
    */ 

    // Udskriv resultatet med erstatning af 1 = symbol og 0 = " "

    for (let i = 0; i < result.length; i++) { // Vi gennemgår arrayet normally 
        let tomStreng = ""; // Laver vores tomme streng 
        for (let j = 0; j < result[i].length; j++) { // går ind i hver enkelt række og kig på om det er 0 eller 1 
            if (result[i][j] === 1) {
                tomStreng += symbol; // Tilføj symbolet, hvis værdien er 1
            } else {
                tomStreng += " "; // Tilføj et mellemrum, hvis værdien er 0 (DET SKAL VÆRE MELLEMRUM OG IKKE "" THERES AN AsEthETIC dIFFernCE)
            }
        }
        console.log(tomStreng); // Udskriv den opbyggede række
    }
}

printDotstring(dotcharts, "#");
printDotstring(dotcharts, "@");
// Vi kan nu skifte på symbolet, som opgaven gerne ville have 