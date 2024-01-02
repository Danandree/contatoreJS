let contatore = 0;
let inizio = 0;
let incremento = 1;
let precision = 0;
let numeroContatore;
let btnContainer;

const container = document.getElementsByClassName("container")[0];
const numeroIncremento = document.getElementById("numeroIncremento");
const numeroIniziale = document.getElementById("numeroIniziale");
const settingsButton = document.getElementById("settingsButton");
const setContainer = document.getElementById("setContainer");

settingsButton.onclick = () => openSettings();  
container.onclick = () => updateNumber();

class settingsMenuListener{
    constructor(elemento){
        this._elemento = elemento;
        elemento.onclick = this.onClick.bind(this);
    }

    setInitialNumber(){
        let nuovoInizio = prompt("Immettere il nuovo numero di parternza del contatore");
        if(Number(nuovoInizio)){
            this.updateInizio(parseFloat(nuovoInizio));
        }
        else{
            alert("\"" + nuovoInizio + "\" non é un numero valido")
        }
    }
    resetInitialNumber(){
        this.updateInizio(0);
    }
    setNumber(){
        let nuovoIncremento = prompt("Immettere il nuovo numero di incremento");
        if(Number(nuovoIncremento)){
            let decimalStr = nuovoIncremento.toString().split('.')[1];
            if(decimalStr != undefined){
                this.updateIncremento(parseFloat(nuovoIncremento), decimalStr.length);
            }
            else{
                this.updateIncremento(parseFloat(nuovoIncremento), 0);
            }
        }
        else{
            alert("\"" + nuovoIncremento + "\" non é un numero valido")
        }
    }
    resetNumber (){
        this.updateIncremento(1,0);
    }
    updateIncremento(uInc, prec){
        incremento = uInc;
        precision = prec;
    }
    updateInizio(ini){
        inizio = ini;
        contatore = ini;
    }
    onClick(event){
        let azione = event.target.dataset.action;
        if(azione){
            this[azione]();
        }
    }
}
function updateNumber(){
    numeroContatore.innerHTML = contatore.toFixed(precision);
    numeroIniziale.innerHTML = inizio;
    numeroIncremento.innerHTML = incremento;
}

function openSettings(){
    if(setContainer.style.display === "none" || setContainer.style.display === ""){
        setContainer.style.display = "flex";
        settingsButton.innerHTML = "Chiudi parametri";
    }
    else{
        setContainer.style.display = "none";
        settingsButton.innerHTML = "Cambia parametri";
    }
}

function createElement(elemento, classe, inHtml){
    let nuovoElemento = document.createElement(elemento);
    nuovoElemento.className = classe;
    nuovoElemento.innerHTML = inHtml;
    return nuovoElemento;
}

function makeElements(){
    let titolo = createElement("h1", "titolo", "Contatore", container);
    container.insertBefore(titolo, settingsButton);
    numeroContatore = createElement("label", "numeroContatore", "", container);
    container.insertBefore(numeroContatore, settingsButton);
    btnContainer = createElement("div", "btnContainer", "", container);
    container.insertBefore(btnContainer, settingsButton);
    const operators = {
        "-" : () => contatore -= incremento,
        "Reset" : () => contatore = inizio,        
        "+" : () => contatore += incremento
        }
    for (key in operators){
        let button = createElement("div", "btn", key);
        btnContainer.appendChild(button);
        button.onclick = (parametro) => {operators[parametro.target.innerHTML]()};
    }
}

makeElements();
updateNumber();
new settingsMenuListener(setContainer);
