/*Koden herunder skal generere 100 par af tilfældige tal mellem a_max og
b_max og lægge dem sammen. Undervejs skal den tælle, hvor mange
gange den maksimale sum, a_max + b_max, optræder. Men koden virker
ikke...
Kommentér alle fejl og ret koden.*/

/*
function randomsum(a_max,b_max){

    let max_sum_count = 0;

    for (let i = 0 ; i < 100 ; i++){ 
        let sum =
            Math.floor(Math.random()*a_max)+
            Math.floor(Math.random()*b_max);
        if (sum == a_max + b_max){ 
            max_sum_count++;
            console.log(
                "max sum count :" + max_sum_count
            );
        };
     };
}

randomsum(4,5);
*/

// Fixed version 
function randomsum(a_max,b_max){

    let max_sum_count = 0;

    for (let i = 0 ; i < 100 ; i++){ // vigtigt at notere at det skal være < og ikke <= fordi så kører den 101 og ikke 100 gange. 

        let sum = Math.floor(Math.random() * a_max + 1) + Math.floor(Math.random() * b_max + 1 ); // hvis vi gerne ville bruge at tallet bliver rundet ned, skal vi plusse det med 1, fordi mathrandom er fra 0 til 0.99

        if (sum === a_max + b_max){ // her skal vi have === og ikke == 

            max_sum_count++;

            console.log("max sum count :" + max_sum_count);
        };
     };
}

randomsum(4,5);
/*
Koden herunder skal finde den højeste værdi i et array og skrive den ud i
konsollen. Men der er gået noget galt ...
Kommentér alle fejl og ret koden

function max_member(array_A){
    const max = 0; // det her skal være let, så vi kan ændre på max tallet 
    for (let i=0; i<array_A.length; i++){
        if (array_A[i] > max){
            max=array_A[i];
        };
    };
} // vi skal returne max, så vi kan printe det i konsollen, når vi kalder funktionen. 
    
console.log(max_member([2,7,4]));*/

// Fixed code 

function max_member(array_A){
    let max = 0;
    for (let i = 0; i < array_A.length; i++){
        if (array_A[i] > max){
            max = array_A[i];
        };
    };
    return (max)
}

console.log(max_member([2,7,4]));

/*
Funktionen herunder skal kaldes med et array af mindst et nul og en række
et-taller, sådan at alle nullerne kommer før et-tallerne. Den skal returnere
antallet af nuller, samt resten af listen, dvs. et-tallerne. Det virker desværre
ikke.
Kommentér alle fejl og ret koden.

function count_zeros(A){
    let zeros=0;
    do {
        A.shift();
        zeros++;
    } while (A[0]=0);// det er tildelingsopreator, så det skal være === 
    return [zeros,A];
}
console.log(count_zeros([0,0,0,0,1,1,1,1,1,1]));*/ 
 
// Fixed Code

function count_zeros(A){
    let zeros = 0;
    do {
        A.shift();
        zeros++;
    } while (A[0]===0);
    return [zeros,A];
}   
console.log(count_zeros([0,0,0,0,1,1,1,1,1,1]));


/*Denne funktion tager et array af heltal som argument. Den skal returnere
antallet af elementer i arrayet hvor elemtentet til venstre for er mindre.
Altså, hvor styrker[i] < styrker[i+1]. Den giver et forkert resultat.
Kommentér alle fejl og ret koden

let result = 0;
let styrker_1 = [21,4,21]; // --> 1
let styrker_2 = [1,2,3,4];// --> 3
let styrker_3 = [10,9,8,7]; // --> 0

function insekt(styrker){
    for (let i = 0; i < styrker.length; i++){
        if (styrker[i+1] > styrker[i]){
            result++;
        }
    };
    return result;
}

console.log(insekt(styrker_1));
console.log(insekt(styrker_2));
console.log(insekt(styrker_3));
*/

// Fixed version 

let styrker_1 = [21,4,21]; // --> 1
let styrker_2 = [1,2,3,4];// --> 3
let styrker_3 = [10,9,8,7]; // --> 0

function insekt(styrker){
    let result = 0; // det her skal være en lokal variabel i funktionen, for ellers ville den være 0 for hver gang loopet kører. 
    for (let i = 0; i < styrker.length-1; i++){ // length -1, fordi i koden gør vi brug af i + 1, så ved at holde i - 1, sørger vi for at vi ikke kommer for langt. 
        if (styrker[i+1] > styrker[i]){
            result++;
        }
    };
    return result;
}

console.log(insekt(styrker_1));
console.log(insekt(styrker_2));
console.log(insekt(styrker_3));

/*Funktionen herunder tager en matrice af positive heltal som argument. Det
forventes at matricen er kvadratisk og altså har ligeså mange linjer som
elementer i hver linje. Funktionen skal returnere en matrice af samme
størrelse, hvor hver element er kvadratet på det tilsvarende element i
input-matricen.


let A = [[1,2,3],[4,5,6],[7,8,9]];

function matrix_2nd(A){
    let reult = [];
    for (let i=0; i<A.length; i++){
        let result_i = [];
        for (j=0; j<A.length; j++){
            result_i.push(A[j][i]*A[j][i]);
        };
        result.push(result_i);
    };
    return result;
}
console.log(matrix_2nd(A));
*/

// Fixed version 
let A = [[1,2,3],[4,5,6],[7,8,9]];

function matrix_2nd(A){
    let result = []; // stavefejl
    for (let i=0; i<A.length; i++){
        let result_i = [];
        for (j=0; j<A[i].length; j++){ 
// man skal bruge [i], fordi vi skal refere til det array i er. i = 0, = [1,2,3], i = 1, = [4,5,6]. vi bruger j, til at få adgang til de enkelte elementer i et "i" array. 
            result_i.push(A[j][i]*A[j][i]);
        };
        result.push(result_i);
    };
    return result;
}
console.log(matrix_2nd(A));


