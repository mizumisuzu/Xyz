<template>
  <div class="container">
    <div class="intro">
      <h1 :style="{ fontSize: fontStyle + 'vw' }">Sush</h1>
      <span v-for="(char, index) in introTextArray" :key="index" class="char" :style="{ '--delay': index * 0.05 + 's', fontSize: fontStyle + 'vw' }">{{ char }}</span>
    </div>
    <div class="timeline">
      <div class="timeline-item" v-for="(event, index) in displayedEvents" :key="index" :ref="el => { if (el) itemRefs[index] = el }" :class="{ 'reveal': isReveal[index] }">
        <div class="timeline-content">
          <h2>{{ event.title }}</h2>
          <p v-html="event.description"></p>
          <span class="timeline-date">{{ event.date }}</span>
        </div>
      </div>
      <div ref="sentinel" class="sentinel"></div>
    </div>
  </div>
</template>

<script>


import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

export default {
  //Intro animation and rendering
  data() {
    return {
      introText: 'Aspiring software developer',
      fontStyle: 2,
    };
  },
  computed: {
    introTextArray() {
      return this.introText.split('');
    },
  },
  // Timline animation and rendering
  setup() {
    //const createEvent = (title, description, date) => ({ title, description, date });
    const events = ref([
      {
        title: 'VibeStir',
        description: "Full stack developer <br>at a social media start up",
        date: ''
      },
      { 
        title: 'Arduino Display', 
        description: '1.28in Display powered by an <br>ESP32 MC with the TFT.spi lib', 
        date: '' 
      },
      {
        title: 'Research project',
        description: 'Worked with Dr.Yen UT Dallas <br>developing computer vision for drones',
        date: '' 
      },
      { 
        title: 'Customizing Persona4', 
        description: 'Reverse engineering WXB microsoft files<br> in order to inserst custom <br> voice lines in game for content creators', 
        date: ''
       },
      { title: 'Homelab', description: 'Using CISCO routing experience created<br> a homelab running <br>openWRT with a ubiquiti managed router', date: '' },
      { title: 'RyzenTosh', description: 'Installed MacOs on Ryzen based <br>baremetal hardware', date: '' },
      // Add more events here
    ]);
    const displayedEvents = ref(events.value.slice(0, 3));
    const isReveal = ref([true].concat(new Array(events.value.length - 1).fill(false)));
    const sentinel = ref(null);
    const observer = ref(null);
    const itemObserver = ref(null);
    const itemRefs = ref([]);

    const loadMore = () => {
      const nextEvents = events.value.slice(displayedEvents.value.length, displayedEvents.value.length + 3);
      nextEvents.forEach(event => {
        displayedEvents.value.push(event);
        isReveal.value.push(false);
      });
    };

    onMounted(() => {
      observer.value = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            loadMore();
            nextTick(() => {
              observer.observe(sentinel.value);
            });
          }
        });
      }, { threshold: 1.0 });
      observer.value.observe(sentinel.value);

      itemObserver.value = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const index = itemRefs.value.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            isReveal.value[index] = true;
            if (index < itemRefs.value.length - 1) {
              isReveal.value[index + 1] = false;
            }
            itemObserver.value.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      nextTick(() => {
        itemRefs.value.forEach((itemRef) => {
          itemObserver.value.observe(itemRef);
        });
      });
    });

    watch(displayedEvents, (newVal, oldVal) => {
      if (newVal.length > oldVal.length) {
        newVal.slice(oldVal.length).forEach((_, index) => {
          itemObserver.value.observe(itemRefs.value[oldVal.length + index]);
        });
      }
    });

    onUnmounted(() => {
      if (observer.value) {
        observer.value.disconnect();
      }
      if (itemObserver.value) {
        itemObserver.value.disconnect();
      }
    });

    return {
      events,
      displayedEvents,
      isReveal,
      sentinel,
      itemRefs
    };
  }
};
</script>

<style scoped>

.container {
  display: flex;
  margin-left: 0vw;
  margin: 0;
  padding: 0;
  width: 100%;
}
/* Intro code */
.intro {
  margin-right: 3vw; 
  margin-left: 0;
  color: #7CA399;
  text-align: left;
  position: absolute;
  left: 5vw;
}

.intro h1 {
  font-size: 5vw;
  margin-bottom: 0;
}

.intro p {
  font-size: 3vw;
  margin-top: 0;
}

.char {
  opacity: 0;
  animation: fadeIn 0.3s forwards;
  animation-delay: var(--delay);
}

/* Timeline code */

.sentinel {
  height: 50px;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.timeline-item {
  opacity: 0;
  animation: fadeIn 3s forwards;
  min-height: 90%;
}

.timeline-item.reveal {
  animation-play-state: running;
}

body, html {
  height: auto;
  margin: 0;
  padding: 0;
  overflow: auto; 
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: auto;
  padding: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: -20px;
  bottom: 0;
  width: 2px;
  background: #875F69;
  left: 50%;
  margin-bottom: 20px;
}


.timeline-content.reveal {
  opacity: 1;
  animation: fadeIn 3s;
}


/* The Dots on the timeline */
.timeline-item {
  display: flex;
  flex-direction: row; 
  align-items: center; 
  width: 100%;
  position: relative;
  margin-bottom: auto;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width:20px;
  height: 20px;
  background: #875F69;
  border-radius: 50%;
}
/* TEXT STYLESHEET */
.timeline-item:nth-child(odd) .timeline-content {
  float: right;
  clear: both;
  margin-left: 24vw; /* adjust as needed */
  transition: opacity 100s ease-in-out;
  text-align: center;
  font-size: 0.95vw;
}

.timeline-item:nth-child(even) .timeline-content {
  float: left;
  clear: both;
  margin-right: 20vw; /* adjust as needed */
  transition: opacity 100s ease-in-out;
  text-align: center;
  font-size: 0.95vw;
}

.timeline-content {
  width: auto; 
  color: #7CA399;
  opacity: 1;
  transition: opacity 10s ease-in-out;
  animation: fadeInTopToBottom 3s ease-in-out forwards;
}
.timeline-content h2 {
  text-align: center;
}

@keyframes fadeInTopToBottom {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
