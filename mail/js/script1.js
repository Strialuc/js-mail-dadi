/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email*/


// lista email 

const mailingList = [

    "luca@mail.it",
    "marco@mail.it",
    "giulia@mail.it",
    "alessia@mail.it",
    "mirko@mail.it",
    "franco@mail.it",
    "mattia@mail.it",
    "antonio@mail.it",
    "carmine@mail.it",
    "orlando@mail.it",
    "luigi@mail.it",
    "andrea@mail.it"
];

console.log(mailingList);

// richiesta email all'utente

const userMail = prompt("Inserisci la tua email")

console.log(userMail);


// check se l'email è presente nella lista

let guest=false

for (let i=0 ; i<= mailingList.length && guest === false; i++) {

    if (userMail === mailingList[i]) {

        guest= true;

        console.log("L' utente è in lista");
        

        alert("Sei in lista, Benvenuto alla festa!")
    } else {

        console.log("Utente non in lista");
        

        alert("Spiacente non sei stato invitato")
    }


    }

    



