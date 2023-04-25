<template>
  <img alt="Bio logo" src="./assets/testlogo.png" width="250" height="250" />
  <router-view></router-view>
  <pdf src="example.pdf" />
</template>

<script>

export default {
  name: "App",
  components: {},
  created() {
    document.body.style.backgroundColor = "#414141";
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
