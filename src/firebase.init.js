// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzC5psWML_yJ8gEAXj23BzNnhAZhyJ_oE",
  authDomain: "private-tutor-c96e1.firebaseapp.com",
  projectId: "private-tutor-c96e1",
  storageBucket: "private-tutor-c96e1.appspot.com",
  messagingSenderId: "1094117881645",
  appId: "1:1094117881645:web:2f075ff46d4f293f42c5a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;