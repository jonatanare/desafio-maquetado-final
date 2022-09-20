import { savePost,getPostById, updatePost } from "./conecction.js";

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






save.addEventListener("click", (event) => {
  event.preventDefault();
  
  const img = "http://placeimg.com/806/338/tech";
  const title = document.querySelector("#input-title").value;
  const contenido = document.querySelector("#contenido").value;

  if(isNull(title) || isNull(contenido)){
    alert('Incomplete data');
    return;
  }

  const titleElement = document.querySelector("#input-title");
  const contenidoElement = document.querySelector("#contenido");
  const etiquetas = ["#javaScript", "#html5", "#css", "#sass"];
  let objetoAGuardar = { //se construye el json a partir del formulario
    cover: img,
    title: title,
    tags: etiquetas,
    content: contenido
  };
  if(!idUrl){ //si no hay url se realiza la funciòn de crear un nuevo post, ,agregando al json la fecha de creaciòn
    let fecha = hoy.getDate() + ' ' + ( meses[hoy.getMonth()] );
    let fechaPublicada = `Posted on ${fecha} `; 
    objetoAGuardar.create_at = fechaPublicada;
    savePost(objetoAGuardar);
  }else{
    updatePost(idUrl,objetoAGuardar);
  }
  

  
});

function isNull(str){
  return str == undefined || str == null || str.trim().length<1
}