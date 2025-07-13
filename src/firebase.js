// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyCysIqpSHfOSmjwSIKVGPwKmb9xiC_Pazg",
  authDomain: "kisan-ai-e20f0.firebaseapp.com",
  projectId: "kisan-ai-e20f0",
  storageBucket: "kisan-ai-e20f0.firebasestorage.app",
  messagingSenderId: "18133476086",
  appId: "1:18133476086:web:d07ea16f814a897543c2d7",
  measurementId: "G-K92H3PP5F9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);