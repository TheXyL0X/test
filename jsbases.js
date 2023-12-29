//let test = false; est un boolean
//let test = 12; est un int
//let test = "test"; est un string


//Concaténation avec guillements altgr+7

let chaine = "Bonjour";
let altgr = `${chaine}, comment allez vous ?`;

console.log(altgr);

// Types de données
let string = "Bonjour, comment allez vous ?"; //Vaut string
let number = 24; //Vaut number
let boolean = false; //Vaut un boolean false or true
//Tableau TOUJOURS AVCE UN CROCHET
let array = ["Bonjour", "Comment", "allez", "vous", 47, true];

//Objet TOUJOURS AVEC ACOLADES {}, n'a rien à voi avec un tableau
let object = {
    prenom: "Vincent",
    age: 34,
    ville: "Bordeaux"
}

let arbre; //On peut juste déclarer la variable pour la modifier plus tard 

//OPERATEURS
console.log(4+5); // Addition
console.log(4-5); // Soustraction
console.log(4/5); // Division
console.log(4*5); // Multiplication
// Puissance
console.log(4**5); // 4 puissance 5 (4x4x4x4x4)

// Opérateurs d'affectation
let total = 0;

total++; //++ incrémante 1, -- fait l'inverse
total += 5; // Ajoute +5 à total et permet d'éviter de faire total = total+5
// Pareil pour -=, *= etc...
console.log('Total :'.total);

//Structure de controle
let x = 2;
let y = 2;

if (x < y) alert("YES x est plus gros que Y"); //if else sur une seule ligne mais préférer avec {} quand même
// A faire : 
if(x > y ){
    // alert('X plus petit');
}else{
    // alert('X plus grand')
}

// savoir si une variable existe donc si elle est "true"
if(x){
    console.log('ok');
}
//Tester une égalité peu importe string, int ou boolean
if (x == y){
    console.log('Ils sont égaux')
}
// Tester une égalitée stricte, par exemple "0" string n'est pas égale à 0 int
if (x === y){
    console.log('Egaux strictement')
}

// || ou
// && et

// **Les fonctions**
function faireQuelqueChose(){
    console.log("Je fais un truc");
    console.log(5+6);
    alert('calcul terminé');
}

//Appeler la fonction en faisant faireQuelqueChose(); 

// Fonction fléchée (plus moderne)
const addition = (a, b) => {
    console.log(a+ b);
};

addition(15,20);
