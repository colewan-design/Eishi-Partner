<style>
.zoom-efect {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}

.v-card {
  border-radius: 0 !important;
}

.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  /* stack content vertically */
  justify-content: center;
  /* vertical centering */
  align-items: flex-start;
  /* align content to the left */
  padding-left: 5%;
  /* optional spacing from left edge */
  text-align: left;
  /* align text inside elements to left */
}

.v-application .v-app-bar {
  position: relative;
  /* ensure it stays above video */
  z-index: 10;
}


.hero-container h1 {
  font-size: 5rem;
  /* base size */
}

@media (min-width: 768px) {
  .hero-container h1 {
    font-size: 7rem;
    /* medium screens */
  }
}

@media (min-width: 1200px) {
  .hero-container h1 {
    font-size: 6rem;
    /* large screens */
  }
}


.card-features {
  width: 100%;
  height: 100vh;
}

.property-table {
  width: 80%;
  border-collapse: collapse;
  color: white;
}

.property-table td {
  padding: 30px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  /* thinner horizontal line */
}


.title-row {
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 25px;
}

.sticky-card {
  position: sticky;
  top: 0;
}
</style>
<template>
  <div class="hero-container position-relative">
    <!-- Overlay Text -->
    <div class="overlay d-flex flex-column justify-center align-start text-left">
      <h1 class="animate__animated animate__flash display-1 display-md-2 display-lg-1" style="font-weight:300">
        {{ t.welcome }}
      </h1>
      <h3 class="text-grey font-weight-bold">
        Where Properties Meet Possibilities.
      </h3>
    </div>

  </div>
  <!-- desktop -->
  <div class="bg-grey-lighten-4">
    <v-container fluid v-if="!isMobileView" style="padding-top: 10rem;padding-bottom: 10rem;">
      <v-row>
        <v-col class="mx-auto d-flex flex-column align-start" cols="9">
          <v-card class="mx-auto ma-4" variant="text">
            <p class="mb-5 scroll-text" ref="scrollText" style="line-height: 1; font-size: 3rem;">
              <span v-for="(letter, index) in letters" :key="index" :style="{ color: letter.color }">
                {{ letter.char }}
              </span>
            </p>
          </v-card>

          <v-btn to="/about" rounded size="x-large" class="text-capitalize mt-12 text-carousel btn-fixed-width"
            height="80" width="400" color="black">

            <span class="text-front"> More About Eishi</span>
            <span class="text-back"> More About Eishi</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>


    <!-- mobile -->
    <v-container class="pt-10 mb-10" fluid v-if="isMobileView">
      <v-row>
        <v-col>
          <v-card class="mx-auto ma-2 " variant="text">
            <span class="text-body-1" style="line-height: 2;">
              <p class="mb-5" data-aos="fade-right">
                {{ t.homeParagraph1 }}
              </p>
              <p data-aos="fade-left">
                {{ t.homeParagraph2 }}
              </p>
            </span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <!-- Batangas Poultry Farm -->
  <div class="sticky-card" style="z-index: 1; height: 100vh;">
    <v-card class="bg-black" @click="$router.push('/business_holdings/batangas/poultry_farm')">
      <v-row align="center">
        <v-col cols="6" class="d-flex justify-center align-center">
          <v-container class="ma-10">
            <table class="property-table">
              <tbody>
                <tr>
                  <td colspan="2" class="title-row">Batangas Poultry Farm</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Municipality of San Jose, Batangas</td>
                </tr>
                <tr>
                  <td>Sqm.</td>
                  <td>3,500</td>
                </tr>
                <tr>
                  <td>Egg trays / day</td>
                  <td>630</td>
                </tr>
              </tbody>
            </table>
          </v-container>
        </v-col>
        <v-col class="pa-0 ma-0">
          <v-img src="/eishi/batangas_tokyo_farm/images/1732160556378.jpg" height="100vh" cover></v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>

  <div class="sticky-card" style="z-index: 2; height: 100vh;">
    <!-- Pangasinan Farm -->
    <v-card class="bg-black" @click="$router.push('/business_holdings/pangasinan_farm')">
      <v-row align="center">
        <v-col cols="6" class="d-flex justify-center align-center">
          <v-container class="ma-10">
            <table class="property-table">
              <tbody>
                <tr>
                  <td colspan="2" class="title-row">Pangasinan Farm</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Municipality of Balungao</td>
                </tr>
                <tr>
                  <td>Sqm.</td>
                  <td>240,500</td>
                </tr>
              </tbody>
            </table>
          </v-container>
        </v-col>
        <v-col class="pa-0 ma-0">
          <v-img src="/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.jpg" height="100vh"
            cover></v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>

  <div class="sticky-card" style="z-index: 3; height: 100vh;">
    <!-- Assigned Properties -->
    <v-card class="bg-black" @click="$router.push('/business_holdings/assigned_properties')">
      <v-row align="center">
        <v-col cols="6" class="d-flex justify-center align-center">
          <v-container class="ma-10">
            <table class="property-table">
              <tbody>
                <tr>
                  <td colspan="2" class="title-row">Assigned Properties</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>San Jose Batangas, Muntinlupa City, Moron, Rizal</td>
                </tr>
              </tbody>
            </table>
          </v-container>
        </v-col>
        <v-col class="pa-0 ma-0">
          <v-img src="/eishi/assigned_properties/images/1732160485860.jpg" height="100vh" cover></v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>

  <div class="sticky-card" style="z-index: 4; height: 100vh;">
    <!-- Residential Lands -->
    <v-card class="bg-black" @click="$router.push('/business_holdings/kalinga_residential')">
      <v-row align="center">
        <v-col cols="6" class="d-flex justify-center align-center">
          <v-container class="ma-10">
            <table class="property-table">
              <tbody>
                <tr>
                  <td colspan="2" class="title-row">Residential Lands</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Tabuk City, Kalinga Province</td>
                </tr>
                <tr>
                  <td>Lot</td>
                  <td>42</td>
                </tr>
              </tbody>
            </table>
          </v-container>
        </v-col>
        <v-col class="pa-0 ma-0">
          <v-img src="/eishi/kalinga_residential/images/DJI_0591-min.jpg" height="100vh" cover></v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>

  <div class="sticky-card" style="z-index: 5; height: 100vh;">
    <!-- Cebu Condominiums -->
    <v-card class="bg-black" @click="$router.push('/business_holdings/cebu_condominium')">
      <v-row align="center">
        <v-col cols="6" class="d-flex justify-center align-center">
          <v-container class="ma-10">
            <table class="property-table">
              <tbody>
                <tr>
                  <td colspan="2" class="title-row">Cebu Condominiums</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Cebu City, Central Business District and nearby the Metro Cebu Mall, Ayala Center and SM Cebu City
                  </td>
                </tr>
                <tr>
                  <td>Residences</td>
                  <td>1016</td>
                </tr>
              </tbody>
            </table>
          </v-container>
        </v-col>
        <v-col class="pa-0 ma-0">
          <v-img src="/eishi/cebu_condo/images/20240626_094216.jpg" height="100vh" cover></v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>


  <v-container v-if="!isMobileView">
    <v-row>
      <v-col cols="9" class="mx-auto">
        <v-container>
          <v-row>
            <v-col cols="6" class="d-flex flex-column align-start pa-0">
              <v-container>
                <v-row>
                  <span style="font-size: 2rem; ">
                    <h1 style="font-weight: 300;">Your Vision,</h1>
                    <h1 style="font-weight: 300;">Our Mission</h1>
                  </span>
                </v-row>
                <v-row>
                  <v-col class="text-left ma-0 pa-0">
                    <v-parallax width="400px" src="/eishi/pexels-rickyrecap-1662159.jpg"></v-parallax>
                  </v-col>
                </v-row>
                <v-row style="padding-top:2rem;font-size: 1rem;">
                  <v-col class="text-left ma-0 pa-0" cols="9">
                    <span class="">Our mission is to provide new value to our
                      customers and contribute to society.</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-btn to="/about" rounded size="x-large" class="text-capitalize mt-12 text-carousel btn-fixed-width"
                    height="80" width="200" color="black">

                    <span class="text-front"> More About Eishi</span>
                    <span class="text-back"> More About Eishi</span>
                  </v-btn>
                </v-row>
              </v-container>
            </v-col>
            <v-col>
              <v-container>
                <v-row>
                  <v-col v-for="(item, index) in cards" :key="index" cols="12" class="d-flex justify-end">
                    <v-card flat height="250px" width="500px" class="d-flex flex-column text-left pa-4">
                      <!-- Title at top -->
                      <span style="font-size: 2rem; font-weight: bold;">
                        {{ twoDigits(index + 1) }} | {{ item.title }}
                      </span>

                      <!-- Description at bottom -->
                      <span class="mt-auto text-blue-grey-darken-2">
                        {{ item.description }}
                      </span>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  <!-- Mobile view cards -->

  <v-container>
    <v-row>
      <v-col>
        <v-card to="/business_holdings/batangas/poultry_farm" flat
          class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
          <v-img data-aos="fade-right" v-if="isMobileView" src="/eishi/Batangas Poultry Farm.jpg" cover height="300"
            gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
            <v-container class="fill-height d-flex align-center justify-center">
              <div class="text-center text-white">
                <h2 class="text-h4 mb-4">{{ t.batangasPoultry }}</h2>
              </div>
            </v-container>
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col>
        <v-card to="/business_holdings/pangasinan_farm" flat
          class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
          <v-img data-aos="fade-left" v-if="isMobileView" src="/eishi/Pangasinan Farm.jpg" cover height="300"
            gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
            <v-container class="fill-height d-flex align-center justify-center">
              <div class="text-center text-white">
                <h2 class="text-h4 mb-4">{{ t.pangasinanFarm }}</h2>
              </div>
            </v-container>
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card to="/business_holdings/assigned_properties" flat
          class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
          <v-img data-aos="fade-right" v-if="isMobileView" src="/eishi/1732160486501.jpg" cover height="300"
            gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
            <v-container class="fill-height d-flex align-center justify-center">
              <div class="text-center text-white">
                <h2 class="text-h4 mb-4">{{ t.assignedProperties }}</h2>
              </div>
            </v-container>
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>

      </v-col>
      <v-col>
        <v-card to="/business_holdings/kalinga_residential" flat
          class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
          <v-img data-aos="fade-left" v-if="isMobileView" src="/eishi/DJI_0598-min.jpg" cover height="300"
            gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
            <v-container class="fill-height d-flex align-center justify-center">
              <div class="text-center text-white">
                <h2 class="text-h4 mb-4">{{ t.kalingaResidential }}</h2>
              </div>
            </v-container>
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card to="/business_holdings/cebu_condominium" flat
          class="cursor-pointer ma-2 animate__animated animate__fadeInLeftBig">
          <v-img data-aos="fade-right" v-if="isMobileView" src="/eishi/Solinea3.jpg" cover height="300"
            gradient="to top, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.5)">
            <v-container class="fill-height d-flex align-center justify-center">
              <div class="text-center text-white">
                <h2 class="text-h4 mb-4">{{ t.cebuCondo }}</h2>
              </div>
            </v-container>
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="mt-10 mb-10" fluid>
    <v-row>
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';

