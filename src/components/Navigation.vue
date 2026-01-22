<style>
.transparent-blur {
    background-color: rgba(255, 255, 255, 0) !important;
    /* fully transparent */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background-color 0.3s ease !important;
}

.scrolled {
    background-color: rgba(255, 255, 255, 1) !important;
    /* solid white */
}

.v-app-bar .full-height-btn {
    height: 100%;
    /* full height of v-app-bar */
    min-height: 0;
    /* override Vuetify default */
}

.full-height-btn {
    transition: background-color 0.5s ease, color 0.3s ease;
}


.full-height-btn:hover {
    background-color: white !important;
    color: black !important;
    /* change text color if needed */
}

.text-carousel {
    position: relative;
    overflow: hidden;
}

.text-carousel span {
    display: block;
    transition: transform .8s ease;
    line-height: 80px;
    /* match button height */
    text-align: center;
}

.text-carousel .text-back {
    position: absolute;
    top: 100%;
    /* hidden below */
    left: 0;
    width: 100%;
}

.text-carousel:hover .text-front {
    transform: translateY(-100%);
}

.text-carousel:hover .text-back {
    transform: translateY(-100%);
}

.btn-fixed-width {
    width: 150px;
    /* set desired width */
    min-width: 150px;
    /* ensure it doesn't shrink */
}

