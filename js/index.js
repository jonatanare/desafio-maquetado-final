import { getPosts } from "./conecction.js";
import * as login from "./login.js";

/*btnLogin.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    login.className += 'd-block'
    main.className = 'd-none'
})

btnContinue.addEventListener('click', (event) =>{
    event.preventDefault(); 
    event.stopPropagation(); 
    const email = document.querySelector('[type="email"]').value; 
    const pass = document.querySelector('[type="password"]').value;
  if(email === 'movebike@gmail.com' && pass ==='movebike@gmail.com'){
    login.className = 'd-none'
    main.className += 'd-block'
    btnLogin.className = 'd-none'
    btnCreate.className = 'd-none'
    btnPost.className += 'd-block'
    btnNotif.className += 'd-block'
    btnAvatar.className += 'd-block'
}else{
    window.alert('Unable to login. Try again')   
} 
})*/

window.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".article__title");
  const wrapperArticles = document.querySelector(".wrapper-article");
  const wrapperTags = document.querySelector(".wrapper-tags");
  getPosts((post) => {
    post.forEach((doc) => {
      let idPost = doc.id;
      const posts = doc.data();

      let etiquetas = posts.tags;

        for (const etiqueta of etiquetas) {
          let tag = `
          <a class="btn article__btn article__btn--beginners">
            <span>#</span> ${etiqueta}
          </a>
          `;

          console.log(tag);
        }

      let article = `
          <article class="article article-single card mb-2">
          <div class="px-4 pt-3">
              <div class="d-flex ">
                  <div class="d-flex align-items-center me-0">
                      <img class="article__autor rounded-circle" src="/assets/home/autor3.webp" alt="">
                          </div>
                          <div class=" ms-2 "> 
                              <p class=" btn article__down name mb-0 p-1">Daniel</p>
                      <label class="date d-block ms-1">${posts.create_at}</label>
                  </div>
              </div>
              <div class="identation p-3 ms-3 pt-2 wrapper-tags">
                  <a class="article__link" href="post.html" onclick="setIdPost(${idPost})">
                      <h2 class="article__title">${posts.title}
                      </h2>
                  </a>
                  <div class="article d-flex ">
                      <a class="btn article__btn article__btn--beginners">
                          <span>#</span>begginers
                      </a>
                      <a class="btn article__btn article__btn--productivity">
                          <span>#</span>productivity
                      </a>


                  </div>
                  <div class="py-2 pb-0 d-flex justify-content-between">
                      <div>
                          <a class="btn article__down">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img"
                                  aria-labelledby="ad12gw0m6d11o0gx9hm3b4snwzz5rj70" class="crayons-icon">
                                  <title id="ad12gw0m6d11o0gx9hm3b4snwzz5rj70">Reactions</title>
                                  <path
                                      d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z">
                                  </path>
                              </svg>
                              2 reactions
                          </a>
                          <a class="btn article__down">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img"
                                  aria-labelledby="anjovkr8u7turzmmcr1ekle3dz6trdhz" class="crayons-icon">
                                  <title id="anjovkr8u7turzmmcr1ekle3dz6trdhz">Comments</title>
                                  <path
                                      d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                  </path>
                              </svg>
                              Add Comment
                          </a>
                      </div>
                      <div>
                          <span>6 min read</span>
                          <a class="btn article__btn article__btn--save m-1">Save</a>

                      </div>
                  </div>
              </div>
          </div>
      </article>
          `;
      wrapperArticles.innerHTML += article;
      
    });
  });
});

setIdPost(id) = () => {
  let setId = id
}
