 console.log('works')
//navBar 
const btnLogin = document.querySelector('#btn-login'); 
const btnCreate = document.querySelector('#btn-create');
const btnPost = document.querySelector('#btn-post');
const btnNotif= document.querySelector('#btn-notif');
const btnAvatar = document.querySelector('#btn-avatar');
const login = document.querySelector('#login')
const main = document.querySelector('#main')


btnLogin.addEventListener('click', (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    login.className += 'd-block'
    main.className = 'd-none'
    const email = document.querySelector('[type="email"]').value; //obteniendo datos de los inputs
    const pass = document.querySelector('[type="password"]').value;
  if(email === 'movebike@gmail.com' && pass ==='movebike'){
    login.className = 'd-none'
    main.className += 'd-block'
    btnLogin.className = 'd-none'
    btnCreate.className = 'd-none'

    } else{
        window.alert('Unable to login. Try again')   
    }

  /*   buttonX.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        login.className = 'd-block';
        list.className = 'd-none';
        buttonX.className = 'd-none';
        buttonAddTask.className = 'd-none';
    });  */
});

    /* buttonAddTask.addEventListener('click', (event) =>{
        event.preventDefault();
        event.stopPropagation();
        createLi('task',lista)
    })

    function createLi(text, ul) {
        const elementoLista = `<li>${text}</li>`
        ul.innerHTML += elementoLista;
        elementoLista.style.margin = 'auto';
        return elementoLista;
      }
 */