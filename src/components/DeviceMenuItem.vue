<script setup>
import { computed } from 'vue';
import { MovementStatus } from '../models/DeviceModel';
const props = defineProps({
    item: {
        type: Object,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

const sbClass = computed(() => {
    switch (props.item.status) {
        case MovementStatus.OFFLINE:
            return 'sb-offline';
        case MovementStatus.DRIVING:
            return 'sb-driving';
        case MovementStatus.STOPPED:
            return 'sb-stopped';
        default:
            throw `DeviceMenuItem: invalid status ${props.item.status}`;
    }
});
</script>

<template>
    <li :class="['item-container', { active: isActive }]">
        <span class="item-name">{{ item.name }}</span>
        <span :class="['status-bubble', sbClass]"></span>
        <span class="item-btn">
            <font-awesome-icon icon="fa-solid fa-road" />
        </span>
    </li>
</template>

<style scoped>
.active {
    border-color: var(--peter-river) !important;
}

.item-container {
    display: flex;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 2px;
    background-color: var(--clouds);
    border: 3px solid var(--clouds);
    transition: none 0.2s ease-in-out;
    transition-property: border;
}

.item-name {
    flex-grow: 1;
    font-size: 22px;
    font-weight: bold;
}

.item-btn svg {
    align-self: center;
    font-size: 1.5em;
    width: 0;
    opacity: 0;
    transition: none 0.2s ease-in-out;
    transition-property: width, opacity;
}

.item-container:hover>.item-btn svg {
    width: 1.5em;
    opacity: 1;
    cursor: pointer;
}

.status-bubble {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    align-self: center;
    margin: 0 10px;
}

.sb-driving {
    background-color: var(--emerald);
}

.sb-stopped {
    background-color: var(--asbestos);
}

.sb-offline {
    background-color: var(--alizarin);
}
</style>
