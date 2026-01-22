<style>
.farm-table .row-item {
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
}

.farm-table .label {
    font-weight: 100;
    font-size: 0.75rem;
    color: #455a64;
    text-transform: uppercase;
    /* blue-grey-darken-2 tone */
    margin-bottom: 4px;
}

.farm-table .value {
    font-size: 1rem;
    color: #263238;
}

/* 3-column group */
.row-group {
    display: flex;
    gap: 16px;
}

.row-group .small {
    flex: 1;
}

.video-wrapper {
    width: 100%;
    overflow: hidden;
    /* optional */
}

.video-wrapper video {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    /* keep it clean */
}

.img-hover-wrapper {
    overflow: hidden;
    height: 500px;
    width: 100%;
    position: relative;
}

.zoom-img {
    transition: transform 3s ease;
}

.img-hover-wrapper:hover .zoom-img {
    transform: scale(1.1);
}

.zoom-img .v-image__image {
    transition: transform 3s ease;
    transform-origin: center center;
}

.img-hover-wrapper:hover .zoom-img .v-image__image {
    transform: scale(1.1);
    /* only the image zooms in */
}

.scroll-zoom {
    transition: transform 1s ease;
}

.scroll-zoom.zoomed {
    transform: scale(1.1);
}
</style>
<template>
    <!-- Dialog with Carousel -->
    <v-dialog v-model="dialog" width="900">
        <v-card class="pa-0">
            <v-carousel v-model="selectedIndex" cover hide-delimiters height="700">
                <template v-slot:prev="{ props }">
                    <v-btn color="success" variant="text" @click="props.onClick">
                        <v-icon size="large">mdi-menu-left</v-icon>
                    </v-btn>
                </template>
                <template v-slot:next="{ props }">
                    <v-btn color="info" variant="text" @click="props.onClick">
                        <v-icon size="large">mdi-menu-right</v-icon>
                    </v-btn>
                </template>
                <v-carousel-item v-for="(image, index) in images" :key="index" :src="image" cover></v-carousel-item>
            </v-carousel>
        </v-card>
    </v-dialog>
    <v-carousel v-if="isMobileView" continuous cycle v-model="selectedIndex" hide-delimiters :show-arrows="false"
        height="350" class="mobile-carousel">
        <v-carousel-item v-for="(img, index) in images" :key="index" :src="img" class="main-image" cover />
    </v-carousel>
    <v-container>
        <v-row>
            <!-- mobile view -->
            <v-col cols="12" v-if="isMobileView">
                <!-- Thumbnails -->
                <v-row class="mt-4 d-flex flex-nowrap overflow-auto" dense no-gutters style="gap: 8px;">
                    <div v-for="(img, index) in images" :key="index" style="flex: 0 0 auto; width: 80px;"
                        @click="selectImageByIndex(index)">
                        <v-card variant="outlined" class="thumbnail-card"
                            :class="{ 'selected-thumbnail': index === selectedIndex }">
                            <v-img :src="img" height="50" width="80" cover style="cursor: pointer;" />
                        </v-card>
                    </div>
                </v-row>

            </v-col>

        </v-row>
    </v-container>

    <!-- desktop view -->
    <v-container v-if="!isMobileView">
        <v-row>
            <v-col cols="9" class="mx-auto">
                <div>
                    <p style="font-size: 4.5rem;">{{ t.assignedProperties }}</p style="font-size: 5rem;">
                    <p style="margin-top: 3rem; font-size: 1rem;" class="text-blue-grey-darken-2">
                        Managing strategically acquired poultry farms, commercial and agricultural properties, and a
                        fleet
                        of vehicles for sustainable operations.
                    </p>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="9" class="mx-auto text-right">
                <span>
                    <v-icon>mdi-map-marker-outline</v-icon>
                    Taguig City, Muntinlupa City, Morong Rizal and San Jose, Batangas,
                    Philippines
                </span>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="9" class="mx-auto">
                <div class="img-hover-wrapper" style="height: 100%;">
                    <v-parallax src="/eishi/assigned_properties/images/1732160486501.jpg" cover
                        hheight="calc(100vh - 200px)" width="100%" class="scroll-zoom zoom-img"
                        ref="scrollImages"></v-parallax>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="mx-auto" cols="9">
                <v-container>
                    <v-row>
                        <v-col>
                            <p class="text-body-1 text-blue-grey-darken-2 ">{{ t.assignedPropertiesP1 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.assignedPropertiesP2 }}</p>
                        </v-col>
                        <v-col>
                            <div class="farm-table">
                                <div class="row-item">
                                    <div class="label">Property Name</div>
                                    <div class="value">EPARTNERS Properties</div>
                                </div>
                                <div class="row-item">
                                    <div class="label">Partnership</div>
                                    <div class="value">Eishi Company & EPARTNERS Co. LTD (Japan)</div>
                                </div>
                                <div class="row-item">
                                    <div class="label">Assignment Date</div>
                                    <div class="value">November 2023</div>
                                </div>
                                <div class="row-item">
                                    <div class="label">Managed By</div>
                                    <div class="value">Eishi Company</div>
                                </div>

                                <!-- 3-column group: poultry farms -->
                                <div class="row-group">
                                    <div class="row-item small">
                                        <div class="label">Poultry Farms</div>
                                        <div class="value">3 farms in San Jose, Batangas</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">Commercial Lands</div>
                                        <div class="value">3 lands in Muntinlupa City</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">Agricultural Lands</div>
                                        <div class="value">2 lands in Moron, Rizal</div>
                                    </div>
                                </div>

                                <!-- 3-column group: fleet -->
                                <div class="row-group">
                                    <div class="row-item small">
                                        <div class="label">Vehicles</div>
                                        <div class="value">26 vehicles for car rentals</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">Operation</div>
                                        <div class="value">Managed & operated by Eishi</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">Scope</div>
                                        <div class="value">Real estate, agricultural, commercial & vehicle assets</div>
                                    </div>
                                </div>
                            </div>
                        </v-col>

                    </v-row>
                    <v-row>
                        <v-col class="mx-auto">
                            <div class="video-wrapper">
                                <video autoplay loop muted playsinline>
                                    <source src="/eishi/videos/properties.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col v-for="(image, index) in images" :key="index" cols="6" class="d-flex">
                            <div class="img-hover-wrapper">
                                <v-img :src="image" height="500" cover class="scroll-zoom zoom-img" ref="scrollImages">
                                    <template v-slot:placeholder>
                                        <v-row align="center" justify="center" class="fill-height ma-0">
                                            <v-progress-circular color="grey-lighten-5"
                                                indeterminate></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="mx-auto">
                            <div class="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.157365477072!2d121.05535931536655!3d14.53063169023956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf4a54fe3001%3A0x2fae7af0a998d2ad!2sTaguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1701060000000!5m2!1sen!2sph&maptype=satellite"
                                    width="100%" height="800" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>

                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="mt-10 mb-10">
                        <v-col class="mx-auto">
                            <p style="font-size: 3rem; font-weight: bold;">Related Properties</p>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col v-for="(property, index) in properties" :key="index" cols="6">
                            <v-card class="overflow-hidden cursor-pointer" variant="text"
                                @click="$router.push(property.route)">

                                <!-- Image container -->
                                <div class="img-hover-wrapper">
                                    <v-img :src="property.image" height="400" cover class="scroll-zoom zoom-img"
                                        ref="scrollImages"></v-img>
                                </div>

                                <!-- Property Table -->
                                <v-card-text>
                                    <div class="farm-table">
                                        <div class="row-item">
                                            <div class="label">Property Name</div>
                                            <div class="value">{{ property.title }}</div>
                                        </div>

                                        <div v-for="(value, key) in property.details" :key="key" class="row-item">
                                            <div class="label">{{ key }}</div>
                                            <div class="value">{{ value }}</div>
                                        </div>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>

    <v-divider v-if="!isMobileView" style="margin-bottom: 5rem;"></v-divider>
    <v-divider v-if="isMobileView"></v-divider>
    <!-- mobile view -->
    <v-container v-if="isMobileView">

        <v-row>
            <!-- Info Section -->
            <v-col class="spaced-paragraphs">
                <div>
                    <h2 class="text-h4 font-weight-bold">{{ t.assignedProperties }}</h2>
                    <p class="text-body-1">Taguig City, Muntinlupa City, Morong Rizal and San Jose, Batangas,
                        Philippines.</p>
                </div>
                <p class="text-body-1 text-justify">{{ t.batangasP1 }}</p>
                <p class="text-body-1 text-justify">{{ t.batangasP2 }}</p>
                <p class="text-body-1 text-justify">{{ t.batangasP3 }}</p>
                <p class="text-body-1 text-justify">{{ t.batangasP4 }}</p>
            </v-col>
        </v-row>
        <div>
            <span class="text-h5 font-weight-bold">{{ t.business }}</span>
        </div>
        <v-row>
            <v-col cols="6" v-for="(feature, i) in business_holdings" :key="i">
                <v-card :to="feature.link" variant="text" class="cursor-pointer">
                    <v-img :src="feature.img" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px" cover>
                        <v-card-title class="text-white text-caption"> {{ t[feature.title] }}</v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '@/plugins/swiper'; // Just loads the CSS globally

