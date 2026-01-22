import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import { VProgressCircular } from 'vuetify/components'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import Vue3TouchEvents from "vue3-touch-events"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ObserveVisibility } from 'vue-observe-visibility'
import VuePhotoAlbum from 'vue-photo-album'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import "@flaticon/flaticon-uicons/css/all/all.css"

const app = createApp(App)

/**
 * Make GSAP globally accessible
 * this.$gsap inside Options API components
 */
app.config.globalProperties.$gsap = gsap

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VProgressCircular)
app.use(Vue3TouchEvents)
app.use(VuePhotoAlbum)
app.directive('observe-visibility', ObserveVisibility)

app.mount('#app')

// Lenis smooth scroll
const lenis = new Lenis({
    duration: 1.2,            // time to “catch up” to target
    easing: (t) => t * (2 - t), // ease-out (slows gradually)
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
    infinite: false,
    wheelMultiplier: 1,       // adjust scroll speed if needed
    smoothTouch: true,        // enable smoothing on touch devices
})



function raf(time) {
    lenis.raf(time)   // update Lenis scroll
    requestAnimationFrame(raf)
}

// start the loop
requestAnimationFrame(raf)

AOS.init({
    once: false,
    duration: 500,
    easing: 'ease-in-out',
})
