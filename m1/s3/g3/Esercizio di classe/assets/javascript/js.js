class TODOList {
    constructor() {
        this.tasks = []
        console.log('tasks', this.tasks)
    }

    aggiungiTask(task) {
        this.tasks.push(task);
        console.log('tasks', this.tasks);
        let target = document.getElementById('target');
        let p = document.createElement('p');
        p.appendChild(document.createTextNode(task));
        target.appendChild(p);
        p.addEventListener('click', (e) => {
            this.concludiTask(task);
       remove();
        }    )
    }

    concludiTask(task) {
        console.log(`${task} completato!`);
        const index = this.tasks.indexOf(task)
    }

    generaNuovoTask(task){
        
    }
}



const newtaskBtn = document.getElementById('bottonewtask');
const clearBtn = document.getElementById('bottonecancella');
const input = document.getElementById('testo');

const todoList = new TODOList()


newtaskBtn.addEventListener('click', () => {
    console.log('aggiungitask');
    todoList.aggiungiTask(input.value);
});


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {

        input.value = ""
    }
})


const TODOList1 = new TODOList()
TODOList1.aggiungiTask
TODOList1.rimuoviTask
TODOList1.pulisci