.mobile-menu {
    position: fixed;
    top: 62px;
    /* start below the mobile navbar */
    left: 0;
    width: 100%;
    height: calc(100vh - 64px);
    /* fill remaining screen */
    background-color: white;
    z-index: 2000;
    overflow-y: auto;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.mobile-menu .v-list-item:not(:last-child) {
    border-bottom: 0.5px solid #e0e0e0;
    /* thinner border */
    padding-top: 16px;
    /* increase spacing above text */
    padding-bottom: 16px;
    /* increase spacing below text */
}

.mobile-menu .v-list-item-title {
    line-height: 1.8rem;
}
</style>
<template>
    <v-app-bar flat elevation="0" height="auto" :class="[{ scrolled }, 'transparent-blur']">
        <v-container class="pa-0">
            <v-row align="center" justify="space-between" no-gutters>

                <v-col cols="" class="d-none d-md-flex align-center justify-center">
                    <router-link to="/" class="ma-0 pa-0">
                        <v-img :width="200" aspect-ratio="16/9" cover src="/eishi/eishi_logo-removebg-preview.png" />
                    </router-link>

                    <v-btn to="/" height="80" width="200"
                        class="ma-0 pa-0 full-height-btn text-capitalize text-carousel btn-fixed-width"
                        :class="(scrolled || isNotHome) ? 'text-black' : 'text-white'">
                        <span class="text-front">{{ t.home }}</span>
                        <span class="text-back">{{ t.home }}</span>
                    </v-btn>
                    <v-btn to="/about" width="200" height="80"
                        class="ma-0 pa-0 full-height-btn text-capitalize text-carousel btn-fixed-width"
                        :class="(scrolled || isNotHome) ? 'text-black' : 'text-white'">
                        <span class="text-front">{{ t.about }}</span>
                        <span class="text-back">{{ t.about }}</span>
                    </v-btn>
                    <v-btn to="/properties" width="200" height="80"
                        class="ma-0 pa-0 full-height-btn text-capitalize text-carousel btn-fixed-width"
                        :class="(scrolled || isNotHome) ? 'text-black' : 'text-white'">
                        <span class="text-front">Property</span>
                        <span class="text-back">Property</span>
                    </v-btn>
                    <v-btn to="/partnership_opportunities" width="300" height="80"
                        class="ma-0 pa-0 full-height-btn text-black text-capitalize text-carousel btn-fixed-width"
                        variant="plain" :class="(scrolled || isNotHome) ? 'text-black' : 'text-white'">
                        <span class="text-front">{{ t.partnership }}</span>
                        <span class="text-back">{{ t.partnership }}</span>
                    </v-btn>

                    <!-- Language Menu -->
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" height="80" class="full-height-btn" width="190"
                                :class="scrolled ? 'bg-black text-white' : 'bg-white text-black'">
                                <v-icon>mdi-web-box</v-icon>
                                <span class="text-capitalize">
                                    {{ selectedLanguage === 'Japanese' ? '日本語' : 'English' }}
                                </span>
                            </v-btn>


                        </template>

                        <v-list>
                            <v-list-item @click="changeLanguage('English')">
                                <v-list-item-title>English</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="changeLanguage('Japanese')">
                                <v-list-item-title>日本語</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
                <v-col cols="12" class="d-flex d-md-none justify-space-between align-center">
                    <router-link to="/" class="ma-2">
                        <v-img :width="120" aspect-ratio="16/9" cover src="/eishi/eishi_logo-removebg-preview.png" />
                    </router-link>

                    <v-icon color="blue-grey-darken-2" class="pa-8" @click="menuOpen = !menuOpen">
                        {{ menuOpen ? 'fi-tr-x' : 'fi-sr-bars-sort' }}
                    </v-icon>
                </v-col>
                <transition name="slide-down">
                    <!-- Mobile dropdown menu -->
                    <v-sheet v-if="menuOpen" class="mobile-menu" tile elevation="2">

                        <v-list>
                            <v-list-item to="/" tag="router-link" @click="menuOpen = false">
                                <v-list-item-title>{{ t.home }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item to="/about" tag="router-link" @click="menuOpen = false">
                                <v-list-item-title>{{ t.about }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item to="/contact" tag="router-link" @click="menuOpen = false">
                                <v-list-item-title>{{ t.contact }}</v-list-item-title>
                            </v-list-item>

                            <v-list-group>
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props" title="Business/Holdings"></v-list-item>
                                </template>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/batangas/poultry_farm">
                                    <v-list-item-title>{{ t.batangasPoultry }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/pangasinan_farm">
                                    <v-list-item-title>{{ t.pangasinanFarm }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/assigned_properties">
                                    <v-list-item-title>{{ t.assignedProperties }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/cebu_condominium">
                                    <v-list-item-title>{{ t.cebuCondo }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="menuOpen = false" to="/business_holdings/kalinga_residential">
                                    <v-list-item-title>{{ t.kalingaResidential }}</v-list-item-title>
                                </v-list-item>
                            </v-list-group>

                            <v-list-item to="/partnership_opportunities" tag="router-link" @click="menuOpen = false">
                                <v-list-item-title>{{ t.partnership }}</v-list-item-title>
                            </v-list-item>

                            <v-list-group>
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props" title="Language"></v-list-item>
                                </template>
                                <v-list-item @click="() => { changeLanguage('English'); menuOpen = false }">
                                    <v-list-item-title>English</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="() => { changeLanguage('Japanese'); menuOpen = false }">
                                    <v-list-item-title>日本語</v-list-item-title>
                                </v-list-item>
                            </v-list-group>
                        </v-list>
                    </v-sheet>
                </transition>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { RouterLink } from 'vue-router'
import { useLanguageStore } from '@/stores/languageStore';

export default {
    name: 'Navigation',
    components: {
        RouterLink,
    },
    props: {
        color: String,
        flat: Boolean,
    },
    data() {
        return {
            scrolled: false,
            menuOpen: false,
        };
    },
    computed: {
        isNotHome() {
            return this.$route.name !== 'home';
        },
        ...mapState(useLanguageStore, ['selectedLanguage', 't']),
    },
    mounted() {
        console.log(this.$vuetify.display.mobile)
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Change after scrolling half the viewport
            this.scrolled = window.scrollY > window.innerHeight / 2;
        },
        ...mapActions(useLanguageStore, ['changeLanguage']),
    }
}
</script>