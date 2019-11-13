import "./firebase";
import Vue from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";
import { rtdbPlugin } from "vuefire";

Vue.use(rtdbPlugin);

Vue.use(firestorePlugin);

new Vue({
  el: "#app",
  render: h => h(App)
});
