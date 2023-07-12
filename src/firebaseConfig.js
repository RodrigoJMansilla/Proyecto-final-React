import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCX7DXO1sKml_lVfwpAEup_oDTjrX8I4Y4",
  authDomain: "tienda-de-arte-9b0f6.firebaseapp.com",
  projectId: "tienda-de-arte-9b0f6",
  storageBucket: "tienda-de-arte-9b0f6.appspot.com",
  messagingSenderId: "419464338385",
  appId: "1:419464338385:web:afb5d09d7eb32637c2def0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)