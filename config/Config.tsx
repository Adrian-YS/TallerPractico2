import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyC3s9GcwSnwt3X4d4dnsLtcFcYbUXa9X7s",
  authDomain: "app-movil-a8429.firebaseapp.com",
  databaseURL: "https://app-movil-a8429-default-rtdb.firebaseio.com",
  projectId: "app-movil-a8429",
  storageBucket: "app-movil-a8429.appspot.com",
  messagingSenderId: "1062960401628",
  appId: "1:1062960401628:web:155240507a16d803c5b819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)