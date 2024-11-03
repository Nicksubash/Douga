import { initializeApp } from "firebase/app";
import { getFireStore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDjx_vZfMaqo-hhF6l3udnKUrQbgPivJ4Q",
  authDomain: "douga-94bdb.firebaseapp.com",
  projectId: "douga-94bdb",
  storageBucket: "douga-94bdb.firebasestorage.app",
  messagingSenderId: "51826975507",
  appId: "1:51826975507:web:c3a174efa62eb2cd10b0e6",
  measurementId: "G-4FVQ2PF9EP"
};
const app = initializeApp(firebaseConfig);
const db=getFireStore(app)
export {db}
// const analytics = getAnalytics(app);