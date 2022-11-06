<script setup>
import DeviceMenuItem from './DeviceMenuItem.vue';
import DeviceMenuItemInfo from './DeviceMenuItemInfo.vue';
import { ref } from 'vue';

const itemInfo = ref({
    voltage: 12.34,
    datetime: new Date().toLocaleString(),
    speed: 123
});

const item = ref({
    name: 'device name',
    status: 1
});
</script>

<template>
    <div class="menu">
        <ul>
            <DeviceMenuItem :item="item"/>
            <DeviceMenuItem :item="item"/>
            <DeviceMenuItem :item="item"/>
            <DeviceMenuItem :item="item"/>
        </ul>
        <DeviceMenuItemInfo :item-info="itemInfo"/>
    </div>
</template>

<style scoped>
    .menu {
        background-color: white;
        border-radius: 10px;
        width: 300px;
        margin: 15px;
        padding: 10px;
        z-index: 1000;
        position: relative;
    }

    .menu ul {
        padding: 0;
        margin: 0;
    }
</style>
