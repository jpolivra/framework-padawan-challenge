const listaDePosts = document.querySelector("#postsList");

const carregarPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonPosts = await res.json();
    gerarPosts(jsonPosts);
    console.log(jsonPosts);
  } catch (err) {
    console.log(err);
  }
};

const gerarPosts = (posts) => {
  const htmlString = posts
    .map((post) => {
      return `
        <li class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </li>
    `;
    })
    .join("");
  listaDePosts.innerHTML = htmlString;
};

carregarPosts();
console.log(listaDePosts);
