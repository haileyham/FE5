import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// src/.env/.gitignore
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// firebase 를 초기화합니다.
const app = initializeApp(firebaseConfig);
//  firestore를 초기화합니다.
const appFireStore = getFirestore(app);
// 인증을 초기화 합니다.
const appAuth = getAuth();

// 밖에서 사용할 수 있도록 준비합니다.
export { appFireStore, appAuth }