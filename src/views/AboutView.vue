<style>
.scroll-scale {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  /* prevents overflow when scaling */
}

.scroll-scale video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  /* cap at full screen */
  transition: transform 0.5s linear;
  transform-origin: center top;
}
</style>
<template>
  <v-container style="padding-top: 5rem;padding-bottom: 5rem;">
    <v-row>
      <v-col cols="9" class="mx-auto">
        <v-row>
          <v-col>
            <span style="font-size: 72px; font-weight: 400;">About</span>
          </v-col>

          <v-col cols="4" class="text-right">
            <span>Since 2018</span><br>
            <span style="font-size: 14px;" class="text-grey-darken-2">
              At Eishi, we believe in creating lasting partnerships built on trust,
              integrity, and unwavering commitment to progress.
            </span>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

  </v-container>

  <v-container fluid class="pa-0 ma-0">
    <v-row no-gutters>
      <v-col class="pa-0 ma-0">
        <div class="scroll-scale" ref="videoWrapper">
          <video autoplay loop muted playsinline>
            <source src="/eishi/videos/3d Marketing.mp4" type="video/mp4" />
          </video>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container style="padding-top: 5rem;padding-bottom: 5rem;">
    <v-row>
      <v-col cols="9" class="mx-auto">
        <v-row>
          <v-col cols="7">
            <span style="font-size: 48px; font-weight: 400;">Bridging Expertise,</span><br>
            <span style="font-size: 48px; font-weight: 400;">Building Opportunities</span>
          </v-col>
          <v-col class="text-justify">
            <span class="text-grey-darken-2 d-block">{{ t.aboutP2 }}</span><br>
            <span style="font-size: 16px; margin-top: 2rem;" class="text-grey-darken-2 d-block">
              {{ t.aboutP3 }}
            </span>
          </v-col>

        </v-row>

      </v-col>
    </v-row>
  </v-container>

  <div class="bg-black" style="padding-top: 5rem;padding-bottom: 5rem;">
    <v-container style="padding-top: 5rem;padding-bottom: 5rem;">
      <v-row>
        <v-col cols="9" class="mx-auto">
          <v-row>
            <v-col cols="7">
              <span style="font-size: 48px; font-weight: 400;"> {{ t.missionVision }}</span>
            </v-col>
            <v-col class="text-justify">
              <span class="d-block"> {{ t.aboutP4 }}</span>
            </v-col>

          </v-row>

        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="" style="padding-top: 5rem;padding-bottom: 5rem;">
    <v-container style="padding-top: 5rem;padding-bottom: 5rem;">
      <v-row>
        <v-col cols="9" class="mx-auto">
          <v-row>
            <v-col cols="7">
              <span style="font-size: 48px; font-weight: 400;"> {{ t.whyUs }}</span>
            </v-col>
            <v-col class="text-justify">
              <span class="d-block"> {{ t.aboutP5 }}</span>
            </v-col>

          </v-row>

        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-img v-if="isMobileView" src="/images/1732160499420.jpg" height="300" cover>
    <template v-slot:placeholder>
      <v-row align="center" class="fill-height ma-0" justify="center">
        <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
      </v-row>
    </template>
  </v-img>

</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';

export default {
  name: 'HomeView',
  data() {

    return {
      isMobileView: false,
    };
  },
  computed: {
    ...mapState(useLanguageStore, ['t']),
  },
  mounted() {
    const wrapper = this.$refs.videoWrapper;
    const video = wrapper.querySelector('video');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const minScale = 0.4;   // starting size
      const maxScale = 1;     // full screen size
      const speed = 500;      // scroll distance before reaching full size

      let scale = minScale + scrollY / speed;
      if (scale > maxScale) scale = maxScale;

      video.style.transform = `scale(${scale})`;
    });

    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView); // clean up
  },

  methods: {

    checkMobileView() {
      this.isMobileView = this.$vuetify.display.mobile;
    },
  },
};
</script>