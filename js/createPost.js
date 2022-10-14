import { savePost, getPostById, updatePost } from "./conecction.js";

const save = document.getElementById("savePost");

var meses = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const hoy = new Date();
let idUrl;

loadContent();

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
  if(isNull(title) || isNull(contenido)){
    alert('Incomplete data');
    return;
  }
  const titleElement = document.querySelector("#input-title");
  const contenidoElement = document.querySelector("#contenido");
  const etiquetas = ["#javaScript", "#html5", "#css", "#sass"];
  let objetoAGuardar = { //obj q se guarda en db 
    cover: img,
    title: title,
    tags: etiquetas,
    content: contenido
  };
  if(!idUrl){
    let fecha = hoy.getDate() + ' ' + ( meses[hoy.getMonth()] ); //si no triago el id crearemos uno nuevo 
    let fechaPublicada = `Posted on ${fecha} `; 
    objetoAGuardar.create_at = fechaPublicada;
    savePost(objetoAGuardar);
  }else{
    updatePost(idUrl,objetoAGuardar); //para actualizar post 
  }
  
  
  
});


function isNull(str){
  return str == undefined || str == null || str.trim().length<1
}


