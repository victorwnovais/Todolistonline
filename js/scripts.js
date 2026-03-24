const button = document.querySelector('.button-add-task')
const input =document.querySelector('.input-task')

let minhalistaDeItens =[]

function adicionarNovaTarefa () {
    minhalistaDeItens.push(input.value)

    mostrarTarefas

}

function mostrarTarefas () {
    
    let novaLi 

 //           <li class="task">
 //               <img src="img/checked.png" alt="check">
 //               <p>adicionado</p>
 //               <img src="img/trash.png" alt="descarte">
 //               <p>Feito!</p>
 //           </li>
}


button.addEventListener('click',adicionarNovaTarefa )