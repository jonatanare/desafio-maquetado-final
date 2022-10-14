import {getPostById} from '../api/services.js'

import { tagsTemplate } from '../js/templates.js';

const post = document.querySelector('#createPost');
const title = document.querySelector('.post__title');
const contenido = document.querySelector('.post__text');
const tags = document.querySelector('.post_tags');
const edit = document.querySelector('#btn-edit');
const deleteB = document.querySelector('#btn-delete');
const datePost = document.querySelector('.date');
let id;

async function getPost() {
    var url = new URL(window.location.href);
    id = url.searchParams.get("id");

    const post = await getPostById(id)
    const postJson = await post.json()
    const postParse = postJson.data.post

    console.log(postParse);

    var meses = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

      let dataPost =  new Date(postParse.createdAt);
      let dateUpdated = new Date(postParse.updatedAt)
    //   
      let formatDate = `${dataPost.getDate()} ${meses[dataPost.getMonth()]} ${dataPost.getFullYear()} • Updated on ${dateUpdated.getDate()} ${meses[dateUpdated.getMonth()]} ${dateUpdated.getFullYear()}`

    const imgCover = document.querySelector('.coverPost');
    const image = document.createElement('img');
    imgCover.appendChild(image);
    image.setAttribute('src', `${postParse.image}`)
    image.className = 'w-100 m-0 img-fluid';
    title.innerText = postParse.title;
    contenido.innerText = postParse.description;
    datePost.innerText = formatDate;
    tags.innerHTML = getTags(postParse);
}

getPost()

function getTags(post){
    let tagString = '';
    for (const etiqueta of post.hashtags) {
      tagString += tagsTemplate.replaceAll('@etiqueta@',etiqueta);
    }
    return tagString;
}