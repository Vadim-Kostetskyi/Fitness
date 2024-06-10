import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLNSpoFtZJtM1X-_C0pubc7CJ_2RS69ek",
  authDomain: "storm-bbb2c.firebaseapp.com",
  databaseURL: "https://storm-bbb2c.firebaseio.com",
  projectId: "storm-bbb2c",
  storageBucket: "storm-bbb2c.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
