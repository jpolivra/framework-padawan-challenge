const todosList = document.querySelector("#todosList");
const searchBar = document.getElementById("searchBar");
const selectDropdown = document.getElementById("state");
let atividades = [];

searchBar.addEventListener("keyup", (e) => {
  const searchStr = e.target.value.toLowerCase();
  const filteredAtividades = atividades.filter((atividade) => {
    return atividade.title.toLowerCase().includes(searchStr);
  });
  gerarAtividades(filteredAtividades);
});

selectDropdown.addEventListener("change", (e) => {
  const filterStr = e.target.value.toLowerCase();
  if (filterStr == "todos") {
    gerarAtividades(atividades);
  } else {
    const filteredStates = atividades.filter((atividade) => {
      return atividade.completed.toString().toLowerCase().includes(filterStr);
    });
    gerarAtividades(filteredStates);
  }
});

const carregarAtividades = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    atividades = await res.json();
    gerarAtividades(atividades);
  } catch (err) {
    console.log(err);
  }
};

const verifyTruth = (verificador) => {
  if (verificador == true) {
    return `<span style="color: green;">Concluída</span>`;
  } else {
    return `<span style="color: red;">Pendente</span>`;
  }
};

const gerarAtividades = (atividades) => {
  const htmlString = atividades
    .map((atividade) => {
      return `
        <li class="todo-item">
            <a href="#" class="todo-title">${atividade.title}</a>
            <div class="todo-divisor"></div>
            <p class="todo-subtitle">Estado atual: ${verifyTruth(
              atividade.completed
            )}</p>
        </li>
    `;
    })
    .join("");
  todosList.innerHTML = htmlString;
};

carregarAtividades();
