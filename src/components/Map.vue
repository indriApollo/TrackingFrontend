<script setup>
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import { onMounted } from 'vue';
import { defineCustomElement } from 'vue';

import MapMarkerCe from './MapMarker.ce.vue';

import eventBus from '../eventBus.js';

eventBus.on("marker-hover", e => console.log(e));

const MapMarker = defineCustomElement(MapMarkerCe);
customElements.define('ce-map-marker', MapMarker);

mapboxgl.accessToken = 'pk.eyJ1IjoiaW5kcmlhcG9sbG8iLCJhIjoiY2w5bjVpdGlqMDRxbDQxbzZ5YmJqd3BwaSJ9.c9y5fUCA1JvoIu4HN31Chg';

let map;

const markers = [];

onMounted(() => {
    map = setupMap();
    addMarker("mine", 4, 51, 0, 'var(--emerald)');
})

function setupMap() {
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [4, 51], // lng, lat
        zoom: 9
    })
        .addControl(new mapboxgl.NavigationControl());
}

function addMarker(markerId, lng, lat, rotation, color) {
    const markerContainer = document.createElement("div");
    const markerCE = document.createElement("ce-map-marker");
    markerCE.setAttribute('marker-id', markerId)
    markerContainer.appendChild(markerCE);
    markerContainer.style.width = "27px";
    markerContainer.style.height = "41px";
    markerContainer.style.color = color;

    const marker = new mapboxgl.Marker(markerContainer)
        .setLngLat([lng, lat])
        .setRotation(rotation - 45) // icon is angled 45 deg by default
        .addTo(map);

    markers.push(marker);
}

</script>

<template>
    <div id="map" />
</template>

<style scoped>

</style>