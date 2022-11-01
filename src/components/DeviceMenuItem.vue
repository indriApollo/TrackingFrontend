<script setup>

</script>

<template>
    <li class="item-container">
        <span class="item-name">device name</span>
        <span class="status-bubble sb-offline"></span>
        <span class="item-btn">
            <font-awesome-icon icon="fa-solid fa-road" />
        </span>
    </li>
</template>

<style scoped>
.item-container {
    display: flex;
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 5px;
    background-color: var(--clouds);
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

.item-container:hover > .item-btn svg {
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