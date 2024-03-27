const inputTarefa = document.querySelector(".input-tarefa");
const btnAdcTarefa = document.querySelector(".adc-tarefa");
const listaTarefa = document.querySelector(".lista-tarefa");

const adicionaTarefasSalvas = () => {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);
  for (let tarefa of listaDeTarefas) {
    criarTarefa(tarefa);
  }
};

const salvarTarefa = () => {
  const liTarefas = listaTarefa.querySelectorAll("li");
  const liDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    liDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(liDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
};

const criarLi = () => {
  const li = document.createElement("li");
  listaTarefa.appendChild(li);
  return li;
};

const criarBtn = (li) => {
  li.innerText += " ";
  const btnApagar = document.createElement("button");
  btnApagar.innerText = "Apagar";
  // btnApagar.classList.add("apagar");
  // btnApagar.setAttribute("title", "Apagar");
  btnApagar.setAttribute("class", "apagar");
  li.appendChild(btnApagar);
};

const limpaInput = () => {
  inputTarefa.value = "";
  inputTarefa.focus();
};

const criarTarefa = (tarefa) => {
  const li = criarLi();
  li.innerHTML = tarefa;
  criarBtn(li);
  limpaInput();
  salvarTarefa();
};

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 && inputTarefa.value) {
    criarTarefa(inputTarefa.value);
  }
});

btnAdcTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefa();
  }
});
adicionaTarefasSalvas();
