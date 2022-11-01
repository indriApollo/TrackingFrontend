<script setup>
import DeviceMenuItem from './DeviceMenuItem.vue';
import DeviceMenuItemInfo from './DeviceMenuItemInfo.vue';
</script>

<template>
    <div class="menu">
        <ul>
            <DeviceMenuItem />
            <DeviceMenuItem />
            <DeviceMenuItem />
            <DeviceMenuItem />
        </ul>
        <DeviceMenuItemInfo />
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