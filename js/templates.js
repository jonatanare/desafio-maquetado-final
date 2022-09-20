export const postTemplate = `
<article class="article article-single card mb-2">
@coverImage@
<div class="px-4 pt-3">
    <div class="d-flex ">
        <div class="d-flex align-items-center me-0">
            <img class="article__autor rounded-circle" src="/assets/home/avatar-home.webp" alt="">
                </div>
                <div class=" ms-2 "> 
                    <p class=" btn article__down name mb-0 p-1">Movebike</p>
            <label class="date d-block ms-1">@posts_create_at@</label>
        </div>
    </div>
    <div class="identation p-3 ms-3 pt-2 wrapper-tags">
        <a class="article__link" href="./post.html?id=@doc_id@">
            <h2 class="article__title">@posts_title@
            </h2>
        </a>
        <div class="article d-flex ">
            @tags_replace@
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

export const tagsTemplate = `<a class="btn article__btn article__btn--@etiqueta@">
            <span> @etiqueta@</span>
          </a>`;
          

export const coverImageTemplate = `<div>
    <img class="w-100 m-0" src="@coverImg@" alt="">
</div>`;