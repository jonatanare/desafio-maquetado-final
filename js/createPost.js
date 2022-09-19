const createPost = document.querySelector('#create-post')
const main = document.querySelector('#main')
const btnCreate = document.querySelector('#btn-post');
const header = document.querySelector('#header');
const footer = document.querySelector('#footer');
const btnX = document.querySelector('#btn-X')


btnCreate.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    createPost.className = 'd-block';
    main.className = 'd-none';
    header.className = 'd-none';
    footer.className = 'd-none';
});


btnX.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    createPost.className = 'd-none';
    main.className += 'd-block';
    header.className += 'd-block';
    footer.className += 'd-block';
});












/* const body = document.querySelector( 'body' );

function postBuilder( postStructureId, headerImg, ownerImg, ownerName, postDescription, postTitle, postHashtags, postContent, postComments, postCommentsTitle, buttonSubscribe, userLogedComment, userLogedImg, userCommentInput, allComments ){
    const postStructureId = document.createElement( 'article' );
    const headerImg = document.createElement( 'img' );
    const ownerInfo = document.createElement( 'div' );    
    const ownerImg = document.createElement( 'img' );
    const ownerName = document.createElement( 'p' );
    const postDescription = document.createElement( 'p' );
    const postTitle = document.createElement( 'h1' );
    const postHashtags = document.createElement( 'p' );
    const postContent = document.createElement( 'p' );
    const postcComments = document.createElement( 'div' );
    const postCommentsTitle = document.createElement( 'h2' );    
    const buttonSubscribe = document.createElement( 'button' );
    const userLogedComment = document.createElement( 'div' );
    const userLogedImg = document.createElement( 'img' );
    const userCommentInput = document.createElement( 'input' );
    const allComments = document.createElement( 'div' );

    article.id = postStructureId;
    headerImg.src = headerImg;
    ownerInfo.class = 'ownerInfo';
    ownerImg,src = ownerImg;
    ownerName.class = 'OnerName';
    ownerName.innerText = postowner;
    postDescription = postDescription;  
    h1.innerText = postTitle;
    postHashtags = postHashtags;
    postContent. innerText = postComment;
    h2. innerText = postCommentsTitle;
    postComments.class = 'postComments';
    buttonSubscribe.class = 'buttonSubscribe';
    userLogedComment.class = 'userLoged';
    userLogedComment = userLogedComment;
    userLogedImg.scr = userLogedImg;
    userCommentInput.class = 'userComment';
    allComments.class = 'commentsArea';

    article.appendchild( headerImg, ownerInfo, ownerImg,
        ownerName, postDescription, h1, postHashtags, postBody, postContent, h2, buttonSubscribe, userLogedComment, userCommentInput, allComments );

    ownerInfo.appendchild( ownerImg, ownerName, postDescription ); 
    
    postComments.appendchild( buttonSubscribe,userLogedComment, userLogedImg, userCommentInput );

} */