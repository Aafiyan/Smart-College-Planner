// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // ✅ Manually added
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcIwXsJFl8DSV59OLVktiKobrsWGdkl-E",
  authDomain: "smart-college-planner.firebaseapp.com",
  projectId: "smart-college-planner",
  storageBucket: "smart-college-planner.firebasestorage.app",
  messagingSenderId: "880025770660",
  appId: "1:880025770660:web:e863335db2807376c9a431",
  measurementId: "G-SYE7TRXGK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase instances
export { app, db, auth };
