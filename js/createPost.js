import { savePost,getPostById, updatePost } from "./conecction.js";

const save = document.getElementById("savePost");

var meses = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const hoy = new Date();
let idUrl;

loadContent();

save.addEventListener("click", (event) => {
  event.preventDefault();
  
  const img = "http://placeimg.com/806/338/tech";
  const title = document.querySelector("#input-title").value;
  const contenido = document.querySelector("#contenido").value;
  const titleElement = document.querySelector("#input-title");
  const contenidoElement = document.querySelector("#contenido");
  const etiquetas = ["#javaScript", "#html5", "#css", "#sass"];
  let objetoAGuardar = {
    cover: img,
    title: title,
    tags: etiquetas,
    content: contenido
  };
  if(!idUrl){
    let fecha = hoy.getDate() + ' ' + ( meses[hoy.getMonth()] );
    let fechaPublicada = `Posted on ${fecha} `; 
    objetoAGuardar.create_at = fechaPublicada;
    savePost(objetoAGuardar);
  }else{
    updatePost(idUrl,objetoAGuardar);
  }
  

  
});


function loadContent(){
  var url = new URL(window.location.href);
  idUrl = url.searchParams.get("id");
  if(idUrl){
    save.innerText = "Edit";
    loadContentFromDB(idUrl);
  }
}


async function loadContentFromDB(id){
  const doc = await getPostById(id);
  const post = doc.data();

  document.querySelector("#contenido").value = post.content;
  document.querySelector("#input-title").value = post.title;

}