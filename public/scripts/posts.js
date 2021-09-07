const listaDePosts = document.querySelector("#postsList");
const searchBar = document.getElementById("searchBar");
let postList = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredPosts = postList.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchString) ||
      post.body.toLowerCase().includes(searchString)
    );
  });
  gerarPosts(filteredPosts);
});

const carregarPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    postList = await res.json();
    gerarPosts(postList);
  } catch (err) {
    console.log(err);
  }
};

const gerarPosts = (posts) => {
  const htmlString = posts
    .map((post) => {
      return `
        <li class="post">
            <a href="#" class="title">${post.title}</a>
            <div class="border transition"></div>
            <p>${post.body}</p>
        </li>
    `;
    })
    .join("");
  listaDePosts.innerHTML = htmlString;
};

carregarPosts();
console.log(listaDePosts);
