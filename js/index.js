import{saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask} from './firebase.js'

//navBar 
const btnLogin = document.querySelector('#btn-login'); 
const btnCreate = document.querySelector('#btn-create');
const btnPost = document.querySelector('#btn-post');
const btnNotif= document.querySelector('#btn-notif');
const btnAvatar = document.querySelector('#btn-avatar');


btnLogin.addEventListener('click', (event) => {
    event.preventDefault(); //para detener q otros eventos se ejecuten
    event.stopPropagation(); //se esucha solo una vez y se deja de escuchar
    const email = document.querySelector('[type="email"]').value; //obteniendo datos de los inputs
    const pass = document.querySelector('[type="password"]').value;
    //simulación de una petición
    if(email === 'cintia@gmail.com' && pass ==='cin'){
        list.className = 'd-block';
        login.className = 'd-none';
        buttonX.className += 'd-block';
        buttonAddTask.className += 'd-block';
        title.className = 'd-block';
    } else{
        window.alert('Sus credenciales no son válidas')   
    }

    buttonX.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        login.className = 'd-block';
        list.className = 'd-none';
        buttonX.className = 'd-none';
        buttonAddTask.className = 'd-none';
    });
});

    buttonAddTask.addEventListener('click', (event) =>{
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
