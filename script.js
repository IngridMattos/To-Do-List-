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

function changeColor() {
  const daddyli = document.querySelector('#lista-tarefas');
  daddyli.addEventListener('click', function (evento) {
    const findeLi = document.querySelector('.selected');
    if (findeLi) {
      findeLi.classList.remove('selected');
    }
    evento.target.classList.add('selected');
  });
}

window.onload = function () {
  creatingList();
  changeColor();
};
