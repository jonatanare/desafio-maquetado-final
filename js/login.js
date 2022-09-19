
//LOG-IN
const btnLogin = document.querySelector('#btn-login'); 
const btnCreate = document.querySelector('#btn-create');
const btnPost = document.querySelector('#btn-post');
const btnNotif= document.querySelector('#btn-notif');
const btnAvatar = document.querySelector('#btn-avatar');
const login = document.querySelector('#login')
const main = document.querySelector('#main')
const btnContinue = document.querySelector('#btn-continue')



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
  if(email === 'movebike@gmail.com' && pass ==='movebike'){
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



 
  