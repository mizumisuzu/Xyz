<template>

<div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>

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
    <h3>For Employers!</h3>
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
  color: #32343e;
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
  color: #32343e;
}
</style>
