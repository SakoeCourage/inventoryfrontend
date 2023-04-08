<template>
    
    <button class=" px-2 py-1 text-white bg-blue-400 rounded-sm" @click="$emit('clicked')">
        <span><font-awesome-icon icon="plus"/></span>
        <span class="ml-2">New</span>

    </button>
</template>

<script setup>
    import {defineEmits} from 'vue'
    const emit = defineEmits(["clicked"])
</script>