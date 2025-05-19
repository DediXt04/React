
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDWOUv6Ip9EciQXk1joIlGvbpULE73Rbcw",
  authDomain: "mini-blog-41513.firebaseapp.com",
  projectId: "mini-blog-41513",
  storageBucket: "mini-blog-41513.firebasestorage.app",
  messagingSenderId: "156381985996",
  appId: "1:156381985996:web:ca13e67e6b7895039d5669"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };