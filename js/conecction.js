// Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
//  import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

 import { getFirestore, addDoc, deleteDoc, updateDoc, getDoc, onSnapshot, collection, doc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpTdKzxyMenOX-vFf1kRomK5yLrsv_210",
  authDomain: "devto-jschallenge.firebaseapp.com",
  projectId: "devto-jschallenge",
  storageBucket: "devto-jschallenge.appspot.com",
  messagingSenderId: "1071756413875",
  appId: "1:1071756413875:web:50edbf3bf025c34fed59c6"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore();


/**
 * ? Función para guardar una tarea
 */
 export const savePost = (img, titulo, etiquetas = [], contenido, fechaPublicada) => {
  const objetoAGuardar = {
    cover: img,
    title: titulo,
    tags: etiquetas,
    content: contenido,
    create_at: fechaPublicada
  };
  const canasta = collection(db, "post");
  addDoc(canasta, objetoAGuardar);
  //window.location.href = 'index.html'
};


  /**
 * ? Función para obtener todas las tareas
 */
export const getPosts = (callback) => {
  const data = collection(db, 'post');
  onSnapshot(data, callback);
}

/**
 * ? Obtener 1 post
 */
export const getFristPost = (id) => getDoc(doc(db,"post", id));

export const deletePostById = id => deleteDoc(doc(db ,'posts', id)) //id= q quieres eliminar 

export const getPostById = id => getDoc(doc(db,'posts', id))
