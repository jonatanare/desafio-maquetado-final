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
 export const savePost = async (objetoAGuardar) => {
  
  const canasta = collection(db, "post");
  //addDoc(canasta, objetoAGuardar);
  try {
    const docRef = await addDoc(canasta, objetoAGuardar);
    window.location.href = 'index.html'
  } catch (error) {
    alert('There was an error = ' + error);
  }
};


  /**
 * ? Función para obtener todas las tareas
 */
export const getPosts = (callback) => {
  const data = collection(db, 'post');
  onSnapshot(data, callback); //snapshot hace q sea en tiempor real 
}

/**
 * ? Obtener 1 post
 */
export const getFristPost = (id) => getDoc(doc(db,"post", id));

export const deletePostById = async id => { //await para esperar q me regrese el id 
  //deleteDoc(doc(db ,'post', id)) //id= q quieres eliminar 
  try { //intenta y si hay un error manda el catch 
    const docRef = await deleteDoc(doc(db, 'post', id));
    window.location.href = 'index.html'
  } catch (error) {
    alert('There was an error = ' + error);
  }
}

export const getPostById = id => getDoc(doc(db,'post', id))

export const updatePost = async (id, newFields) => {
  try { //intenta realizar sino catch el error y dámelo 
    const docRef = await updateDoc(doc(db, 'post', id), newFields);
    window.location.href = 'index.html'
  } catch (error) {
    alert('There was an error = ' + error);
  }
}