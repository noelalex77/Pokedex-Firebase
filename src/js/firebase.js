import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5IvWaBDjzql3D5ZK4rd_vPEvPyFCLZB8",
  authDomain: "fir-pokedex-9039c.firebaseapp.com",
  projectId: "fir-pokedex-9039c",
  storageBucket: "fir-pokedex-9039c.appspot.com",
  messagingSenderId: "599719700707",
  appId: "1:599719700707:web:49b1a5c7f62e02acca7dd6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}