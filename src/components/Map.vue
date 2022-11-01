<script setup>
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import { onMounted } from 'vue';

onMounted(() => {
    setupMap()
})

function setupMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaW5kcmlhcG9sbG8iLCJhIjoiY2w5bjVpdGlqMDRxbDQxbzZ5YmJqd3BwaSJ9.c9y5fUCA1JvoIu4HN31Chg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [4, 51], // lng, lat
        zoom: 9
    });

    map.addControl(new mapboxgl.NavigationControl());
}

</script>

<template>
    <div id="map" />
</template>

<style scoped>
    
</style>