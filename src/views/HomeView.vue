<script setup>
import DeviceMenu from '../components/DeviceMenu.vue';
import { ref } from 'vue';
import { Device, DeviceInfo, MovementStatus } from '../models/DeviceModel.js';

const itemInfo = new DeviceInfo(12.34, new Date().toLocaleString(), 123);

const items = [
    new Device(11, 'device one', MovementStatus.DRIVING, itemInfo),
    new Device(22, 'device two', MovementStatus.STOPPED, itemInfo),
    new Device(33, 'device three', MovementStatus.OFFLINE, itemInfo)
];

</script>

<template>
    <DeviceMenu :devices="items"/>
</template>

<style scoped>

</style>