 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

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

 export const saveTask = (title, description) => {
  addDoc(collection(db, 'tasks'), {title, description}) //quiero añadir un documento en la colección de tareas que utiliza la conexión de db
}

saveTask = (titulo,descripcion) => {
  const objetoAGuardar = {
      title: titulo,  //le decimos que objeto queremos guardar que viene del addEventList del botón
      description: descripcion
  };
  const canasta = collection(db,"tasks"); //db tiene la conexión. queremos que te conectes a lal base de datos y almacenes este objeto en la colección("tasks"). Para llegar a esa canasta conectate en el db
  addDoc(canasta, objetoAGuardar) //donde lo voy a almacenar y que voy a almacenar
};
