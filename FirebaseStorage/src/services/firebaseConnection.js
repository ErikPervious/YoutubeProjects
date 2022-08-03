import { initializeApp } from "firebase/app";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIOQMwVtsSikVx3fbxNxKZSX0i6GP9Tww",
  authDomain: "fir-storage-f1c4b.firebaseapp.com",
  projectId: "fir-storage-f1c4b",
  storageBucket: "fir-storage-f1c4b.appspot.com",
  messagingSenderId: "122913689992",
  appId: "1:122913689992:web:7cf1f9432e55fd7e12ea3d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;