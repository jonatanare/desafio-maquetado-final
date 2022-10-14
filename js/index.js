import { getPosts, deletePostById, getPostById } from "./conecction.js";
import * as login from "./login.js";
import { coverImageTemplate, postTemplate, tagsTemplate } from "./templates.js";

window.addEventListener("DOMContentLoaded", () => {
  loadPosts2();
});

const loadPosts2 = () => {
  const titles = document.querySelectorAll(".article__title");
  const wrapperArticles = document.querySelector(".wrapper-article");
  const wrapperTags = document.querySelector(".wrapper-tags");
  let cover = true;
  let coverImage;
  getPosts((posts) => { //te trae de la base de datos la lista de posts 
    posts.forEach((doc) => { //por cada post que me haga essto 
      const post = doc.data();
      coverImage = "";
      let etiquetas = post.tags;
      let tagString = "";
      for (const etiqueta of etiquetas) {
        tagString += tagsTemplate.replaceAll("@etiqueta@", etiqueta);
      }
      if (cover) {
        coverImage = coverImageTemplate.replaceAll("@coverImg@", post.cover);
        cover = false;
      }
      wrapperArticles.innerHTML += postTemplate
        .replace("@tags_replace@", tagString)
        .replaceAll("@posts_create_at@", post.create_at)
        .replaceAll("@posts_title@", post.title)
        .replaceAll("@doc_id@", doc.id)
        .replaceAll("@coverImage@", coverImage);
    });
  });
};

class Post {
  //generaremos un nuevo objeto del cual se crearán instancias

  constructor(title, description) {
    //método constructor(palabra reservada para las clases) -> tendrá los datos q la función constructora tiene
    this.title = title;
    this.description = description;
  }

  build(doc) {
    //método constructor(palabra reservada para las clases) -> tendrá los datos q la función constructora tiene
    this.title = doc.data().title;
    this.description = doc.data().description;
  }

  getPostElement() {
    let articleStr = postTemplate;
    articleStr = article.replace("@title@", this.title);
    const article = document.createElement(articleStr);
    return article;
  }
  async fillPostById(id) {
    const doc = await getPostById(id);
    this.build(doc);
  }

  deleteById(id) {
    deletePostById(id);
  }
}
