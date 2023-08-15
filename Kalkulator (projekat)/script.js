function inflationCalculator(){

    let stopaRasta = document.getElementById("stopaRasta");
    let novac = document.getElementById("novac");
    let godine = document.getElementById("godine");

    //parseFloat sluzi za pretvaranje stringa u broj sa zarezom
    stopaRasta = parseFloat(stopaRasta.value);
    novac = parseFloat(novac.value);
    godine = parseFloat(godine.value);

    //formula za izracunavanje inflacije za prvu godinu
    let vrijednost = novac + (novac * (stopaRasta / 100));

    //formula za izracunavanje inflacije za ostale godine
    for(let i = 1; i < godine; i++){
        vrijednost += vrijednost * (stopaRasta / 100);
    }   
    
    vrijednost = vrijednost.toFixed(2);

    let noviElement = document.createElement("div");
    noviElement.className = "nova-vrijednost";
    noviElement.innerText = `Današnjih ${novac}€ vrijedi isto kao ${vrijednost}€ za ${godine} godina.`;
                           
    document.querySelector(".container").appendChild(noviElement);
}


