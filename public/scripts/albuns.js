const albunsLista = document.querySelector("#albunsLista"); //
const searchBar = document.getElementById("searchBar");
let lista = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredAlbuns = lista.filter((album) => {
    return album.title.toLowerCase().includes(searchString);
  });
  gerarAlbuns(filteredAlbuns);
});

const carregarAlbuns = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    lista = await res.json();
    gerarAlbuns(lista);
  } catch (err) {
    console.log(err);
  }
};

const gerarInteiro = () => {
  return Math.floor(Math.random() * (200 - 1) + 1);
};

const gerarAlbuns = (albuns) => {
  const htmlString = albuns
    .map((album) => {
      return `
        <li class="album-item">
            <a href="#" class="title">${album.title}</a>
            <div class="albuns-x"></div>
            <p class="album-sub">Quantidade de fotos: ${gerarInteiro()}</p>
        </li>
    `;
    })
    .join("");
  albunsLista.innerHTML = htmlString;
};

carregarAlbuns();
console.log(albunsLista);
