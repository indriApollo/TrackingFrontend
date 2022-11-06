<script setup>
defineProps({
    itemInfo: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="info-container">
        <span class="info-item">
            <font-awesome-icon icon="fa-solid fa-bolt" />
            {{ itemInfo.voltage }} V
        </span>
        <span class="info-item">
            <font-awesome-icon icon="fa-solid fa-clock" />
            {{ itemInfo.datetime }}
        </span>
        <span class="info-item">
            <font-awesome-icon icon="fa-solid fa-gauge-high" />
            {{ itemInfo.speed }} km/h
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
