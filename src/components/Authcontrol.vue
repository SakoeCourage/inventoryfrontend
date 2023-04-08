<template>
    
    <div class="relative flex items-center text-sm ">
        <nav class="mx-2 cursor-pointer" @click="showdrop=!showdrop">Admin <font-awesome-icon icon="circle-chevron-down" :class=" ['text-xs ',showdrop && 'transform rotate-180']" /></nav>
        <div class="mx-2 absolute -left-5 -bottom-[120%] bg-gray-400/30  y-2 pl-2" v-if="showdrop">
            <ul>
           
                <li class="cursor-pointer my-1 border-b-2 border-gray-400/30 pr-8 flex items-center"><nav >logout </nav> <font-awesome-icon class="ml-2" icon="power-off"/> </li>
                
                <li class="cursor-pointer my-1 flex items-center"><nav>setting  </nav> <font-awesome-icon class="ml-2" icon="gear"/></li>
            </ul>

        </div>

        <nav>
            <img src="/images/profile.jpg"  class=" h-10 object-cover w-10 ml-8 rounded-full" alt="">

        </nav>
    </div>

    
</template>

<script setup>
import {ref} from "vue"
let showdrop = ref(false)

</script>