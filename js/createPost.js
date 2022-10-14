import { savePost, getPostById, updatePost } from "./conecction.js";

const save = document.getElementById("savePost");

var meses = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const hoy = new Date();
let idUrl;

loadContent();
//el paràmetro se manda en la url ej. <a href = "new.html?id=56757657hgjhfewfew"> Edit</a>
function loadContent(){
  var url = new URL(window.location.href); 
  idUrl = url.searchParams.get("id"); //se obtiene el valor del paràmetro que viene en la url en este caso(id)
  if(idUrl){ //si existe un id en la url 
    save.innerText = "Edit"; //se cambia el botòn save por edit 
    loadContentFromDB(idUrl); //se cargarà el contenido de la base de datos del id 
  }
}


async function loadContentFromDB(id){ //lo que se pintarà cuando le des editar 
  const doc = await getPostById(id); //obteniendo post del firebase await para esperar que la funciòn se ejecute, sino va a querer ejecutar aunque no tengamos nada en var doc(que viene del db)
  const post = doc.data(); //se obtiene el json que se guardò en la base de datos 

  document.querySelector("#contenido").value = post.content; //valor serà del contenido y title serà lo q viene en el json ya generado
  document.querySelector("#input-title").value = post.title;

}






function loadContent(){
  let url = new URL(window.location.href);
  idUrl = url.searchParams.get("id"); //url parameter 
  if(idUrl){
    save.innerText = "Edit"; //btn de save por edit 
    loadContentFromDB(idUrl);
  }
}


async function loadContentFromDB(id){ //traer de la base de datos el id  await para que se espere a que busque en la db
  const doc = await getPostById(id);
  const post = doc.data();

  document.querySelector("#contenido").value = post.content; //accediendo a contenido de post 
  document.querySelector("#input-title").value = post.title;

}

save.addEventListener("click", (event) => { //click para que me traiga la img, title, contenido, etc
  event.preventDefault();
  
  const img = "http://placeimg.com/806/338/tech";
  const title = document.querySelector("#input-title").value;
  const contenido = document.querySelector("#contenido").value;
<<<<<<< HEAD
=======

>>>>>>> fe10ffa9d821ecc7e3a20bc89f77330faab2ebde
  if(isNull(title) || isNull(contenido)){
    alert('Incomplete data');
    return;
  }
<<<<<<< HEAD
  const titleElement = document.querySelector("#input-title");
  const contenidoElement = document.querySelector("#contenido");
  const etiquetas = ["#javaScript", "#html5", "#css", "#sass"];
  let objetoAGuardar = { //obj q se guarda en db 
=======

  const titleElement = document.querySelector("#input-title");
  const contenidoElement = document.querySelector("#contenido");
  const etiquetas = ["#javaScript", "#html5", "#css", "#sass"];
  let objetoAGuardar = { //se construye el json a partir del formulario
>>>>>>> fe10ffa9d821ecc7e3a20bc89f77330faab2ebde
    cover: img,
    title: title,
    tags: etiquetas,
    content: contenido
  };
<<<<<<< HEAD
  if(!idUrl){
    let fecha = hoy.getDate() + ' ' + ( meses[hoy.getMonth()] ); //si no triago el id crearemos uno nuevo 
=======
  if(!idUrl){ //si no hay url se realiza la funciòn de crear un nuevo post, ,agregando al json la fecha de creaciòn
    let fecha = hoy.getDate() + ' ' + ( meses[hoy.getMonth()] );
>>>>>>> fe10ffa9d821ecc7e3a20bc89f77330faab2ebde
    let fechaPublicada = `Posted on ${fecha} `; 
    objetoAGuardar.create_at = fechaPublicada;
    savePost(objetoAGuardar);
  }else{
    updatePost(idUrl,objetoAGuardar); //para actualizar post 
  }
  
  
  
});

<<<<<<< HEAD

function isNull(str){
  return str == undefined || str == null || str.trim().length<1
}


=======
function isNull(str){
  return str == undefined || str == null || str.trim().length<1
}
>>>>>>> fe10ffa9d821ecc7e3a20bc89f77330faab2ebde
