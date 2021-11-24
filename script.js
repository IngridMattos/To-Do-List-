function creatingList() {
  const imput = document.querySelector('#texto-tarefa').innerText;
  const list = document.querySelector('#lista-tarefas');
  const criandoLista = document.createElement('li')
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', function (evento){
        list.appendChild(criandoLista)
        criandoLista.innerText = imput;
    }
  });
}
window.onload = function () {
  creatingList();
}
