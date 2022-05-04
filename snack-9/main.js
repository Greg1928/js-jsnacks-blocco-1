let x = [];
let y = [];

let arrayLenght = prompt("inseriesci lunghezza primo array: (MAX 10)");
if (arrayLenght > 10){
    alert("Numero troppo grande!");
} else {
    for ( let i = 0; i<arrayLenght; i++){
        x.push(Number(prompt("inserisci numero per l'array di " + arrayLenght + " elementi")));
    }
}
console.log(x, arrayLenght)


let array2Lenght = prompt("inseriesci lunghezza diversa da " + arrayLenght + " per secondo array : (MAX 10)");

if ((array2Lenght === arrayLenght) || (array2Lenght > 10)){
    alert("Troppo Grande o Uguale!");
    window.location.reload();
}else {
    for ( let i = 0; i<array2Lenght; i++){
        y.push(Number(prompt("inserisci numero per l'array di " + array2Lenght + " elementi")));
    }
}
console.log(y, array2Lenght)

if ( x.length > y.length ){
    for ( let i = 0; i<arrayLenght-array2Lenght; i++){
        y.push(Number(prompt("inserisci " + (x.length - y.length) + " numero/i per l'array di " + array2Lenght + " elementi per arrivare a " + arrayLenght + " elementi")));
}}else {
    for ( let i = 0; i<array2Lenght-arrayLenght; i++){
        x.push(Number(prompt("inserisci " + (y.length - x.length) + " numero/i per l'array di " + arrayLenght + " elementi per arrivare a " + array2Lenght + " elementi")));
}}

console.log(x);
console.log(y);