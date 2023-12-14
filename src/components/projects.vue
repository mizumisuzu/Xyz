<template>
  <div class="container">
    <h3 style="color: #b9bbbe">🚧Currently being Developed🚧</h3>
    <h4 style="color: #b9bbbe">
      This is a place I host projects other can interact with!
    </h4>
    <div class="project-container">
      <div class="project">
        <h2 style="color: #b9bbbe">MC Generator for @BentYT</h2>
        <button class="mc-server" @click="pickRandomString">Generate</button>
        <div class="project-content">
          <p style="color: white">{{ randomLine }}</p>
        </div>
      </div>
      <!-- Add more projects here -->
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      randomLine: "Commissioned to Scrape mcServers.net in order to generate random servers for @BentYT",
    };
  },
  methods: {
    async pickRandomString() {
      try {
        const response = await fetch("/serverList.txt");
        if (!response.ok) {
          throw new Error("Error fetching the file");
        }
        const fileContents = await response.text();
        const lines = fileContents.split('\n');
        this.randomLine = lines[Math.floor(Math.random() * lines.length)];
      } catch (error) {
        console.error(error);
      }
    }, 
  },
};
</script>



<style scoped>
.mc-server {
  color: rgba(187, 134, 252, 0.21);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition-duration: 0.4s;
  background-color: rgba(187, 134, 252, 0.21);
}

.mc-server:hover {
  border-color: rgba(187, 134, 252, 0.50);
  background-color:  #A37C86;
}
.project-container {
  border: 1px solid #b9bbbe;
  padding: 10px;
  margin-top: 10px;
  color: white;
  background-color: #2f3136;
}
.container {
  display: inline;
  flex-direction: column;
  height: 100%;
}
</style>
