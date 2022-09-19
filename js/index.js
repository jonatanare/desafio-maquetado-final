import { getPosts, deletePostById, getPostById} from "./conecction.js";
import * as login from './login.js'





 
  
window.addEventListener("DOMContentLoaded", () => {
  loadPosts();
  
  
});


const loadPosts2 = () =>{
  const titles = document.querySelectorAll(".article__title");
  titles.forEach((h1) => {
    getPosts((post) => {
        post.forEach((doc) => {
          const posts = doc.data();
          h1.innerText = posts.title;
          
        });
    });
  })
}

const loadPosts = () =>{
  const titles = document.querySelectorAll(".article__title");
  const articles = document.querySelectorAll("#articles");
  let p;
  getPosts((posts) => {
      posts.forEach((doc) => {
        p = new Post(doc);
        const articleElement = p.getArticle();
        articles.appendChild();
      });
  });
}


class Post{ //generaremos un nuevo objeto del cual se crearán instancias 
    
  constructor(title, description){ //método constructor(palabra reservada para las clases) -> tendrá los datos q la función constructora tiene
    this.title = title;
    this.description = description;
  }

  
  build(doc){ //método constructor(palabra reservada para las clases) -> tendrá los datos q la función constructora tiene
    this.title = doc.data().title;
    this.description = doc.data().description;
  }
  
  constructor(doc){ //método constructor(palabra reservada para las clases) -> tendrá los datos q la función constructora tiene
    this.build(doc);
  }

  getPostElement(){
      let articleStr = postTemplate;
      articleStr = article.replace('@title@',this.title);
      const article = document.createElement(articleStr);
      return article;
  }
  async fillPostById(id){
    const doc = await getPostById(id)
    this.build(doc);
  }

  deleteById(id){
    deletePostById(id);
  }

}




