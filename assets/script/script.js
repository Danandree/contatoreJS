let contatore = 0;
let inizio = 0;
let incremento = 1;
let precision = 0;
let numeroContatore;

const container = document.getElementsByClassName("container")[0];
const settingsButton = document.getElementById("settingsButton");
const setContainer = document.getElementById("setContainer");

settingsButton.onclick = () => openSettings();  
container.onclick = () => updateNumber();

class settingsMenuListener{
    constructor(elemento){
        this._elemento = elemento;
        elemento.onclick = this.onClick.bind(this);
    }
    setInitialNumber(innerHTML){
        if(innerHTML === "Set"){
                let nuovoInizio = prompt("Immettere il nuovo numero di parternza del contatore");
            if(Number(nuovoInizio)){
                this.updateInizio(parseFloat(nuovoInizio));
            }
            else{
                alert("\"" + nuovoInizio + "\" non é un numero valido")
            }
        }
        else{
            this.updateInizio(0);
        }
    }
    setIncrementNumber(innerHTML){
        if(innerHTML === "Set"){
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
        } else {
            this.updateIncremento(1,0);
        }
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
        let innerHTML = event.target.innerHTML;
        if(azione){
            this[azione](innerHTML);
        }
    }
}
function updateNumber(){
    numeroContatore.innerHTML = contatore.toFixed(precision);
    document.getElementById("numeroIniziale").innerHTML = inizio;
    document.getElementById("numeroIncremento").innerHTML = incremento;
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
function createElement(elemento, classe, inHtml, mainContainer, containerAfter = null){
    let nuovoElemento = document.createElement(elemento);
    nuovoElemento.className = classe;
    nuovoElemento.innerHTML = inHtml;
    if(containerAfter){
        mainContainer.insertBefore(nuovoElemento, containerAfter);
    }
    else{
        mainContainer.appendChild(nuovoElemento);
    }
    return nuovoElemento;
}
function makeElements(){
    numeroContatore = createElement("label", "numeroContatore", "", container, settingsButton);
    let btnContainer = createElement("div", "btnContainer", "", container, settingsButton);
    const pulsantiContatore = {
        "-" : () => contatore -= incremento,
        "Reset" : () => contatore = inizio,        
        "+" : () => contatore += incremento
        }
    for (key in pulsantiContatore){
        let button = createElement("button", "btn", key, btnContainer);
        button.onclick = (parametro) => {pulsantiContatore[parametro.target.innerHTML]()};
    }
}

makeElements();
updateNumber();
new settingsMenuListener(setContainer);
