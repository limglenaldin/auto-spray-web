import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: process.env.FB_API_KEY,
//   authDomain: process.env.FB_AUTH_DOMAIN,
//   databaseURL: process.env.FB_DB_URL,
//   projectId: process.env.FB_PROJECT_ID,
//   storageBucket: process.env.FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
//   appId: process.env.FB_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAyPfWjG0HK1NVe_AzZ8ejINNmicZedKVg",
  authDomain: "auto-spray-iot.firebaseapp.com",
  databaseURL: "https://auto-spray-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auto-spray-iot",
  storageBucket: "auto-spray-iot.appspot.com",
  messagingSenderId: "1009734100278",
  appId: "1:1009734100278:web:86d0f203e48d193d0fff97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const fsdb = getFirestore();

export { db, fsdb }