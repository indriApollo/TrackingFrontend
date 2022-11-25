<script setup>
import { RouterLink, RouterView } from "vue-router";
import Map from "./components/Map.vue";
</script>

<template>
  <Map class="bg-full">
  <header>
      <nav>
        <RouterLink to="/">map</RouterLink>
      </nav>
  </header>

  <RouterView />
  </Map>

</template>

<style scoped>
  .bg-full >>> #map {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>