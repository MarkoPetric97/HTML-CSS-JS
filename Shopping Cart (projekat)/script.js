//Globalna varijabla koja sluzi kao vreca u koju ce se smjestati brojevi
let allTotal = 0;

//Funckija nakon sto se klikne da dugme, parametar element odnosi se na dugme
function addToCart(element){
    //uimamo glavni element u kojem nam se nalaze sve potrebne informacije
    let mainEl = element.closest(".single-item");
    let price = mainEl.querySelector(".price").innerText;
    let name = mainEl.querySelector("h3").innerText;
    let quantity = mainEl.querySelector("input").value;

    //Uzimamo glavni element za cart-items u koji cemo da ubacimo neki HTML sadrzaj
    let cartItems = document.querySelector(".cart-items");

    if(parseInt(quantity) > 0){
        price = price.substring(1);
        price = parseInt(price);

        //Da bi total radio price mora da bude tipa number i da mu se ukloni $ pomocu substringa da bi se mogao pomnoziti
        let total = price * parseInt(quantity);
        allTotal += total;

        //Ubacivanje html elemenata preko JavaScript pomocu komande .innerHTML
        //Ubacivanje spana kod totala da bi uspjeli kasnije da ga uzmemo jer ce nam trebati za ukupni total koji ce se mijenjati allTotal
        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                    <button onClick="removeFromChart(this)">Ukloni</button>
                                </div>`;
               
        //Uzimanje elementa iz HTML-a preko napravljene klase .total i dodavanje teksta njemu
        document.querySelector(".total").innerText = `Total: $${allTotal}`                        

        //Dodavanje dugmetu tekst i iskljucivanje dugmeta preko parametra element
        element.innerText = "Dodato";
        element.setAttribute("disabled", "true");
    }else{
        alert("Unesi kolicinu")
    }
}

//Funkcija dugmeta da bi se uklonile stvari iz korpe i pri tome cijena da se oduzima
//Takodje potrebno je vratiti dugme na enable i vrijednosti povrca da se vrate na nulu
function removeFromChart(element){
    //Uzimanje svih elemenata unutar klase .cart-single-item koju smo napravili 
    let mainEl = element.closest(".cart-single-item");
    let price = mainEl.querySelector("p span").innerText;
    let name = mainEl.querySelector("h3").innerText;
    let vegetables = document.querySelectorAll(".single-item");

    price = parseInt(price);
    allTotal -= price;
   
    document.querySelector(".total").innerText = `Total: $${allTotal}`;

    mainEl.remove();

    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector(".si-content h3").innerText;

        if(itemName === name){
            vege.querySelector(".actions input").value = 0;
            vege.querySelector(".actions button").removeAttribute("disabled");
            vege.querySelector(".actions button").innerText = "Dodaj";
        }
    });   
}