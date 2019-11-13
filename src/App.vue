<template>
  <div id="app">
    <div>
      <label>Nome do Livro:</label>
      <input type="text" v-model="name" />
      <button @click="submitName()">Add</button>
    </div>

    <div>
      <ul>
        <li v-for="personName of names" v-bind:key="personName['.key']">
          <p>{{ personName.name }}</p>
          <button @click="removePerson(personName['.key'])">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from "./firebase";
export default {
  data() {
    return {
      name: "",
      names: []
    };
  },
  template: "<p>{{ names }}</p> <br/>",
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false });
      this.name = "";
    },
    removePerson(key) {
      namesRef.child(key).remove();
    },
    editPerson(key) {
      namesRef.child(key).update({ edit: true });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 2px solid black;
}
</style>
