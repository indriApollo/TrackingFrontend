<script setup>
import DeviceMenuItem from './DeviceMenuItem.vue';
import DeviceMenuItemInfo from './DeviceMenuItemInfo.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import eventBus from '../eventBus.js';
import { Device, DeviceInfo, MovementStatus } from '../models/DeviceModel.js';

const props = defineProps({
    devices: {
        type: Array,
        required: true
    }
});

const activeDeviceId = ref(0);

const isItemInfoActive = computed(() => activeDeviceId.value > 0);

const itemInfo = computed(() => {
    const blankInfo = new DeviceInfo('00.00', '00/00/0000, 00:00:00', '000');
    return isItemInfoActive.value ? props.devices.find(d => d.id == activeDeviceId.value).info : blankInfo;
});

onMounted(() => {
    eventBus.on('markerSelected', deviceId => activeDeviceId.value = deviceId);
    eventBus.on('markerDeselected', () => activeDeviceId.value = 0);
});

onUnmounted(() => {
    eventBus.off('markerSelected');
    eventBus.off('markerDeselected');
});

function selectDevice(deviceId) {
    if (activeDeviceId.value > 0)
        eventBus.emit(`deviceDeselected-${activeDeviceId.value}`);
    
    eventBus.emit(`deviceSelected-${deviceId}`);
    activeDeviceId.value = deviceId;
}

function deselectDevice(deviceId) {
    eventBus.emit(`deviceDeselected-${deviceId}`);
    activeDeviceId.value = 0;
}

</script>

<template>
    <div class="menu-box">
        <ul>
            <DeviceMenuItem v-for="device in devices" :item="device" :is-active="activeDeviceId == device.id" :key="device.id"
                @mouseenter="selectDevice(device.id)" @mouseleave="deselectDevice(device.id)" />
        </ul>
        <DeviceMenuItemInfo :item-info="itemInfo" :is-active="isItemInfoActive" />
    </div>
</template>

<style scoped>
.menu-box {
    width: 320px;
    margin: 15px;
}

.menu-box>ul {
    padding: 0;
    margin: 0;
}
</style>
