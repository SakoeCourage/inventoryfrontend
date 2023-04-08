<template>
    <div class="w-full h-full mx-auto  ">

     <div class="flex w-full    min-h-screen containter" >
    <Sidebar class="transition-width ease-in-out   "/>

    <div  class=" border-2  flex-grow w-full ">
      <div class="flex justify-between border-2 border-b-gray-200 px-2 bg-gray-50 sticky top-0 "><Search class="w-[30%]" /> <Authcontrol class=" max-w-max"/> </div>
        <slot></slot>
 
      
    </div>


  </div>



  </div>
</template>

<script setup>
import { defineComponent } from "@vue/runtime-dom";
import Sidebar from "./Sidebar.vue";
import Search from './Search.vue'
import Authcontrol from "./Authcontrol.vue"
defineComponent([Sidebar,Search,Authcontrol])
</script>