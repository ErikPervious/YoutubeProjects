import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAIOQMwVtsSikVx3fbxNxKZSX0i6GP9Tww",
  authDomain: "fir-storage-f1c4b.firebaseapp.com",
  projectId: "fir-storage-f1c4b",
  storageBucket: "fir-storage-f1c4b.appspot.com",
  messagingSenderId: "122913689992",
  appId: "1:122913689992:web:7cf1f9432e55fd7e12ea3d",
  storageBucket: "gs://fir-storage-f1c4b.appspot.com"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;