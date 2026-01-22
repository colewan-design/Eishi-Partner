<style scoped>
.partner-carousel-wrapper {
    overflow: hidden;
    width: 100%;
}

.partner-carousel {
    display: flex;
    flex-wrap: nowrap;
    animation: scroll-logos 20s linear infinite;
}

.partner-logo {
    min-width: 100px;
    /* smaller width */
    margin: 0 1rem;
    /* optional spacing */
}

.partner-logo v-img {
    height: 50px;
    /* reduce logo height */
}

@keyframes scroll-logos {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>

<template>
    <v-container fluid class="pa-0" style="position: relative;" v-if="!isMobileView">
        <v-row no-gutters>
            <!-- Full-screen background image -->
            <v-col class="pa-0" style="height: 100vh;">
                <div class="img-hover-wrapper" style="height: 100%;">
                    <v-img src="/eishi/pexels-neil-clark-ongchangco-2154700388-33407957.jpg" cover height="100%"
                        width="100%" class="scroll-zoom zoom-img" ref="scrollImages"></v-img>
                </div>
            </v-col>


            <!-- Overlay form -->
            <v-col cols="4"
                style="position: absolute; top: 50%; left: 5%; transform: translateY(-50%); background: rgba(255,255,255,0.75); padding: 2rem; border-radius: 8px;">
                <h2>Get in Touch</h2>
                <v-form>
                    <v-text-field label="Name" outlined dense></v-text-field>
                    <v-text-field label="Email" outlined dense></v-text-field>
                    <v-textarea label="Message" outlined dense rows="4"></v-textarea>
                    <v-btn color="black" class="mt-4" rounded>Send</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
    <div style="margin-top: 10rem;"></div>
    <v-container fluid class="ma-0 pa-0">
        <!-- Partner Logos Section -->
        <v-row>
            <v-col class="mx-auto" cols="4">
                <span style="font-size: 1.5rem; font-weight:bold">Our Partners</span>
                <div class="partner-carousel-wrapper">
                    <div class="partner-carousel">
                        <div v-for="(logo, i) in repeatedLogos" :key="i"
                            class="partner-logo d-flex flex-column align-center mx-4">
                            <a v-if="logo.link" :href="logo.link" target="_blank" rel="noopener"
                                class="text-decoration-none text-black">
                                <v-img :height="70" :src="logo.img"></v-img>
                                <h4 class="font-weight-regular text-center mt-2">{{ logo.title }}</h4>
                            </a>
                            <div v-else>
                                <v-img :height="70" :src="logo.img"></v-img>
                                <h4 class="font-weight-regular text-center mt-2">{{ logo.title }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>

        <!-- Call to Action -->
        <v-row>
            <v-col class="text-center mt-10 mb-10">
                <v-btn size="large" color="black" class="text-carousel btn-fixed-width" height="80" width="230">

                    <span class="text-front"> {{ t.becomePartner }}</span>
                    <span class="text-back"> {{ t.becomePartner }}</span>
                </v-btn>
            </v-col>
        </v-row>

        <!-- Footer Info Section -->
        <v-sheet class="bg-black py-10">
            <v-container>
                <v-row class="text-white" align="start" justify="space-between">
                    <v-col cols="12" md="4" class="text-center text-md-left mb-6 mb-md-0">
                        <v-img :width="200" aspect-ratio="16/9" cover src="/eishi/eishi logo 2.png"
                            class="mx-auto mx-md-0" />
                    </v-col>

                    <v-col cols="12" sm="6" md="4" class="text-center text-md-left mb-6 mb-md-0">
                        <h3 class="mb-4">Location</h3>
                        <p>JC 81 KM5, Pico, La Trinidad, Benguet (main office)</p>
                        <p>365-B, Rev. Rulite Bldg., Lower Magsaysay, Baguio (extension office)</p>
                    </v-col>

                    <v-col cols="12" sm="6" md="4" class="text-center text-md-left">
                        <h3 class="mb-4">{{ t.contact }}</h3>
                        <p>{{ t.eishiGmail }}</p>
                        <p>(+63) 917-575-5044</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-container>
</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';

export default {
    name: 'Footer',
    data() {
        return {
            isMobileView: false,
            partner_logo: [
                { img: "/eishi/logo/epartners-logo.png", title: "E.PARTNERS Co., Ltd.", link: "https://epartners-offshore.com/en/" },
                { img: "/eishi/logo/meishin-group.jpg", title: "Meiship Group Co., Ltd.", link: "https://meishin-group.co.jp/" },
                { img: "/eishi/logo/hotel-osaka-logo.png", title: "Hotel Osaka", link: "https://www.hostelosaka.net/" },
                { img: "/eishi/logo/domoganlawoffice-logo.jpg", title: "Domogan & Associates Law Office", link: "" },
                { img: "/eishi/logo/dcm-logo.jpg", title: "The Law Firm of Domogan, Chan and Mabalot", link: "" },
            ],
        };
    },
    mounted() {
        this.initScrollZoom();
    },
    computed: {
        ...mapState(useLanguageStore, ['t']),
        repeatedLogos() {
            // duplicate logos for seamless scrolling
            return [...this.partner_logo, ...this.partner_logo];
        },
    },
    methods: {
        initScrollZoom() {
            const images = this.$refs.scrollImages;
            if (!images) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("zoomed");
                        } else {
                            entry.target.classList.remove("zoomed");
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: "0px",
                    threshold: 0.5, // triggers when middle of image is visible
                }
            );

            if (Array.isArray(images)) {
                images.forEach(img => observer.observe(img.$el || img));
            } else {
                observer.observe(images.$el || images);
            }
        },
    },
};
</script>
