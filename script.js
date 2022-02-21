
const firstName = prompt("Come ti chiami?");
console.log(firstName);

const secondName = prompt("Qual è il tuo cognome?");
console.log(secondName);

const color = prompt("Qual è il tuo colore preferito?");
console.log(color);


document.getElementById("password").innerHTML = firstName + secondName + color + "21";
