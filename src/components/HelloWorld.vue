<template>
  <div class="Bio">
    <h1>{{ msg }}</h1>
    <p>
      Hello! This is my first implentation of my website. There might be bugs
      and strange formatting until a stable revision!
    </p>
    <h3>Relevant Contact Points</h3>
    <ul>
      <li>
        <a href="https://github.com/mizumisuzu" target="_blank" rel="noopener"
          >Github</a
        >
      </li>
      <li>
        <a
          href="https://twitter.com/mizu_misuzuru"
          target="_blank"
          rel="noopener"
          >Twitter</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
