// Voici quelques exemples d'exercices sur les switchs en JavaScript :

// 1. Écrivez un programme qui demande à l'utilisateur de saisir un chiffre de 1 à 7 et affiche le jour de la semaine correspondant (par exemple, 1 pour lundi, 2 pour mardi, etc.). Utilisez un switch pour résoudre ce problème.

// 2. Écrivez un programme qui demande à l'utilisateur de saisir un chiffre de 1 à 12 et affiche le mois de l'année correspondant (par exemple, 1 pour janvier, 2 pour février, etc.). Utilisez un switch pour résoudre ce problème.

// 3. Écrivez un programme qui demande à l'utilisateur de saisir une note de 0 à 100 et affiche la lettre de grade correspondante (par exemple, A pour une note supérieure ou égale à 90, B pour une note supérieure ou égale à 80, etc.). Utilisez un switch pour résoudre ce problème.

// 4. Écrivez un programme qui demande à l'utilisateur de saisir un caractère et affiche s'il s'agit d'une voyelle ou d'une consonne. Utilisez un switch pour résoudre ce problème.

// 5. Écrivez un programme qui demande à l'utilisateur de saisir un nombre entier et affiche s'il est positif, négatif ou nul. Utilisez un switch pour résoudre ce problème.

// 6. Écrivez un programme qui demande à l'utilisateur de saisir un caractère et affiche s'il est une majuscule, une minuscule ou un autre caractère. Utilisez un switch pour résoudre ce problème.

// 6. Écrivez un programme qui demande à l'utilisateur de saisir un mot et affiche s'il est un palindrome (un mot qui se lit de la même manière dans les deux sens, comme "radar" ou "level"). Utilisez un switch pour résoudre ce problème.

// 1 // 

let chiffre = prompt(" Ecrivez un chiffre entre 1 et 7 :");

switch (chiffre) {
    case "1":
        console.log("Lundi");
        break;
    case "2":
        console.log("Mardi");
        break;
    case "3":
        console.log("Mercredi");
        break;
    case "4":
        console.log("Jeudi");
        break;
    case "5":
        console.log("Vendredi");
        break;
    case "6":
        console.log("Samedi");
        break;
    case "7":
        console.log("Dimanche");
        break;
    default:
        console.log(" Valeur non autorisée ");
}

// // // 2 //

let mois = prompt("Ecrivez un chiffre entre 1 et 12 :");

switch (mois) {
    case "1":
        console.log("Janvier");
        break;
    case "2":
        console.log("Février");
        break;
    case "3":
        console.log("Mars");
        break;
    case "4":
        console.log("Avril");
        break;
    case "5":
        console.log("Mai");
        break;
    case "6":
        console.log("Juin");
        break;
    case "7":
        console.log("Juillet");
        break;
    case "8":
        console.log("Août");
        break;
    case "9":
        console.log("Septembre");
        break;
    case "10":
        console.log("Octobre");
        break;
    case "11":
        console.log("Novembre");
        break;
    case "12":
        console.log("Décembre");
        break;
    default:
        console.log(" Valeur non autorisée ");
}

// // 3 //

let note = prompt("Indiquer une valeur entre 0 et 100 :");

switch (true) {
    case (note >= 90):
        console.log(" A ");
        break;
    case (note >= 80):
        console.log(" B ");
        break;
    case (note >= 70):
        console.log(" C ");
        break;
    case (note >= 60):
        console.log(" D ");
        break;
    case (note >= 0):
        console.log(" E ");
        break;
    default:
        console.log(" Valeur non autorisée");
}

// // 4 //

let voyelle = prompt(`Ecrire une lettre`)

switch (voyelle) {
    case "a":
        console.log("Ceci est une voyelle")
        break;
    case "e":
        console.log("Ceci est une voyelle")
        break;
    case "i":
        console.log("Ceci est une voyelle")
        break;
    case "o":
        console.log("Ceci est une voyelle")
        break;
    case "u":
        console.log("Ceci est une voyelle")
        break;
    case "y":
        console.log("Ceci est une voyelle")
        break;
    default:
        console.log("Ceci est une consonne")
}

// 5 //

let entier = prompt("Indiquer une valeur  :");

switch (true) {
    case entier > 0:
        console.log(" Positif ");
        break;
    case entier < 0:
        console.log(" Négatif ");
        break;
    case entier == 0:
        console.log(" Nulle ");
        break;
    default:
}

// 6 //


const nombre = parseInt(prompt("Entrez un nombre entier : "));

switch (true) {
    case nombre > 0:
        console.log("Le nombre est positif.");
        break;
    case nombre < 0:
        console.log("Le nombre est négatif.");
        break;
    case nombre === 0:
        console.log("Le nombre est nul.");
        break;
}

// 7 //


const caractere = prompt("Entrez un caractère : ");

switch (true) {
    case caractere.toUpperCase() === caractere:
        console.log("Le caractère est une majuscule.");
        break;
    case caractere.toLowerCase() === caractere:
        console.log("Le caractère est une minuscule.");
        break;
    default:
        console.log("Le caractère est un autre caractère.");
}

// 8 //


const mot = prompt("Entrez un mot : ");

switch (true) {
    case mot === mot.split("").reverse().join(""):
        console.log("Le mot est un palindrome.");
        break;
    default:
        console.log("Le mot n'est pas un palindrome.");
}