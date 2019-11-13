<template>
  <div id="app">
    <div>
      <label>Book Name:</label>
      <input type="text" v-model="name" />
      <button @click="submitName()">Add</button>
    </div>
    <br />
    <div id="div">
      <ul>
        <li v-for="bookName of names" v-bind:key="bookName['.key']">
          <div v-if="!bookName.edit">
            <p>{{ bookName.name }}</p>
            <button @click="removeBook(bookName['.key'])">Delete</button>
            <button @click="editBook(bookName['.key'])">Edit</button>
          </div>
          <div v-else>
            <input type="text" v-model="bookName.name" />
            <button @click="saveEdit(bookName)">Save</button>
            <button @click="cancelEdit(bookName['.key'])">Cancel</button>
          </div>
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
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false });
      this.name = "";
    },
    removeBook(key) {
      namesRef.child(key).remove();
    },
    editBook(key) {
      namesRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      namesRef.child(key).update({ edit: false });
    },
    saveEdit(book) {
      const key = book[".key"];
      namesRef.child(key).set({ name: book.name, edit: false });
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

#div {
  border: 1px solid black;
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
