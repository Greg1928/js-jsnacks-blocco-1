const x = [];
const dispari = [];
let somma = 0;
for ( let i = 0; i<4; i++){
    x.push(Number(prompt("inserisci numero")));
}
console.log(x);
for ( let i = 0; i<4; i++){
    if( i%2 != 0){
        dispari.push(x[i]);
        somma += x[i];
    }
}
console.log(dispari);
console.log(somma);
