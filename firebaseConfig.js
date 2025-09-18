import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxaSLVsOb9LoTLt0TS09JC2QNkq-px2G4",
  authDomain: "modespelo-49d6e.firebaseapp.com",
  projectId: "modespelo-49d6e",
  storageBucket: "modespelo-49d6e.firebasestorage.app",
  messagingSenderId: "981366194907",
  appId: "1:981366194907:web:460a99222fab6bb781c2fe",
  measurementId: "G-8P7RD01S2J",
};

const FirebaseConfig = () => {
  useEffect(() => {
    // Ensure the code only runs on the client-side (browser)
    if (typeof window !== "undefined") {
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      console.log("Firebase Analytics Initialized");
    }
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  return null; // You can render some JSX if needed, or just return null
};

export default FirebaseConfig;
