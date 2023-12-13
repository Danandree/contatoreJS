let contatore = 0;
let inizio = 0;
let incremento = 1;
let precision = 0;

document.getElementById("numeroContatore").innerHTML = inizio;
document.getElementById("numeroIncremento").innerHTML = incremento;
document.getElementById("numeroIniziale").innerHTML = inizio;

document.getElementById("aumenta").onclick = () => {
    contatore += incremento;
    updateNumber();
}

document.getElementById("resetta").onclick = () => {
    contatore = inizio;
    updateNumber();
}

document.getElementById("diminuisci").onclick = () => {
    contatore -= incremento;
    updateNumber();
} 

document.getElementById("settingsButton").onclick = () => openSettings();  
document.getElementById("setNumeroIniziale").onclick = () => cambiaNumeroIniziale();
document.getElementById("setNumeroIncremento").onclick = () => cambiaIncremento();
document.getElementById("resetNumeroIncremento").onclick = ()=> updateIncremento(1,0);
document.getElementById("resetNumeroIniziale").onclick = ()=> updateInizio(0);

function updateNumber(){
    document.getElementById("numeroContatore").innerHTML = contatore.toFixed(precision);
    document.getElementById("numeroIniziale").innerHTML = inizio;
    document.getElementById("numeroIncremento").innerHTML = incremento;
}

function openSettings(){
    if(document.getElementById("setContainer").style.display === "none" || document.getElementById("setContainer").style.display === ""){
        document.getElementById("setContainer").style.display = "flex";
    }
    else{
        document.getElementById("setContainer").style.display = "none";
    }
}

function cambiaNumeroIniziale(){
    let nuovoInizio = prompt("Immettere il nuovo numero di parternza del contatore");
    if(Number(nuovoInizio)){
        updateInizio(parseFloat(nuovoInizio));
    }
    else{
        alert("\"" + nuovoInizio + "\" non é un numero valido")
    }
}

function cambiaIncremento(){
    let nuovoIncremento = prompt("Immettere il nuovo numero di incremento");
    if(Number(nuovoIncremento)){
        let decimalStr = nuovoIncremento.toString().split('.')[1];
        if(decimalStr != undefined){
            updateIncremento(parseFloat(nuovoIncremento), decimalStr.length);
        }
        else{
            updateIncremento(parseFloat(nuovoIncremento), 0);
        }
    }
    else{
        alert("\""+nuovoIncremento+"\" non é un numero valido")
    }
}
function updateIncremento(uInc, prec){
    incremento = uInc;
    precision = prec;
    updateNumber();
}

function updateInizio(ini){
    inizio = ini;
    contatore = ini;
    updateNumber();
}
