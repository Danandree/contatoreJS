let contatore = 0;

document.getElementById("aumenta").onclick = function(){
    contatore +=1;
    updateNumber();
}

document.getElementById("resetta").onclick = function(){
    contatore = 0;
    updateNumber();
}

document.getElementById("diminuisci").onclick = function(){
    contatore -=1;
    updateNumber();
} 

function updateNumber(){
    document.getElementById("numeroContatore").innerHTML = contatore;
}