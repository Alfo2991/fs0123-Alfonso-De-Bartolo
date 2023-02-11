let risultato1 = document.getElementById("mostratesto");

function scrivivalore(numberOrSymbol){

    risultato1.value += numberOrSymbol;

}

function cancella(){

    risultato1.value = risultato1.value.slice(0,-1);

}


function risultato(){
 
    risultato1.value = eval(risultato1.value)

}