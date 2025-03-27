// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZVDvwCmdYrLSFtSwK25dP70IvF8587W4",
  authDomain: "prapun-kumar.firebaseapp.com",
  projectId: "prapun-kumar",
  storageBucket: "prapun-kumar.appspot.com",
  messagingSenderId: "438222080323",
  appId: "1:438222080323:web:91469d39a6b5b2a06fc7f6",
  measurementId: "G-FLTD8443JW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
