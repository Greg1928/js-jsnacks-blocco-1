let dispari = [];
for (let i = 1; i <= 6; i++){
    let x = Number(prompt("Inserisci numero"));
    if (x%2 != 0){
        dispari.push(x);
    }

}
console.log(dispari);
