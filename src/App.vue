<style>
/* Splash screen */
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.splash-logo {
  width: 200px;
  height: auto;
}


.splash-logo-wrapper {
  position: relative;
  display: inline-block;
}

.splash-logo-shine {
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: skewX(-25deg);
  pointer-events: none;
}

/* Global main styling */
.v-main {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<template>
  <v-app>
    <div v-if="showSplash" class="splash-screen">
      <v-img height="100" src="/eishi/eishi-transparent-logo.png" alt="Splash Screen" contain class="splash-logo" />
    </div>
    <Navigation :color="color" :flat="flat" />
    <v-main>
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
    showSplash: true,
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

  mounted() {
    // Use the global $gsap instance
    this.playSplashAnimation()

    // Scroll listener for navbar
    window.addEventListener("scroll", this.onScroll)
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 60
    },

    toTop() {
      this.$vuetify.goTo(0)
    },

    playSplashAnimation() {
      const tl = this.$gsap.timeline({
        onComplete: () => {
          this.showSplash = false
        },
      })

      // Logo scale/fade
      tl.from(".splash-logo", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power2.out",
      })
        .to(".splash-logo", {
          scale: 1,
          duration: 0.3,
          ease: "power1.inOut",
        }, "-=0.2") // overlap a bit

        // Shine effect
        .fromTo(".splash-logo-shine",
          { x: "-75%" },
          { x: "125%", duration: 1, ease: "power2.inOut" },
          "-=0.5" // start shine while logo pop ends
        )

        // Slide splash up
        .to(".splash-screen", {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
          delay: 0.3,
        })
    }

  },
};
</script>
