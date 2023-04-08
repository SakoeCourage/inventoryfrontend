<template>
    <div class="grid place-items-center h-full   w-full   " >


        <nav  @click="showSubContents=!showSubContents" :class="['flex items-center relative  w-full hover:bg-slate-900 px-2 py-1 sidebaritem rounded-lg', showSubContents && 'bg-slate-900']" >
        <font-awesome-icon  :icon="icon"/>
        <nav class="icon-text ml-4 my-0 p-0 content  text-sm" >{{caption}}</nav>
        <font-awesome-icon icon="circle-chevron-down" :class=" ['text-xs absolute right-2', showSubContents && 'transform rotate-180']" v-if="showdrop"/>
        </nav>


        <!-- this is for sidebar expandable  items -->
        <div :id="`expand${name}`" class="w-full  overflow-hidden subcontents  h-0 bg-slate-900/30 transition-[height] ease-linear duration-200 ">
            <ul v-for="(items,i) in subcontents" :key="i" class=" text-sm  hover:bg-slate-900 w-full pl-10 ">
                <li class="flex items-center my-2 mx-2" @click="$router.push({name: items.route})" >
                      <font-awesome-icon icon="circle" class=" text-xs mr-3"/>  <span>{{ items.caption }}</span> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref, watch } from 'vue';
import router from '../router';


const props = defineProps(['name','icon','subcontents','caption','showdrop'])

let showSubContents = ref(false)
let height = ref('0')


let items = ()=>{
          let items =  document.querySelector(`#expand${props.name}`)
          height.value = items.scrollHeight
          return items
}




watch(showSubContents,()=>{
  
    let item = document.querySelector(`#expand${props.name}`)
    showSubContents.value ? ( item.style.height = height.value +"px"): item.style.height = "0px"
})



onMounted(()=>{
    
        items()
    
})



</script>

<style>


.expandheight{
     
     transition: height 1s;
}



</style>
