import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyB7s29KKgGr9zzaWptHMT_60VXKVnEsAeg",
	authDomain: "fresh-food-ad397.firebaseapp.com",
	databaseURL: "https://fresh-food-ad397-default-rtdb.firebaseio.com",
	projectId: "fresh-food-ad397",
	storageBucket: "fresh-food-ad397.appspot.com",
	messagingSenderId: "362147341341",
	appId: "1:362147341341:web:41f9ab04ff49b7364952f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);
const storage = getDatabase(app);

// Check if Firebase is initialized correctly
if (!app) {
	console.error("Firebase initialization failed. Check your configuration.");
} else {
	console.log("Firebase initialized successfully.");
}

export { fireStore, auth, storage };
