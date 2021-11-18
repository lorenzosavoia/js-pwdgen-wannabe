// Descrizione esercizio:
//1 Chiedi all’utente il suo nome,
//2 poi chiedi il suo cognome,
//3 poi chiedi il suo colore preferito
//4 Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiedo il nome all'utente
let userName = prompt("Name");
console.log('Name: ' + userName);

// chiedo il cognome all'utente
let surname = prompt("Surname");
console.log('Surname: ' + surname);

// chiedo il colore preferito all'utente
let favouriteColour = prompt("What's your favourite colour? ");
console.log('favourite colour: ' + favouriteColour);

// let number = 21;

// chiedo il numero preferito all'utente
let favoriteNumber = prompt("What is your favorite number?")
console.log('favorite number: ' + favoriteNumber);

// sommo 5 al numero preferito
let somma = parseInt(favoriteNumber) + 5;
console.log('Favorite Number: ' + somma);

// calcolo per generare la password
let password = userName + surname + favouriteColour + somma;
console.log('password: ' + password);
document.getElementById('password').innerHTML = '<h1>' + password + '</h1>';