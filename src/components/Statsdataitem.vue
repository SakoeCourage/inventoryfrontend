<template>
       
          <div class="flex px-4 justify-center items-center w-max  py-1 border-2 rounded-lg bg-gray-50 shadow-sm">
                <nav class="  pt-1 self-start">
                    <span class="text-blue-600 border-2  bg-blue-100 border-blue-300 p-1 px-2 rounded-md">
                        %
                    </span>

                </nav>
                <nav class=" text-blue-600 font-semibold  mx-2 ">
                    <span class=" text-xl"> {{ new Intl.NumberFormat().format(AmountYield) }}</span>
                    <div class=" text-gray-400 text-xs mt-2">
                        {{ Day }}'s sale
                    </div>
                </nav>
                <nav class=" self-start p-1 ml-2 flex items-center">
                    <span><font-awesome-icon size="xs"  class="transfrom rotate-180 text-green-400"  icon="arrow-down" /> </span> 
                    <span class="text-xs ml-1 text-gray-500">12%</span> 
                </nav>

          </div>

   

</template>

<script setup>
import { defineProps, onMounted } from "vue";

let props = defineProps(["AmountYield","Day"])

onMounted(()=>{

    
})


</script>