
let array1 = [1,2,3];
let array2 = [3,4,5];

// Opgave 1 - appendArrays 
function appendArrays(array_a, array_b) {
    // Lav et nyt tomt array
    let result = [];
    
    // Tilføj alle elementer fra array_a
    for (let i = 0; i < array_a.length; i++) {
        result.push(array_a[i]);
    }
    
    // Tilføj alle elementer fra array_b
    for (let i = 0; i < array_b.length; i++) {
        result.push(array_b[i]);
    }
    
    return result;
}

// i denne her opgave kan man også bruge concat, den givet version er simplificeret
/*function appendArrays(array_a, array_b) {
    return array_a.concat(array_b);
}
*/
console.log(appendArrays(array1,array2));




// Opgave 2 - stringifyDotchars 
function stringifyDotchars(dotchars) {
    // Hvis der ingen dotchars er, returner tomt array
    if (dotchars.length === 0) {
        return [];
    }
    
    // Start med første dotchar
    let result = [];
    for (let i = 0; i < 8; i++) {
        result[i] = [...dotchars[0][i]];
    }
    
    // Tilføj resten af dotchars
    for (let charIndex = 1; charIndex < dotchars.length; charIndex++) {
        for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
            result[rowIndex] = appendArrays(result[rowIndex], dotchars[charIndex][rowIndex]);
        }
    }
    
    return result;
}




// De givne 8x8 matricer (samme som før)
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



// Opgave 3 - samle alle arrays
function printDotstring(dotstring, symbol = '#') {
    // Vi går gennem hver række i dotstring
    for (let rowIndex = 0; rowIndex < dotstring.length; rowIndex++) {
        // Vi laver en tom streng til denne række
        let currentRow = "";
        
        // Vi går gennem hvert tal i rækken
        for (let colIndex = 0; colIndex < dotstring[rowIndex].length; colIndex++) {
            // Hvis tallet er 1, tilføjer vi symbolet
            if (dotstring[rowIndex][colIndex] === 1) {
                currentRow = currentRow + symbol;
            }
            // Hvis tallet er 0, tilføjer vi et mellemrum
            else {
                currentRow = currentRow + " ";
            }
        }
        
        // Når rækken er færdig, printer vi den
        console.log(currentRow);
    }
}


// Test programmet
console.log("Test med #:");
let hait64 = stringifyDotchars([h64, a64, leftPar64, i64, t64, rightPar64]);
printDotstring(hait64);

console.log("\nTest med @:");
printDotstring(hait64, '@');

console.log("\nTest med .:");
printDotstring(hait64, '.');


