const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhalistaDeItens = []

function adicionarNovaTarefa() {
    minhalistaDeItens.push(input.value)

    mostrarTarefas()
}

function mostrarTarefas () {    
    let novaLi = ''

 //   ['comprar café', 'estudar programacao']

     minhalistaDeItens.forEach((tarefa) => {
        novaLi = novaLi + `

            <li class="task">
                <img src="img/checked.png" alt="check">
                <p>${tarefa}</p>
                <img src="img/trash.png" alt="descarte">
            </li>

        `
    })

    listaCompleta.innerHTML = novaLi

}

button.addEventListener('click', adicionarNovaTarefa)