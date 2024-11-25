let pointFelter = [1,2,3,4,5,4,3,2,1]; 
/* 
Vi starter med at sætte vores array op. Vi giver den navnet "pointFelter" ligesom i opgaven og gør brug af camelcase metoden.
Siden vi definere et array er det vigtigt at huske at vi deler datapunkterne op med "," og ikke ";". 
Derudover skal man også huske "[]" i stedet for "()", da vi definere et array. 
*/
let samletPoint = 0;
/* 
Vi skal have et sted hvor vi kan tælle det samlede antal point, da vi skal spille indtil vi rammer 50 point .
Vi definere en global variabel "samletPoint", så vi kan bruge den flere steder i vores "for-loop", sætter den til 0, da vi ikke har sat spillet igang endnu. 
*/

for (i = 1; samletPoint <= 50; i++) {
    /*
     Siden vi skal gentage en dart kast et uvist antal gange bruger vi for-loop
     Vi bruger i til at tælle antallet af kast. Den stiger med 1 da vi kaster med 1 af gangen. 
     Vi spiller indtil 50, så vi bruger vores samletPoint variabel til at holde styr på point. 
     */

    let pointForKast = pointFelter[Math.floor(Math.random()*pointFelter.length)];

    /*   
    Udfaldet af dartkast er tilfældige, det betyder at vi skal tilfældigt generere et tal fra vores "pointFelter" array. 
    Det gemmer vi i en ny variable "pointForKast". Måden vi generere et tilfældigt tal på er følgende: 
    Vi starter med at få et tilfældig værdi mellem 0 - 1 (ekslusiv 1) ved Math.random 
    Vi ganger det med længden af vores array, for at få et tilfældigt værdi i vores array, der ikke overskrider dens længde
    Vi bruger Math.floor til at runde ned, da vi tæller arrays fra 0. Det gør vi fordi det højeste tal vi kan med -
    er x < 9. Så når vi runder ned, er vi garanter i at få et tal, der passer med vores array, som tæller fra 0 til 8. 
    På den måde får vi et tilfældig mængde point, for hvert kast. 
    */

    samletPoint += pointForKast;

    /*
    Efter vi har genereret et kast, skal vi addere det med den sum vi allerede har. 
    Vores "samletPoint" variable holder styr på hvor mange point vi allerede har, og "pointForKast" ændres for hvert tilfældigt tal vi generere
    Ved at bruge += tilføjer vi så den nye værdi fra "pointForKast" til "samletPoint". 
    */

    console.log( "\n Kast nr. : " + i + " ramte : " + pointForKast + ", Samlet Point = " + samletPoint);

    //For at udskrive resultatet i konsollen, laver vi en ny linje, tiløjer først kast nr "i" antal point for det kast "pointForKast" og summen af point "samletPoint" 
    
}

