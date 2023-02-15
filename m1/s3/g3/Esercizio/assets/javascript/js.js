let lista = document.getElementById("lista");
let input = document.getElementById("testo");



function test() {
    let element = document.createElement("li");
    element.classList.add('task');
    element.textContent=input.value
    document.getElementById('lista').appendChild(element);
    let elimina= document.createElement('button');
    element.appendChild(elimina)
    elimina.innerHTML= 'X'
    elimina.addEventListener('click', testelimina, false);

    element.addEventListener('click',()=>{
        element.classList.add('selezionato')
    },false)

}

function testelimina() {
    let tasks = document.getElementsByClassName('task')

    for (i = 0; i < tasks.length; i++) {
        let cancellato = this.parentElement;     
        cancellato.style.display = "none";
        }


}


