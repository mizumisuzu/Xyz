<template>
  <img alt="Bio logo" src="./assets/testlogo.png" width="250" height="250" />
  <HelloWorld msg="Updates Test" />
  <pdf src="example.pdf" />
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
  },
  created() {
    document.body.style.backgroundColor = "#b0bbe9";
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #32343e;
  margin-top: 60px;
}
</style>
