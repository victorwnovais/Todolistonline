const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhalistaDeItens = []

function adicionarNovaTarefa() {
    minhalistaDeItens.push({
            tarefa: input.value,
                concluida: false
        })

    mostrarTarefas()
}

function mostrarTarefas () {    
    let novaLi = ''

 //   ['comprar café', 'estudar programacao']

     minhalistaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `

            <li class="task ${item.concluida && "done"}">
                <img src="img/checked.png" alt="check" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="img/trash.png" alt="descarte" onclick="deletarItem(${posicao})">
            </li>

        `
    })

    listaCompleta.innerHTML = novaLi

localStorage.setItem('lista', JSON.stringify(minhalistaDeItens))

}

function concluirTarefa(posicao){
    minhalistaDeItens[posicao].concluida = !minhalistaDeItens[posicao].concluida

    mostrarTarefas()
}

function deletarItem(posicao) {
    minhalistaDeItens.splice(posicao, 1)
    console.log(posicao)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
    minhalistaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    
    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)