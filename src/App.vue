<template>
  <div id="app">
    <Calculator @page="changePage($event)" v-show="currentPage == 'calculator'"></Calculator>
    <Memory v-if="currentPage == 'memory'" @close="changePage('calculator')"></Memory>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import Memory from "./components/Memory.vue";

export default {
  name: "App",

  components: {
    Calculator,
    Memory,
  },

  data() {
    return {
      currentPage: "calculator",
    };
  },

  methods: {
    changePage(e) {
      this.currentPage = e;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
