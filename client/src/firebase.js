// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6d25a.firebaseapp.com",
  projectId: "mern-blog-6d25a",
  storageBucket: "mern-blog-6d25a.appspot.com",
  messagingSenderId: "852437817221",
  appId: "1:852437817221:web:4a1a9bb01bf0cebeddd6ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);