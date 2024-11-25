// FOR LOOPS 
// OPG 6 Skriv et loop der beregner fakultet 5!

/*
let fakultetTal = 10; 
let sum = 1; 
for (let i = 1; i <= fakultetTal; i++){
    sum *= i 
    console.log(sum);
}

// OPG 7 Loop der udskriver gangetabellen for tallet 7

let gangeTal = 7; 
let gangeTabel = 10; 

for (let i = 1; i <= gangeTabel; i++){
    resultat = gangeTal * i 
    console.log(gangeTal, " x ", i, "=", resultat)
}



// OPG 8 Loop der udskriv fibonacci indtil 10
let sum = 0
for (let i = 0; i <= 9; i++){
    sum = i + (i + 1) 
    console.log(i,"+", i+1,"=",sum)
}

 */

// OPG 9 Find det mindste tal i et array. 

/*
const array = [12,5,20,8,3];

let minNumber = array[0];

for (i = 1; i < array.length; i++){
   if (array[i] < minNumber){
    minNumber = array[i];
   }
}
console.log(minNumber)

*/

// tæl konsonanter
// skriv et loop der tæller antallet af konsonanter i en given streng 

/*
const vokaler = ["a","e","i","o","u","æ","ø","å"];

let ord = "fiskdddaa"
let vokalTæller = 0;

for (let i = 0; i < ord.length; i++) {
    for (let j = 0; j < vokaler.length; j++){
        if (ord[i] === vokaler[j]){
            vokalTæller++;
        } 
    }
}

let antalKonsonanter = ord.length - vokalTæller;

console.log(antalKonsonanter)*/

// OPGAVE 11 
// BEREGN GENNEMSNIT, SKRIV EN LOOP DER BEREGNER SNITTET I ET ARRAY 

/*
let snitArray = [10,15,17];
let sum = 0;
for (let i = 0; i < snitArray.length; i++) {
    sum += snitArray[i]; 
}
let gennemsnit = sum / snitArray.length;
console.log(gennemsnit);
*/

// OPGAVE 12 
// OMVEND STRENG 

/*
let streng = "Javascript"

tomArray = [];
for (let i = streng.length -1 ; i >= 0; i--) {
    tomArray.push(streng[i])
}

console.log("Omvendt ord er : ", tomArray)
*/

// OPGAVE 13
// TÆL SPECFIKKE BOGSTAVER 
// TÆL HVOR MANGE GANGE ET SPECIFIKT BOGSTAV FOREKOMMER I EN STREN G

/*
let ord = "banan" // det hele skal være små bogstaver, eller kan man bruge .toLowerCase 
let bogstavTæller = 0;
let bogstav = "a"


for (let i = 0; i < ord.length; i++) {
    if (ord[i] === bogstav){
        bogstavTæller++;
    }
}
console.log(bogstavTæller)
*/


 