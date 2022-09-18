const buttonNewPost = document.querySelector( '.newPostButon' );
const newPostModal = document.querySelector( '#newPostModal' );
const btnNewPost = document.querySelector( '#btnNewPost' );
const btnSavePost = document.querySelector( '#btnSavePost');
const btnCancelPost = document.querySelector( '#btnCancelPost');




buttonNewPost.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation();
    
    const postStructureId = document.createElement( 'article' );
    const headerImg = document.createElement( 'img' );
    const ownerInfo = document.createElement( 'div' );    
    const ownerImg = document.createElement( 'img' );
    const ownerName = document.createElement( 'p' );
    const postDescription = document.createElement( 'p' );
    const postTitle = document.createElement( 'h1' );
    const postHashtags = document.createElement( 'p' );
    const postContent = document.createElement( 'p' );
    const postComments = document.createElement( 'div' );
    const postCommentsTitle = document.createElement( 'h2' );    
    const buttonSubscribe = document.createElement( 'button' );
    const userLogedComment = document.createElement( 'div' );
    const userLogedImg = document.createElement( 'img' );
    const userCommentInput = document.createElement( 'input' );
    const allComments = document.createElement( 'div' );

    btnNewPost.addEventListener('click', () => {
        newPostModal.style.display = 'block';
    });
    btnSavePost.addEventListener('click', () => {
        newPostModal.style.display = 'none';
    });
    btnCancelPost.addEventListener('click', () => {
        newPostModal.style.display = 'none';
    });
})