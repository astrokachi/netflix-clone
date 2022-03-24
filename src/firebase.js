import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCNZC5UycuC2PTPS_H5EVS5YZJapR5FxU8",
	authDomain: "netflix-clone-3d3d3.firebaseapp.com",
	projectId: "netflix-clone-3d3d3",
	storageBucket: "netflix-clone-3d3d3.appspot.com",
	messagingSenderId: "892464800094",
	appId: "1:892464800094:web:de361066a6bf89e8772fcf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
