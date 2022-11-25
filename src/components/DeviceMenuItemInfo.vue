<script setup>
defineProps({
    itemInfo: {
        type: Object,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});
</script>

<template>
    <div :class="['info-container', { active: isActive }]">
        <span class="info-item">
            <font-awesome-icon icon="fa-solid fa-bolt" />
            <span class="info-item-value voltage">{{ itemInfo.voltage }}</span> V
        </span>
        <span class="info-item">
            <font-awesome-icon icon="fa-solid fa-clock" />
            <span class="info-item-value date">{{ itemInfo.datetime }}</span>
        </span>
        <span class="info-item">
            <font-awesome-icon icon="fa-solid fa-gauge-high" />
            <span class="info-item-value speed">{{ itemInfo.speed }}</span> km/h
        </span>
    </div>
</template>

<style scoped>
.active {
    color: black !important;
}

.info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: var(--silver);
    transition: none 0.2s ease-in-out;
    transition-property: color;
}

.info-item {
    white-space: nowrap;
}

.info-item-value {
    display: inline-block;
    margin-left: 5px;
    text-align: right;
    font-family: monospace, monospace;
}

.voltage {
    width: 48px;
}

.date {
    width: 200px;
}

.speed {
    width: 32px;
}
</style>
