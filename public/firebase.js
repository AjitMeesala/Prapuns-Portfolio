// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7waTYVe5mepMo-8fDdl0TjgflA9ziC2c",
  authDomain: "prapunwebportfolio.firebaseapp.com",
  projectId: "prapunwebportfolio",
  storageBucket: "prapunwebportfolio.appspot.com",
  messagingSenderId: "882331200677",
  appId: "1:882331200677:web:4e2eeca367a1cdad94314c",
  measurementId: "G-TV1V7XNNB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
