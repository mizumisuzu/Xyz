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

    <h3 style="color: #b9bbbe">🚧Currently being Developed🚧</h3>
    <h4 style="color: #b9bbbe">
      This is a showcase of the finished projects i have~! I am trying to do
      better about having documentation of my work.
    </h4>
    <button @click="pickRandomString">Pick Random Name Mc Server</button>
    <p style="color: white">{{ randomLine }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomLine: "null",
    };
  },
  methods: {
    async randomString() {
      try {
        const response = await fetch("./serverList.txt");
        console.log("??");
        if (!response.ok) {
          throw new Error("Error fetching the file");
        }
        const fileContents = await response.text();
        const lines = fileContents.split("\n");
        console.log(lines); // Check the lines array in the console
        const randomIndex = Math.floor(Math.random() * lines.length);
        console.log(randomIndex); // Check the random index in the console
        const randomLine = lines[randomIndex];
        console.log(randomLine); // Check the random line in the console
        this.randomLine = randomLine.trim();
        console.log(this.randomLine); // Check if randomLine is properly assigned
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>




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
