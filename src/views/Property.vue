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
    <v-container>
        <v-row dense>
            <v-col cols="8" class="mx-auto">
                <v-container>
                    <v-row>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '@/plugins/swiper'; // Just loads the CSS globally

import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
export default {
    name: 'business_holdings',
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapState(useLanguageStore, ['t']),
    },
    mounted() {
        this.initScrollZoom();
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
            images: [
                'https://picsum.photos/seed/1/400/300',
                'https://picsum.photos/seed/2/400/300',
                'https://picsum.photos/seed/3/400/300',
                'https://picsum.photos/seed/4/400/300',
                'https://picsum.photos/seed/5/400/300',
                'https://picsum.photos/seed/6/400/300',
            ],
            modules: [Autoplay, Pagination, Navigation], // <-- pass modules here
        };
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