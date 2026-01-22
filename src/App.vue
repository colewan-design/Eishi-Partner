<style>
.video-background {
  position: absolute;
  /* relative to v-app now */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* full viewport height */
  object-fit: cover;
  z-index: 0;
  /* behind nav/overlay */
}


html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
<template>


  <v-app>
    <!-- <video v-if="$route.name === 'home'" autoplay loop muted playsinline class="video-background">
      <source src="/eishi/videos/Eishi Sample Video.mp4" type="video/mp4" />
    </video>
    <Navigation :color="color" :flat="flat" /> -->
    <v-main style="margin-top: 5rem;">

      <router-view />
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<style>
/* Global styles: Do NOT use <style scoped> */
.v-main {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    RouterView,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