export default {
    name: 'batangas_poultry_farm',
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        selectedImage() {
            return this.images[this.selectedIndex];
        },
        ...mapState(useLanguageStore, ['t']),
    },
    data() {
        return {
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
            dialog: false,
            tab: null,
            selectedIndex: 0,
            isMobileView: false,
            business_holdings: [

                {
                    img: "/eishi/Batangas Poultry Farm.jpg",
                    title: "batangasPoultry",
                    link: "/business_holdings/batangas/poultry_farm",
                },
                {
                    img: "/eishi/Pangasinan Farm.jpg",
                    title: "pangasinanFarm",
                    link: "/business_holdings/pangasinan_farm",
                },
                {

                    img: "/eishi/DJI_0598-min.jpg",
                    title: "kalingaResidential",
                    link: "/business_holdings/kalinga_residential",
                },
                {
                    img: "/eishi/Solinea3.jpg",
                    title: "cebuCondo",
                    link: "/business_holdings/cebu_condominium",
                },
            ],
            images: [
                '/eishi/assigned_properties/images/1732160485860.jpg',
                '/eishi/assigned_properties/images/1732160486501.jpg',
                '/eishi/assigned_properties/images/1732160487246.jpg',
            ],
            selectedImage: '', // default will be first image
            modules: [Autoplay, Pagination, Navigation],
        };
    },

    mounted() {
        this.selectedImage = this.images[0]; // Set default selected image
        this.checkMobileView(); // check on initial load
        window.addEventListener('resize', this.checkMobileView); // attach resize listener
        this.initScrollZoom();

    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobileView); // clean up

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
        openDialog(index) {
            this.selectedIndex = index;
            this.dialog = true;
        },
        checkMobileView() {
            this.isMobileView = this.$vuetify.display.mobile;
        },
        selectImageByIndex(index) {
            this.selectedIndex = index;
        },
    },
};
</script>

<style>
.hide-scrollbar {
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}

.thumbnail-card {
    border: 1px solid #ccc;
    /* Default gray border */
    transition: border-color 0.3s ease;
}

.thumbnail-card.selected-thumbnail {
    border-color: #1976d2;
    /* Vuetify primary blue */
}

.spaced-paragraphs p {
    margin-bottom: 2rem;
    /* equivalent to mb-6 */
}

/* Scoped CSS */
@media (max-width: 600px) {
    .main-image {
        height: 100vw !important;
    }

    .spaced-paragraphs p {
        font-size: 14px;
    }

    .spaced-paragraphs h2 {
        font-size: 20px;
    }
}
</style>