export default {
  name: 'HomeView',
  data() {
    return {
      cards: [
        {
          title: "built on trust",
          description: "Every decision begins with transparency and honesty. We believe real relationships create real results — and that’s what sets us apart."
        },
        {
          title: "food security",
          description: "Contributing to Philippine food security through large-scale, industrialized production and processing of poultry eggs and cow's milk using modern equipment and methods."
        },
        {
          title: "foreign investments",
          description: "Managing and overseeing foreign investments, offering partnership opportunities in real estate investments and property development to contribute to the national economy."
        },
        {
          title: "impactful projects",
          description: "Creating impactful projects that deliver mutual benefits and enhance property value through collaboration with local and international firms, government agencies, and investors who share their vision for sustainable development."
        },
        {
          title: "expanding farms",
          description: "Expanding poultry farms to ten locations across the Philippines to deliver high-quality, safe, and secure eggs produced with Japanese technology to more people."
        },
        {
          title: "growth & innovation",
          description: "Driving growth through collaboration and innovation, aiming to lead to new paths and ventures that contribute to the community."
        }
      ],

      properties: [
        {
          title: "Batangas Poultry Farm",
          details: {
            "Location": "Municipality of San Jose, Batangas",
            "Sqm.": "3,500",
            "Egg trays / day": "630"
          },
          image: "/eishi/batangas_tokyo_farm/images/1732160556378.jpg",
          route: "/business_holdings/batangas/poultry_farm"
        },
        {
          title: "Pangasinan Farm",
          details: {
            "Location": "Municipality of Balungao",
            "Sqm.": "240,500"
          },
          image: "/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.jpg",
          route: "/business_holdings/pangasinan_farm"
        },
        {
          title: "Assigned Properties",
          details: {
            "Location": "San Jose Batangas, Muntinlupa City, Moron, Rizal"
          },
          image: "/eishi/assigned_properties/images/1732160485860.jpg",
          route: "/business_holdings/assigned_properties"
        },
        {
          title: "Residential Lands",
          details: {
            "Location": "Tabuk City, Kalinga Province",
            "Lot": "42"
          },
          image: "/eishi/kalinga_residential/images/DJI_0591-min.jpg",
          route: "/business_holdings/kalinga_residential"
        },
        {
          title: "Cebu Condominiums",
          details: {
            "Location": "Cebu City, Central Business District and nearby the Metro Cebu Mall, Ayala Center and SM Cebu City",
            "Residences": "1016"
          },
          image: "/eishi/cebu_condo/images/20240626_094216.jpg",
          route: "/business_holdings/cebu_condominium"
        }
      ],

      text: "Eishi is a holding company focused on industrial-scale food production and property investments, supporting Philippine food security and economic growth.",
      letters: [],
      isMobileView: false,

      business_holdings: [
        { img: "/eishi/Batangas Poultry Farm.jpg", title: "batangasPoultry", link: "/business_holdings/batangas/poultry_farm" },
        { img: "/eishi/Pangasinan Farm.jpg", title: "pangasinanFarm", link: "/business_holdings/pangasinan_farm" },
        { img: "/eishi/1732160486501.jpg", title: "assignedProperties", link: "/business_holdings/assigned_properties" },
        { img: "/eishi/Solinea3.jpg", title: "kalingaResidential", link: "/business_holdings/kalinga_residential" },
        { img: "/eishi/DJI_0598-min.jpg", title: "cebuCondo", link: "/business_holdings/cebu_condominium" },
      ],
    };
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),
  },

  mounted() {
    const cards = document.querySelectorAll('.sticky-card');
    const lastCard = cards[cards.length - 1];

    window.addEventListener('scroll', () => {
      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];
        if (!nextCard) return;

        const cardRect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        if (nextRect.top <= 0) {
          card.style.position = 'relative';
        } else {
          card.style.position = 'sticky';
          card.style.top = '0';
        }
      });

      // Release sticky for the last card when it reaches the top
      const lastRect = lastCard.getBoundingClientRect();
      if (lastRect.top <= 0) {
        lastCard.style.position = 'relative';
      } else {
        lastCard.style.position = 'sticky';
        lastCard.style.top = '0';
      }
    });

    this.letters = this.text.split("").map(char => ({ char, color: "#ccc" }));
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView);
  },

  methods: {
    twoDigits(value) {
      return value < 10 ? '0' + value : value;
    },
    checkMobileView() {
      this.isMobileView = this.$vuetify.display.mobile;
    },
  },
};
</script>
