import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_S1hS4Z_9xU_MnDOUSstGGwYo8ojC1mA",
  authDomain: "edu-base-1304f.firebaseapp.com",
  projectId: "edu-base-1304f",
  storageBucket: "edu-base-1304f.firebasestorage.app",
  messagingSenderId: "180137593664",
  appId: "1:180137593664:web:77b8ee26f7680e857bc8a5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
