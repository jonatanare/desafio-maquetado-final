import { getPosts } from "./conecction.js";

<<<<<<< HEAD


btnLogin.addEventListener('click', (event) => {
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
})



 
  
=======
window.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".article__title");
  titles.forEach((h1) => {
    getPosts((post) => {
        post.forEach((doc) => {
          const posts = doc.data();
          h1.innerText = posts.title;
          
        });
    });
  })
  
});
>>>>>>> develop
