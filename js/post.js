import {deletePostById, getPostById} from './conecction.js'
import { tagsTemplate} from './templates.js'

const post = document.querySelector('#createPost');
const title = document.querySelector('.post__title');
const contenido = document.querySelector('.post__text');
const tags = document.querySelector('.post_tags');
const edit = document.querySelector('#btn-edit');
const deleteB = document.querySelector('#btn-delete');
const datePost = document.querySelector('.date');
let id;

window.addEventListener('DOMContentLoaded', async () => {
    var url = new URL(window.location.href);
    id = url.searchParams.get("id");
    const doc = await getPostById(id);
    let post = doc.data();
    const imgCover = document.querySelector('.coverPost');
    const image = document.createElement('img');
    imgCover.appendChild(image);
    image.setAttribute('src', `${post.cover}`)
    image.className = 'w-100 m-0 img-fluid';
    title.innerText = post.title;
    contenido.innerText = post.content;
    datePost.innerText = post.create_at;
    tags.innerHTML = getTags(post);
})

edit.addEventListener('click',  (event) => { //me redirecciona a html concatenando el id 
    event.preventDefault();
    window.location.href = 'new.html?id='+id;
});
deleteB.addEventListener('click',  (event) => { 
    event.preventDefault();
    const opcion = confirm("Are you sure you want to delete this Post?");
    if (opcion == true) {
        deletePostById(id);
	} 
});

function getTags(post){
    let tagString = '';
    for (const etiqueta of post.tags) {
      tagString += tagsTemplate.replaceAll('@etiqueta@',etiqueta);
    }
    return tagString;
}