
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHYk8CufRNpBEOfBcwmUqGUA_SNEUCaQE",
  authDomain: "video-game-inv.firebaseapp.com",
  projectId: "video-game-inv",
  storageBucket: "video-game-inv.appspot.com",
  messagingSenderId: "330142785064",
  appId: "1:330142785064:web:f4082853ea6e252adb9f1d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)