const kunde = ["A.C. Hansen", "Peters cykler", "De Franske Oste"];

const kunde1 = {
  navn: kunde[0],
  adresse: "Hovedgade 12, 1000 København",
  kontaktperson: "Anders Hansen",
  email: "ahansen@example.com",
  username: "achansen",
  password: "sikkerKode123"
};

const kunde2 = {
  navn: kunde[1],
  adresse: "Cykelgade 5, 2000 Frederiksberg",
  kontaktperson: "Peter Jensen",
  email: "pjensen@cykler.dk",
  username: "peterscykler",
  password: "cykel123"
};

const kunde3 = {
  navn: kunde[2],
  adresse: "Ostebakken 8, 3000 Helsingør",
  kontaktperson: "Francois Dupont",
  email: "fdupont@oste.dk",
  username: "deFranskeOste",
  password: "ostLover2024"
};

function modificerKunde(kundeObjekt, kundeAttribut, nyVærdi) {
    kundeObjekt[kundeAttribut] = nyVærdi;
}
modificerKunde (kunde1,"navn", 120);
console.log(kunde1);