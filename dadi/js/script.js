

/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


// faccio generare i due numeri al pc 

const numPC = Math.floor(Math.random() * 6) + 1;

console.log("Il numero di Matrix e delle macchine è " + numPC);

const numUser = Math.floor(Math.random() * 6) + 1;

console.log("Neo il prescelto ha questo numero: " + numUser);


// Condizione per vincitore

if (numPC > numUser) {

    console.log("Matrix ha vinto!!!!");
    
} else if (numUser > numPC) {

    console.log("Neo il prescelto e il popolo della terra sono sopravvissuti!!!");
    
} else {
    console.log("Ci sarà una nuova battaglia da affrontare!!!");
    
}
