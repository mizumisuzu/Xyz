<template>
  <div class="container">
    <nav class="nav">
      <ul>
        <li>
          <!-- Page routing!-->
          <router-link to="/" class="nav-item">Home</router-link>
        </li>
        <li>
          <router-link to="/projects" class="nav-item">Projects</router-link>
        </li>
        <li>
          <router-link to="/blog" class="nav-item">Blog</router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-item">Contact</router-link>
        </li>
      </ul>
    </nav>

    <h3 style="color: #b9bbbe">About me</h3>
    <h4 style="color: #b9bbbe">My <a style="color: #b9bbbe" v-bind:href="'https://github.com/mizumisuzu' ">{{"Github"}}</a> is mostly used just to host this website however, I would love to collaborate on a project with you. </h4>
    <h4 style="color: #b9bbbe">Add me on <a style="color: #b9bbbe" v-bind:href="'https://www.linkedin.com/in/sush-singidi-a78428273/' ">{{"Linkedin!"}}</a> If you prefer you can also contact me at sush.k.singidi at gmail.com.</h4>
    <h4 style="color: #b9bbbe" >My <a style="color: #b9bbbe" v-bind:href="'https://www.instagram.com/mizu_misuzuru/' ">{{"Insta  "}}</a> is just a repo of moments I captured growing up.</h4>
    <h2 style="color: #b9bbbe">Resume</h2>
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vSPnVKqOwRIsCT1FR8UhE_ppMVatea4kx5WrH-IhzAluSoOYabqzLU1BulWn63C2nYFvOA2gphjpdnL/pub?embedded=true" width="500" height="750"></iframe>
  </div>
</template>


<style scoped>
.container {
  display: inline;
  flex-direction: column;
  height: 100%;
}

.nav {
  background-color: #272727;
  padding: 10px;
  margin-bottom: 20px;
  max-width: 500px; /* added */
  margin: 0 auto; /* added */
}

.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  display: inline-block;
  margin-right: 15px;
}

.nav-item {
  color: rgb(165, 139, 139);
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.nav-item:hover {
  background-color: #ddd;
}

.content {
  flex: 1;
}
</style>
