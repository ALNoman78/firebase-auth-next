// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3aJbLoeT7OSqvDLtBjo2ka49CeoVwwLA",
    authDomain: "authentication-next-785b1.firebaseapp.com",
    projectId: "authentication-next-785b1",
    storageBucket: "authentication-next-785b1.firebasestorage.app",
    messagingSenderId: "25064595",
    appId: "1:25064595:web:7310098d2c5dfd22d98966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;