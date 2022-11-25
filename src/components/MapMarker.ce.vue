<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import eventBus from '../eventBus.js';

library.add(faLocationArrow);

const props = defineProps({
    deviceId: {
        type: String,
        required: true
    }
});

const isActive = ref(false);
const isPinned = ref(false);

onMounted(() => {
    eventBus.on(`deviceSelected-${props.deviceId}`, () => { isActive.value = true });
    eventBus.on(`deviceDeselected-${props.deviceId}`, () => { isActive.value = false, isPinned.value = false });
});

onUnmounted(() => {
    eventBus.off(`deviceSelected-${props.deviceId}`);
    eventBus.off(`deviceDeselected-${props.deviceId}`);
});

function setActiveAndEmit(active, event) {
    isActive.value = active;
    eventBus.emit(event, props.deviceId);
}

function selectMarker() { setActiveAndEmit(true, 'markerSelected'); }
function deselecteMarker() { setActiveAndEmit(false, 'markerDeselected'); }
function markerClick() { isPinned.value = !isPinned.value; }

function unlessPinned(func) { if (!isPinned.value) func(); }

</script>

<template>
    <font-awesome-icon @mouseenter="unlessPinned(selectMarker)" @mouseleave="unlessPinned(deselecteMarker)"
        @click="markerClick" :class="{ active: isActive }" icon="fa-solid fa-location-arrow" />
</template>

<style scoped>
.active>>>path {
    stroke: var(--peter-river);
    stroke-width: 30;
}
</style>
