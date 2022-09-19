import {getFristPost} from './conecction.js'

const post = document.querySelector('#createPost');
const title = document.querySelector('.post__title');
const contenido = document.querySelector('.post__text');

window.addEventListener('DOMContentLoaded', async () => {
    const doc = await getFristPost("dvh4eXLzIREKGXVnVHNS");
    let post = doc.data();
    const imgCover = document.querySelector('.coverPost');
    const image = document.createElement('img');
    imgCover.appendChild(image);
    image.setAttribute('src', `${post.cover}`)
    image.className = 'w-100 m-0 img-fluid';
    title.innerText = post.title;
    contenido.innerText = post.content;
})

let  valorId = setId;

console.log(valorId);