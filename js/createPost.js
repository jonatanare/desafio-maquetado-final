import { savePost, getPostById } from "./conecction.js";

const save = document.getElementById("savePost");

var meses = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const hoy = new Date();
save.addEventListener("click", (event) => {
  event.preventDefault();
  let fecha = hoy.getDate() + ' ' + ( meses[hoy.getMonth()] );

let fechaPublicada = `Posted on ${fecha} `; 

  const img = "http://placeimg.com/806/338/tech";
  const title = document.querySelector("#input-title").value;
  const contenido = document.querySelector("#contenido").value;
  const titleElement = document.querySelector("#input-title");
  const contenidoElement = document.querySelector("#contenido");
  const etiquetas = ["#javaScrit", "#html3", "#css", "#sass"];

  savePost(img, title, etiquetas, contenido, fechaPublicada);

  
});


loadContent();
function loadContent(){
  var url = new URL(window.location.href);
  let idC = url.searchParams.get("id");
  if(idC){
    loadContentFromDB(idC);
  }
}


async function loadContentFromDB(id){
  const doc = await getPostById(id);
  const post = doc.data();

  document.querySelector("#contenido").value = post.content;
  document.querySelector("#input-title").value = post.title;

}