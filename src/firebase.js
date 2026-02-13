// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3IGwADFxR-LnAAr79yW-wWS_PJrtNp2M",
  authDomain: "blog-project-work.firebaseapp.com",
  projectId: "blog-project-work",
  storageBucket: "blog-project-work.firebasestorage.app",
  messagingSenderId: "523902684334",
  appId: "1:523902684334:web:17caf929f92740bad7b13f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;