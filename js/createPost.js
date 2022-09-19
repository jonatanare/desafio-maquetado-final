import { savePost, getPosts } from "./conecction.js";

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
  const etiquetas = ["#javaScrit", "#html3", "#css", "#sass"];

  savePost(img, title, etiquetas, contenido, fechaPublicada);

  
});


