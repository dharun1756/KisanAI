import { db } from "../firebase";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";

// Save user profile data
export const saveUserProfile = async (userId, userData) => {
  await setDocdoc(db, "users", userId), {
    ...userData,
    createdAt: new Date()
  };
};

// Add a new crop listing
export const addCrop = async (cropData) => {
  const docRef = await addDoc(collection(db, "crops"), {
    ...cropData,
    farmerId: auth.currentUser.uid,
    postedAt: new Date()
  });
  return docRef.id;
};

// Fetch all crops
export const getCrops = async () => {
  const querySnapshot = await getDocs(collection(db, "crops"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};