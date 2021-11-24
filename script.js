function creatingList() {
  const imput = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', function () {
    const criandoLista = document.createElement('li');
    list.appendChild(criandoLista);
    criandoLista.textContent = imput.value;
    imput.value = '';
  });
}
window.onload = function () {
  creatingList();
};
