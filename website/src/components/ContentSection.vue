<script setup lang="ts">

defineProps<{
    title: string
    collapsed: {
        type: boolean,
        default: false
    }
}>()

</script>

<template>
    <div class="content-container">
        <h1 @click="collapsed = !collapsed">
            {{ title }}
        </h1>
        <div class="content" v-show="!collapsed">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
div.content-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1em 5em;
    align-self: stretch;
}

div.content {
    display: flex;
    flex-grow: 0;
}

h1 {
    cursor: pointer;
    width: 100%;
}
</style>
