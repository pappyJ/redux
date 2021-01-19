import firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";

//  TODO: Add SDKs for Firebase products that you want to use
// firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBhEP4pBopuO_HOuHpCUkOMVEFjhq_7iTA",
  authDomain: "sman-e453e.firebaseapp.com",
  projectId: "sman-e453e",
  storageBucket: "sman-e453e.appspot.com",
  messagingSenderId: "572050727237",
  appId: "1:572050727237:web:ba47f1b7e6a126e2289e2c",
  measurementId: "G-685006YG1W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
