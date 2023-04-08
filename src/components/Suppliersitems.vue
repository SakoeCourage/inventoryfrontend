<template>
    <div>
<div class="relative inline-block text-left">
    <div>
        <button type="button" :class="['  bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500', hovered && 'border border-gray-300']" @mouseover="hovered=true" @mouseout="hovered=false" id="options-menu" >
            View Items
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                </path>
            </svg>
        </button>
    </div>
    <div v-if="hovered" class="absolute z-10  mt-3 transform px-10 min-w-max max-w-md sm:px-0 lg:ml-0   lg:left-[80%] lg:-translate-x-[90%]">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="relative  bg-white dark:bg-gray-800  divide-gray-100">
                <ul class="items-center hover:bg-gray-50 px-8">
                   
                    <li class="ml-4" v-for="(item,i) in products" :key="i">
                        
                        <p class="mt-1 text-sm text-gray-500  dark:text-gray-400">
                            {{ item }}
                        </p>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</div>
</div>


</template>

<script setup>

    import {ref, defineProps} from "vue"
    let props = defineProps(["products"])
    let hovered = ref(false)



</script>