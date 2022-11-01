<script setup>

</script>

<template>
    <div class="info-container">
        <span class="info-item">
            <font-awesome-icon icon="fa-solid fa-bolt" />
            12.34 V
        </span>
        <span class="info-item">
            <font-awesome-icon icon="fa-solid fa-clock" />
            2022-03-04 16:45:32
        </span>
        <span class="info-item">
            <font-awesome-icon icon="fa-solid fa-gauge-high" />
            123 km/h
        </span>
    </div>
</template>

<style scoped>
    .info-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .info-item {
        white-space: nowrap;
    }
</style>