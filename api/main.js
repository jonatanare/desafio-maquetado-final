import { getPosts } from "../api/services.js";
import { coverImageTemplate, postTemplate, tagsTemplate } from "../js/templates.js";


async function listPosts() {
  const titles = document.querySelectorAll(".article__title");
  const wrapperArticles = document.querySelector(".wrapper-article");
  const wrapperTags = document.querySelector(".wrapper-tags");
  let cover = true;
  let coverImage;
  const response = await getPosts();
  const dataJson = await response.json();
  const postJson = dataJson.data.posts;

  for (const index in postJson) {
    if (Object.hasOwnProperty.call(postJson, index)) {
      const post = postJson[index];
      coverImage = "";
      let etiquetas = post.hashtags;
      let arrTags = etiquetas.split(',')
      let tagString = "";
      for (const etiqueta of arrTags) {
        tagString += tagsTemplate.replaceAll("@etiqueta@", etiqueta);
      }
      if (cover) {
        coverImage = coverImageTemplate.replaceAll("@coverImg@", post.image);
        cover = false;
      }

      var meses = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

      let dataPost =  new Date(post.createdAt);
      let dateUpdated = new Date(post.updatedAt)
    //   • Updated on ${dateUpdated.getDate()} ${meses[dateUpdated.getMonth()]} ${dateUpdated.getFullYear()}
      let formatDate = `${meses[dataPost.getMonth()]} ${dataPost.getDate()}`

      wrapperArticles.innerHTML += postTemplate
        .replace("@tags_replace@", tagString)
        .replaceAll("@posts_create_at@", `${formatDate}`)
        .replaceAll("@posts_title@", post.title)
        .replaceAll("@doc_id@", post._id)
        .replaceAll("@coverImage@", coverImage);

      
    }
  }

  //console.log(postJson);
}

listPosts();
