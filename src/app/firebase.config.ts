// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

export function initFirebase() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.FIREBASE__API_KEY,
    authDomain: process.env.FIREBASE__AUTH_DOMAIN,
    projectId: process.env.FIREBASE__PROJECT_ID,
    storageBucket: process.env.FIREBASE__STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE__MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE__APP_ID,
    measurementId: process.env.FIREBASE__MEASUREMENT_ID,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  getPerformance(app);
}
