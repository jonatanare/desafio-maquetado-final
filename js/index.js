import { getPosts } from "./conecction.js";

window.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".article__title");
  titles.forEach((h1) => {
    getPosts((post) => {
        post.forEach((doc) => {
          const posts = doc.data();
          h1.innerText = posts.title;
          
        });
    });
  })
  
});
