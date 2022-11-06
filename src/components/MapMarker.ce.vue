<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import eventBus from '../eventBus.js';

library.add(faLocationArrow);

const props = defineProps({
    markerId: {
        type: String,
        required: true
    }
});

</script>

<template>
    <font-awesome-icon @mouseover="eventBus.emit('marker-hover', props.markerId)" icon="fa-solid fa-location-arrow" />
</template>

<style scoped>

</style>
