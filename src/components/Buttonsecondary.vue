<template>
    <button  v-text="text" @click="$emit('clicked')" type="button" class=" mb-2 w-full inline-block px-2 py-1 bg-blue-400 text-white font-medium text-xs leading-normal  rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"></button>

</template>

<script setup>

    import { defineProps,defineEmits } from 'vue';
    let props = defineProps(["text"])
    let emit = defineEmits(["cliked"])



</script>

