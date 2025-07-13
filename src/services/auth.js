// Import Firebase auth functions and config
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Google Login
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // Returns Firebase user object
  } catch (err) {
    console.error("Google login failed:", err);
    throw err; // Re-throw for error handling in components
  }
};

// Email/Password Login
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    console.error("Email login failed:", err);
    throw err;
  }
};

// Email/Password Signup
export const signupWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    console.error("Signup failed:", err);
    throw err;
  }
};

// Logout
export const logout = async () => {
  await auth.signOut();
};