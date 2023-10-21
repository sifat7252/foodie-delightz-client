
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu1miWYnVYZArYs2DSUHDOylvRk3HkshA",
  authDomain: "foodie-delightz.firebaseapp.com",
  projectId: "foodie-delightz",
  storageBucket: "foodie-delightz.appspot.com",
  messagingSenderId: "463064554356",
  appId: "1:463064554356:web:d0db18cb628c910809aa21"
};


const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;