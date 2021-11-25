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

function doubleClick() {
  const daddyli = document.querySelector('#lista-tarefas');
  daddyli.addEventListener('dblclick', function (evento) {
    const findeLi = document.querySelector('.completed');
    if (evento.target.className === 'completed selected') {
      findeLi.classList.remove('completed');
    } else {
      evento.target.classList.add('completed');
    }
  });
}
//Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild; https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
function deletButton() {
  const findeButton = document.querySelector('#apaga-tudo');
  findeButton.addEventListener('click', function () {
    const daddyli = document.querySelector('#lista-tarefas');
    while (daddyli.firstChild) {
      daddyli.removeChild(daddyli.firstChild);
    }
  });
}

function removeFinished() {
  const finished = document.querySelector('#remover-finalizados');
  finished.addEventListener('click', function () {
    const findeLi = document.querySelectorAll('.completed');
    for (let index = 0 ; index < findeLi.length; index += 1) {
      findeLi[index].remove();
    }
  });
}

window.onload = function () {
  creatingList();
  changeColor();
  doubleClick();
  deletButton();
  removeFinished();
};
