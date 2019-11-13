import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyAxAGr_PQoBSwePa5y7hEIgZf6P1wuIY_M",
  authDomain: "library-with-vue-and-firebase.firebaseapp.com",
  databaseURL: "https://library-with-vue-and-firebase.firebaseio.com",
  projectId: "library-with-vue-and-firebase",
  storageBucket: "library-with-vue-and-firebase.appspot.com",
  messagingSenderId: "879531207203",
  appId: "1:879531207203:web:c6ed0ef5c76c3cf59f9f96",
  measurementId: "G-CNKXLJ1CEN"
});

export const db = app.database();
export const namesRef = db.ref("names");
