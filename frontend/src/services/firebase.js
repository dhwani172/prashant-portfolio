import { initializeApp } from "firebase/app";
import { getDatabase, ref, runTransaction, push, serverTimestamp } from "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyAqHXOjgIyHz3tzkhzXbTpX5zbkL7dMZv0",
   authDomain: "prashant-portfolio-68261.firebaseapp.com",
   databaseURL: "https://prashant-portfolio-68261-default-rtdb.firebaseio.com",
   projectId: "prashant-portfolio-68261",
   storageBucket: "prashant-portfolio-68261.firebasestorage.app",
   messagingSenderId: "424754865670",
   appId: "1:424754865670:web:66d96161f140947da58587"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Atomic increment
export async function incrementVisitorCount() {
   const countRef = ref(db, "visitorCount");
   await runTransaction(countRef, (current) => (current || 0) + 1);
}

// Store form submissions
export async function storeSubmission(payload) {
   const submissionsRef = ref(db, "submissions");
   await push(submissionsRef, { ...payload, createdAt: serverTimestamp() });
}
