//Dogadjaj na pritisak dugmeta na window prozoru
window.addEventListener("keydown", (event) =>{
    //u atributima pritisnutog dugmeta moze se naci keyCode njegov preko kojeg raspozajemo dugmad
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);
    
    if(!keyElement) return;

    let audio = document.querySelector(`audio[data-key = "${code}"]`);
    audio.currentTime = 0;
    audio.play();
})