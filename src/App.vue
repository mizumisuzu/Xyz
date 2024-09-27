<template>
  <div id="app-wrapper" style="position: static; min-height: 0; padding-bottom: 30px;">
  <div id="app">
    <!-- Nav Bar divs -->
    <nav class="nav">
      <ul>
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
      <div class="nav-text" v-on:click="scrollToBottom">Contact Me!</div>
    </nav>
    <router-view></router-view>
  </div>


  <!-- Footer divs -->
  <div class="footerContent">
    <footer>
      <div class="contact-links">
        <a href="mailto:sush.k.singidi dot gmail.com" target="_blank">
          <EmailIcon :style="{ color: '#bb86fc80', transform: 'scale(2)' }" />
        </a>
        <a href="https://www.linkedin.com/in/sush-singidi-a78428273/" target="_blank">
          <LinkedinIcon :style="{ color: '#bb86fc80', transform: 'scale(2)' }" />
        </a>
        <a href="https://www.instagram.com/mizu_misuzuru/" target="_blank">
          <InstaIcon :style="{ color: '#bb86fc80', transform: 'scale(2)' }" />
        </a>
        <a href="https://docs.google.com/document/d/e/2PACX-1vSPnVKqOwRIsCT1FR8UhE_ppMVatea4kx5WrH-IhzAluSoOYabqzLU1BulWn63C2nYFvOA2gphjpdnL/pub?embedded=true"
          target="_blank">
          <Resume :style="{ color: '#bb86fc80', transform: 'scale(2)' }" />
        </a>
      </div>

    </footer>

  </div>
  <!-- Last updated divs-->
  <transition>
      <div style="align-self: flex-end; margin-top: auto; color: #7ca3997e; z-index: 1000;">
        {{ chosenTime }}
      </div>
    </transition>

</div>
</template>

<script>
import { defineComponent } from 'vue';
import EmailIcon from '@/assets/gmail.svg';
import LinkedinIcon from '@/assets/linkedin.svg';
import InstaIcon from '@/assets/insta.svg';
import Resume from '@/assets/resume.svg';

export default defineComponent({
  name: "App",
  components: {
    EmailIcon,
    LinkedinIcon,
    InstaIcon,
    Resume,
  },
  // Website behavior
  created() {
    document.body.style.backgroundColor = "#121212";
  },
  data() {
    return {
      // Nav bar routes
      routes: [
        { path: "/", name: "Home" },
        { path: "/projects", name: "Projects" },
        { path: "/contact", name: "About" },
      ],
      iconStyle: {
        width: '100px',
        height: '100px'
      },
      chosenTime: "Last updated " + new Date(1727474070 * 1000).toLocaleDateString(),
    };
  },
  methods: {
    // Contact me function
    scrollToBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',

      });
    }
  }
});
</script>

<style scoped>
.nav-text {
  cursor: pointer;
  color: #A37C86;
  font-size: 18px;
}

.nav-text:hover {
  color: rgba(218, 218, 218, 0.808);
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f1b24;
  margin-top: 40px;
}

/* Animating nav bar */
@keyframes extendNav {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes revealText {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


/* Nav bar stylesheet */
.nav {
  display: inline-block;
  animation: extendNav 3s ease-out forwards, revealText 3s ease-out forwards;
  position: absolute;
  top: 0;
  height: 50px;
  width: 75%;
  background-color: #23202D;
  overflow: clip;
  border-radius: 10px;
  font-family: Helvetica, sans-serif;
  border-bottom: rgba(255, 255, 255, 0.808) 2.5px outset;
  border-left: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.nav li {
  height: 40px;
  display: block;
  justify-content: center;
  align-items: center;
  float: left;
}

.nav a {
  height: 40px;
  box-sizing: border-box;
  color: #A37C86;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;
  border: 0px solid transparent;
  border-radius: 6px;
}

.nav a:hover {
  border-color: rgba(187, 134, 252, 0.50);
  color: rgb(218, 218, 218);
  background-color: rgba(187, 134, 252, 0.21);
}

.nav-text {
  animation: revealText 3s ease-out forwards;
  position: absolute;
  right: 0px;
  padding-right: 20px;
  background-color: #1f1a28;
  font-weight: bold;
}
</style>

/**
 * Styles for the footer component.
 */
<style scoped>
#app {
  display: inline-block;
  flex-direction: column;
  min-height: 100vh;
}

.footerContent,
footer,
.contact-links {
  flex-shrink: 0;
  width: 100%;
  height: 60px;
  background-color: #121212;

  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: center;
}


.contact-links svg {
  margin: 0 10px;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  transition: stroke 0.4s ease;
}

.contact-links svg:hover {
  stroke: rgb(165, 139, 150);
}

.contact-links {
  color: #fff;
  position: relative;
  width: 75%;
}

.contact-links::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgb(165, 139, 150);
}

.contact-links a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
}
</style>
